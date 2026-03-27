/**
 * Fetches missions from Notion and writes generated/missions.{fr,en}.json
 * Run automatically before `next build` (see package.json).
 * Requires NOTION_TOKEN and NOTION_DATABASE_ID (.env / .env.local at repo root).
 */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const path = require("path");

const rootDir = path.join(__dirname, "..");
require("dotenv").config({ path: path.join(rootDir, ".env") });
require("dotenv").config({
  path: path.join(rootDir, ".env.local"),
  override: true,
});

const { Client } = require("@notionhq/client");

const OUT_FR = path.join(__dirname, "../generated/missions.fr.json");
const OUT_EN = path.join(__dirname, "../generated/missions.en.json");

function getRichText(properties, key) {
  const block = properties[key];
  if (!block || block.type !== "rich_text") return "";
  const parts = block.rich_text || [];
  return parts.map((t) => t.plain_text).join("");
}

function parseJsonRichText(properties, key, fallbackKey) {
  const raw =
    getRichText(properties, key) ||
    (fallbackKey ? getRichText(properties, fallbackKey) : "");
  if (!raw || !raw.trim()) return {};
  try {
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function parseMentions(properties) {
  const raw = getRichText(properties, "mentions");
  if (!raw || !raw.trim()) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function parseMedia(properties) {
  const raw = getRichText(properties, "media");
  if (!raw || !raw.trim()) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function mapPageToMission(page, locale) {
  const p = page.properties;
  const detailKey = locale === "fr" ? "detailText_FR" : "detailText_EN";
  const contentKey = locale === "fr" ? "content_FR" : "content_EN";
  const legacyDetail = "detailText";
  const legacyContent = "content";

  const detailText =
    getRichText(p, detailKey) || getRichText(p, legacyDetail) || "";
  const content = parseJsonRichText(p, contentKey, legacyContent);

  return {
    id: p.ID?.unique_id?.number ?? 0,
    year: p.year?.date?.start || new Date().toISOString().slice(0, 10),
    title: p.title?.title?.[0]?.plain_text ?? "",
    detailText,
    content,
    mentions: parseMentions(p),
    tags: (p.Tags?.multi_select || []).map((t) => t.name),
    url: getRichText(p, "url"),
    externalUrl: getRichText(p, "externalUrl"),
    company: getRichText(p, "company"),
    icon: getRichText(p, "icon"),
    media: parseMedia(p),
  };
}

async function main() {
  if (!process.env.NOTION_TOKEN || !process.env.NOTION_DATABASE_ID) {
    console.warn(
      "[sync-notion-missions] NOTION_TOKEN or NOTION_DATABASE_ID missing — skipping Notion sync (keeping existing JSON).",
    );
    return;
  }

  const client = new Client({ auth: process.env.NOTION_TOKEN });
  const response = await client.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
  });

  const results = response.results || [];

  const sortByDate = (a, b) => {
    const da = new Date(a.properties?.year?.date?.start || 0).getTime();
    const db = new Date(b.properties?.year?.date?.start || 0).getTime();
    if (da < db) return 1;
    if (da > db) return -1;
    return 0;
  };

  const sorted = [...results].sort(sortByDate);

  const missionsFr = sorted
    .map((page) => mapPageToMission(page, "fr"))
    .filter((m) => m.id != null && Number(m.id) > 0);
  const missionsEn = sorted
    .map((page) => mapPageToMission(page, "en"))
    .filter((m) => m.id != null && Number(m.id) > 0);

  fs.mkdirSync(path.dirname(OUT_FR), { recursive: true });
  fs.writeFileSync(OUT_FR, JSON.stringify(missionsFr, null, 2), "utf8");
  fs.writeFileSync(OUT_EN, JSON.stringify(missionsEn, null, 2), "utf8");

  console.log(
    `[sync-notion-missions] Wrote ${missionsFr.length} missions per locale.`,
  );
}

main().catch((err) => {
  console.error("[sync-notion-missions]", err);
  process.exit(1);
});

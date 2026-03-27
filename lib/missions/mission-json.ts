import type { Locale } from "@/lib/i18n/config";
import missionsFr from "@/generated/missions.fr.json";
import missionsEn from "@/generated/missions.en.json";

/** Shape stored in generated JSON (dates as ISO strings). */
export type MissionRecordJson = {
  id: number;
  year: string;
  title: string;
  detailText: string;
  content: Record<string, string>;
  mentions: MentionType[];
  tags: string[];
  url: string;
  externalUrl: string;
  company: string;
  icon: string;
  media: unknown;
};

const byLocale: Record<Locale, MissionRecordJson[]> = {
  fr: missionsFr as unknown as MissionRecordJson[],
  en: missionsEn as unknown as MissionRecordJson[],
};

export function getMissionRecords(locale: Locale): MissionRecordJson[] {
  return byLocale[locale] ?? [];
}

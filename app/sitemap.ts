import { MetadataRoute } from "next";
import getAllMissions from "@/lib/getAllMissions";
import { getSiteUrl } from "@/lib/site-url";
import { locales } from "@/lib/i18n/config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = getSiteUrl();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    const allMissions = await getAllMissions(locale);

    entries.push({
      url: `${base}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    });
    entries.push({
      url: `${base}/${locale}/career`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.9,
    });
    entries.push({
      url: `${base}/${locale}/skills`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    });
    entries.push({
      url: `${base}/${locale}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    });

    for (const m of allMissions) {
      entries.push({
        url: `${base}/${locale}/career/${m.id}`,
        lastModified: new Date(),
        priority: 0.6,
      });
    }
  }

  return entries;
}

import {MetadataRoute} from 'next'
import getAllMissions from "@/lib/getAllMissions";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allMissions = await getAllMissions();

  const careerPages = allMissions.reduce(
    (accumulator: any[], currentValue: Omit<MissionType, "reverse">) => {
      accumulator.push({
        url: `https://huygens.io/career/${currentValue.id.toString()}`,
        lastModified: new Date(),
        priority: 0.6
      });
      return accumulator;
    },
    []
  );

  return [
    {
      url: 'https://huygens.io',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://huygens.io/career',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://huygens.io/skills',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://huygens.io/contact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    ...careerPages,
  ]
}
import type { Locale } from "@/lib/i18n/config";
import {
  getMissionRecords,
  type MissionRecordJson,
} from "@/lib/missions/mission-json";

function toMissionType(
  item: MissionRecordJson,
  index: number,
  withReverse: boolean
): MissionType {
  return {
    id: item.id,
    year: new Date(item.year),
    title: item.title,
    detailText: item.detailText,
    media: item.media ?? {},
    tags: item.tags,
    url: item.url,
    reverse: withReverse ? !!(index % 2) : false,
    content: item.content,
    mentions: item.mentions ?? [],
    company: item.company,
    icon: item.icon,
    externalUrl: item.externalUrl ?? "",
  };
}

export function getAllMissions(locale: Locale): Omit<MissionType, "reverse">[] {
  const records = getMissionRecords(locale);
  return records.map((item, id) => {
    const m = toMissionType(item, id, false);
    const { reverse: _r, ...rest } = m;
    return rest;
  });
}

export function getMissionByID(
  missionId: number,
  locale: Locale
): Omit<MissionType, "reverse"> | null {
  const records = getMissionRecords(locale);
  const item = records.find((r) => r.id === missionId);
  if (!item) return null;
  const m = toMissionType(item, 0, false);
  const { reverse: _r, ...rest } = m;
  return rest;
}

const sortByDate = (a: Date, b: Date) => {
  const dateA = new Date(a).getTime();
  const dateB = new Date(b).getTime();
  if (dateA < dateB) return 1;
  if (dateA > dateB) return -1;
  return 0;
};

const groupMissionsByYear = (missions: MissionType[]) => {
  const missionCategories = new Set<number>();
  missions.forEach((item) => missionCategories.add(item.year.getFullYear()));

  const groupedCategories: {
    year: number;
    foundMissionsByYear: MissionType[];
  }[] = [];

  missionCategories.forEach((year) => {
    const foundMissionsByYear = missions.filter(
      (item) => item.year.getFullYear() === year
    );
    groupedCategories.push({ year, foundMissionsByYear });
  });

  return groupedCategories;
};

export function getAllMissionsByYear(
  locale: Locale
): { year: number; foundMissionsByYear: MissionType[] }[] {
  const records = getMissionRecords(locale);
  const missions = [...records]
    .sort((a, b) => sortByDate(new Date(a.year), new Date(b.year)))
    .map((item, id) => toMissionType(item, id, true));

  return groupMissionsByYear(missions);
}

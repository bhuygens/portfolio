import type { Locale } from "@/lib/i18n/config";
import { getMissionByID as loadMission } from "@/lib/missions/mission-service";

export default function getMissionByID(
  missionId: number,
  locale: Locale
): Omit<MissionType, "reverse"> | null {
  return loadMission(missionId, locale);
}

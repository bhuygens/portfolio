import type { Locale } from "@/lib/i18n/config";
import { getAllMissionsByYear as loadMissionsByYear } from "@/lib/missions/mission-service";

export default function getAllMissionsByYear(locale: Locale) {
  return loadMissionsByYear(locale);
}

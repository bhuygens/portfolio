import type { Locale } from "@/lib/i18n/config";
import { getAllMissions as loadAllMissions } from "@/lib/missions/mission-service";

export default function getAllMissions(locale: Locale) {
  return loadAllMissions(locale);
}

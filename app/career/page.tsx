import React from "react";
import styles from "./page.module.scss";
import getAllMissions from "@/lib/getAllMissions";
import displayYear from "@/app/career/components/year/year";
import MissionCard from "@/app/career/components/missionCard/missionCard";

export default async function CareerPage() {
  const missions: { year: number; foundMissionsByYear: MissionType[]; }[] = await getAllMissions();
  return (
    <>
      {missions.map(mission => (
        <section className={styles.section} key={mission.year}>
          <div className={styles.titleSection}>
            {displayYear(mission)}
          </div>
          <div className={styles.cSection}>
            {mission.foundMissionsByYear.map((item: MissionType, id: number) => (
              <div className={styles.contentSection} key={item.year.getDate()}>
                <MissionCard year={item.year} title={item.title} detailText={item.detailText} media={item.media}
                             tags={item.tags} url={item.url} reverse={item.reverse} key={id}/>
              </div>
            ))}
          </div>

        </section>
      ))}
    </>
  );
}

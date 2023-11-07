import React from "react";
import styles from "./page.module.scss";
import getAllMissionsByYear from "@/lib/getAllMissionsByYear";
import displayYear from "@/app/career/components/year/year";
import MissionCard from "@/app/career/components/missionCard/missionCard";
import ArrowDown from "@/components/arrow_down/arrow-down";
import Podium from "@/app/career/components/podium/podium";

const missionSample = {
  title: "Backend Developer",
  company: "Decathlon",
  id: 1,
  image: "decathlon",
  date: 2023 - 10 - 10
}
export default async function CareerPage() {
  const missions: { year: number; foundMissionsByYear: MissionType[]; }[] = await getAllMissionsByYear();

  return (
    <>
      <div className={styles.main_missions}>
        <h1 className={styles.title}>My Missions</h1>
        <div className={styles.content}>
          <Podium/>
        </div>

        <ArrowDown linkTo={"missions"}/>
      </div>
      <div id={"missions"}>
        {missions.map(mission => (
          <section className={styles.section} key={mission.year}>
            <div className={styles.titleSection}>
              {displayYear(mission)}
            </div>
            <div className={styles.cSection}>
              {mission.foundMissionsByYear.map((item: MissionType, id: number) => (
                <a href={`/career/${item.id}`} className={styles.contentSection} key={item.year.getDate()}>
                  <MissionCard year={item.year} title={item.title} detailText={item.detailText} media={item.media}
                               tags={item.tags} url={item.url} reverse={item.reverse} key={id}/>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
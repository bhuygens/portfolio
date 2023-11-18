import React from "react";
import styles from "./page.module.scss";
import getAllMissionsByYear from "@/lib/getAllMissionsByYear";
import PageIntro from "@/components/page-intro/page-intro";
import {Metadata} from "next";
import MissionsRow from "@/app/career/components/missions-row/missions-row";

export const metadata: Metadata = {
  title: 'Huygens - Career',
  description: 'This is all of my experiences',
}

export default async function CareerPage() {
  const missions: { year: number; foundMissionsByYear: MissionType[]; }[] = await getAllMissionsByYear();

  return (
    <div style={{background: "#DCDAFB", color: "black"}}>
      <div className={styles.title}>
        <PageIntro title={"Missions"}
                   subtitle={"I've been involved in 10 projects. Most of the time in Javascript, for both front and back ends"}/>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          {
            missions.map((missionPerYear) => (
              <MissionsRow key={missionPerYear.year} missionPerYear={missionPerYear}/>
            ))
          }
        </div>
      </div>
    </div>
  );
}
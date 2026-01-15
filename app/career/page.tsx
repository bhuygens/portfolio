import React from "react";
import styles from "./page.module.scss";
import getAllMissionsByYear from "@/lib/getAllMissionsByYear";
import { Metadata } from "next";
import MissionsRow from "@/app/career/components/missions-row/missions-row";

export const metadata: Metadata = {
  title: "Benjamin Huygens - Career",
  description: "Explore my professional journey and missions",
};

export default async function CareerPage() {
  const missions: { year: number; foundMissionsByYear: MissionType[] }[] =
    await getAllMissionsByYear();

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <span className={styles.tag}>Career</span>
        <h1 className={styles.title}>
          My Professional <span className={styles.gradient}>Journey</span>
        </h1>
        <p className={styles.subtitle}>
          I&apos;ve been involved in 11 projects. Most of the time in Javascript
          (TS), for both front and back.
        </p>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          {missions.map((missionPerYear) => (
            <MissionsRow key={missionPerYear.year} missionPerYear={missionPerYear} />
          ))}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import getMissionByID from "@/lib/getMissionById";
import getAllMissions from "@/lib/getAllMissions";
import styles from "./page.module.scss";
import Image from "next/image";
import {Metadata} from "next";

type Params = {
  params: {
    id: string,
  }
}

export async function generateStaticParams() {
  const allMissions = await getAllMissions()
  return allMissions.map((mission) => ({
    id: mission.id.toString(),
  }));
}

export async function generateMetadata({params: {id}}: Params): Promise<Metadata> {
  const mission: Omit<MissionType, "reverse"> = await getMissionByID(+id);

  if (!mission.id) {
    return {
      title: "Mission not found",
    }
  }

  return {
    title: mission.title,
    description: mission.id.toString(),
  }

}

export default async function CareerDetailPage({params: {id}}: Params) {
  const mission: Omit<MissionType, "reverse"> = await getMissionByID(+id);

  const displayContent = () => {
    return (
      <ol>
        {Object.entries(mission.content).map(([key, value]) => (
          <li key={key} style={{marginBottom: "80px"}}>
            <h2 id={key} style={{marginBottom: "24px"}}>{key}</h2>
            <div dangerouslySetInnerHTML={{__html: value}}></div>
          </li>
        ))}
      </ol>
    );
  };

  const displaySidebar = () => {
    return (
      <div className={styles.sidebarContent}>
        <p><strong>SUMMARY</strong></p>
        <ol>
          {Object.entries(mission.content).map(([key, value]) => (
            <li key={key} style={{marginBottom: "12px"}}>
              <a href={`#${key}`}>{key}</a>
            </li>
          ))}
        </ol>
        <svg width="64" height="1">
          <rect width="64" height="1" style={{fill: "white"}}/>
        </svg>
        <div>
          <svg height="26" width="26">
            <circle cx="13" cy="13" r="12" stroke="white" strokeWidth={1}></circle>
          </svg>
          <svg height="26" width="26">
            <circle cx="13" cy="13" r="12" stroke="white" strokeWidth={1}></circle>
          </svg>
          <svg height="26" width="26">
            <circle cx="13" cy="13" r="12" stroke="white" strokeWidth={1}></circle>
          </svg>
          <svg height="26" width="26">
            <circle cx="13" cy="13" r="12" stroke="white" strokeWidth={1}></circle>
          </svg>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.careerDetailContainer}>
      <div className={styles.header}>
        <div className={styles.tags}>
          {mission.tags.map((tag, id) => <p key={id}>{tag}</p>)}
        </div>
        <h1>{mission.title}</h1>
      </div>

      {
        mission.url &&
        <Image alt={mission.title}
               src={mission.url}
               width={100}
               height={100}
               sizes="100vw"
               style={{
                 width: "100vw",
                 height: "auto",
               }}
               className={styles.image_presentation}
               priority
        />
      }

      <div className={styles.sidebar}>
        {displaySidebar()}
      </div>
      <div className={styles.content}>
        {displayContent()}
      </div>
    </div>
  );
}


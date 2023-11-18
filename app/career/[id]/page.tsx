import React from "react";
import getMissionByID from "@/lib/getMissionById";
import getAllMissions from "@/lib/getAllMissions";
import styles from "./page.module.scss";
import Image from "next/image";
import {Metadata} from "next";
import Link from "next/link";
import CareerDetailWebsite from "@/app/career/[id]/components/career-detail-website/career-detail-website";

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
    title: `Huygens - ${mission.company}`,
    description: mission.id.toString(),
  }

}

export default async function CareerDetailPage({params: {id}}: Params) {
  const mission: Omit<MissionType, "reverse"> = await getMissionByID(+id);

  const displayContent = () => {
    return (
      Object.entries(mission.content).map(([key, value]) => (
        <li key={key} style={{marginBottom: "80px"}}>
          <h2 id={key} style={{marginBottom: "24px"}}>{key}</h2>
          <div dangerouslySetInnerHTML={{__html: value}}></div>
        </li>
      ))
    );
  };

  const displaySidebar = () => {
    return (
      <div className={styles.sidebarContent}>
        <h3>Summary</h3>
        <ol>
          {Object.entries(mission.content).map(([key, value]) => (
            <li key={key} className={styles.sidebar_item}>
              <a href={`#${key}`}>{key}</a>
            </li>
          ))}
          <li className={styles.sidebar_item}>
            <a href={`#mentions`}>Mentions</a>
          </li>
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

  const displayMentions = () => {
    return (
      <li style={{marginBottom: "80px"}}>
        <h2 id="mentions" style={{marginBottom: "24px"}}>Mentions</h2>
        <div className={styles.mentions_container}>
          <div className={styles.mention_content}>
            {
              mission.mentions.map((item: MentionType, index: number) =>
                <Link href={item.link} target="_blank" key={index} className={styles.mentions_item}>
                  <Image alt={item.title} src={item.image_url} className={styles.mentions_itemImage}
                         width={220} height={0}/>
                  <h2 className={styles.mentions_itemTitle}>{item.title}</h2>
                  <p className={styles.mentions_itemSubtitle}>{item.subtitle}</p>
                  <div className={styles.mentions_itemTags}>
                    {item.tags.map((tag: string, index: number) => <span key={index}>{tag}</span>)}
                  </div>
                </Link>
              )
            }
          </div>
        </div>
      </li>
    )
  }

  return (
    <div className={styles.careerDetailContainer}>
      <div className={styles.header}>
        <div className={styles.header_tags}>
          {mission.tags.map((tag, id) => <span key={id}>{tag}</span>)}
        </div>
        <h1 className={styles.header_title}>{mission.title} @ {mission.company}</h1>
      </div>

      {mission.url && <CareerDetailWebsite title={mission.title} url={mission.url}/>}

      <div className={styles.sidebar}>
        {displaySidebar()}
      </div>
      <div className={styles.content}>
        <ol style={{textAlign: "justify"}}>
          {displayContent()}
          {displayMentions()}
        </ol>

      </div>
    </div>
  );
}


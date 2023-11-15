"use client"
import React from "react";
import styles from "./missionCard.module.scss";
import {CldImage} from "next-cloudinary";
import useWindowSize from "@/hooks/window.hook";


type MissionCardProps = {
  year: Date,
  title: string,
  detailText: string,
  media: any,
  tags: string[],
  url: string,
  reverse: boolean
}

export default function MissionCard({year, title, detailText, media, tags, reverse}: MissionCardProps) {
  const {windowsWidth} = useWindowSize();
  return (
    <div className={`${styles.missionCard} ${(reverse && windowsWidth > 768) ? styles.reverse : ""}`}>
      <div className={styles.missionCard_image}>
        <CldImage className={styles.missionCard_image} width="270" height="300" src={media.source.url}
                  alt="<Alt Text>"/>
      </div>
      <div className={styles.missionCard_content}>
        <div className={styles.tags}>
          {tags?.map((tag) => (
            <p key={tag}>{tag}</p>
          ))}
        </div>

        <div>
          <p className={styles.title}>{title}</p>
          {
            windowsWidth > 768 &&
              <div className={styles.detailText} dangerouslySetInnerHTML={{__html: detailText}}/>
          }
        </div>
      </div>
    </div>
  );
}

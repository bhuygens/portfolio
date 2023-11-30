"use client"
import React from "react";
import styles from "./missionCard.module.scss";
import {CldImage} from "next-cloudinary";
import {motion} from "framer-motion";
import {Tooltip} from "@mui/material";
import {CommonHelper} from "@/helpers/common.helper";

type MissionCardProps = {
  title: string,
  media: any,
  tags: string[],
  url: string,
  id: string,
  company: string,
}


export default function MissionCard({media, tags, title, url, id, company}: MissionCardProps) {
  return (
    <motion.a
      className={styles.container} href={`/career/${id}`}
      whileHover={{scale: 1.1}}
      whileTap={{scale: 0.95}}
    >
      <CldImage className={`${styles.company_logo} ${id === '11' && styles.talion_logo}`} width="400" height="400"
                src={media.source.url}
                alt={media.source.url}/>

      <motion.div whileHover={{scale: 1.1}}>
        <CldImage
          className={styles.missionCard_presentation}
          alt={url}
          src={url}
          width={600}
          height={600}
          style={{width: 205, height: "auto"}}
          fetchPriority={"high"}
          priority
        />
      </motion.div>

      <div className={styles.separator}></div>
      <div className={styles.content}>

        <div className={styles.contentText}>
          <p>{title}</p>
          <p>@ {company}</p>
        </div>
      </div>
      <div className={styles.separator}></div>
      <div className={styles.tags_container}>
        {tags?.map((tag) => (
          <div key={tag} className={styles.tags_item}>
            <Tooltip title={CommonHelper.Capitalize(tag)} placement="top">
              <motion.img
                src={`/icons/${tag}.svg`}
                alt={tag}
                width={32}
                height={32}
                style={{width: "auto"}}
                whileHover={{scale: 1.05}}
              />
            </Tooltip>
          </div>
        ))}
      </div>
    </motion.a>
  )
}

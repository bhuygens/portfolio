"use client";
import React, {useRef} from "react";
import {motion, Transition, useInView, Variants} from "framer-motion";
import styles from "./missions-row.module.scss";
import SkillCategoryTitle from "@/app/skills/components/skill-title/skill-category-title";
import MissionCard from "@/app/career/components/mission-card/missionCard";

type MissionRowProps = {
  missionPerYear: { year: number; foundMissionsByYear: MissionType[] },
}

const displayVariants: Variants = {
  visible: {
    opacity: 1,
    y: 0,
  },
  hidden: {
    opacity: 0,
    y: 50,
  },
};

const displayTransition: Transition = {
  duration: 0.8,
  delay: 0.3,
  ease: "easeOut",
  stiffness: 200,
  delayChildren: 0.3,
  staggerChildren: 0.2
}
export default function MissionsRow({missionPerYear}: MissionRowProps) {

  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});


  return (
    <motion.div className={styles.content_by_year}
                ref={ref}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={displayVariants}
                transition={displayTransition}>
      <SkillCategoryTitle title={missionPerYear.year.toString()}/>
      <div className={styles.items}>
        {
          missionPerYear.foundMissionsByYear.map((item: MissionType) =>
            <MissionCard title={item.title} media={item.media}
                         tags={item.tags} url={item.url} key={item.id}
                         id={item.id.toString()}
                         company={item.company}/>
          )
        }
      </div>
    </motion.div>
  );
}
"use client"
import React, {JSX, useState} from 'react';
import SkillCategoryTitle from "@/app/skills/components/skill-title/skill-category-title";
import styles from "./development.module.scss";
import {CommonHelper} from "@/helpers/common.helper";
import {CldImage} from "next-cloudinary";
import Image from "next/image";

type SkillsDevelopmentProps = {
  skillsContent: DevelopmentSkill[]
}

function Development({skillsContent}: SkillsDevelopmentProps) {
  const [itemDisplayed, setItemDisplayed] = useState('react');


  const updateItemDisplayed = (icon: string) => {
    setItemDisplayed(icon)
  }

  function findItemsToDisplay() {
    return skillsContent.find((item: DevelopmentSkill) => item.name === itemDisplayed);
  }

  const displaySkills = (type: "frontend" | "backend" | "mobile") => {
    const filteredFrameworks = skillsContent.filter(item => item.type === type);
    return (
      <>
        <h2 className={styles.section_title}>{CommonHelper.Capitalize(type)}</h2>
        <div className={styles.frameworks_container}>
        {filteredFrameworks.map((framework: DevelopmentSkill, index: number) => (
          <div key={index} className={styles.framework_item}>
            <div className={styles.framework_icon}>
            <Image src={`/icons/${framework.image}.svg`} alt={framework.image} width={32} height={32}/>
            </div>
            <p className={styles.framework_title}>{framework.name}</p>
            <p className={styles.framework_content}>{framework.content}</p>
            <p className={styles.framework_subContent}>{framework.subContent}</p>
          </div>
        ))}
        </div>
      </>
    )
  }

  return (
    <div className={styles.container}>

      <SkillCategoryTitle title={"Development"}/>

      {displaySkills("frontend")}
      {displaySkills("backend")}
      {displaySkills("mobile")}

    </div>
  );
}

export default Development;
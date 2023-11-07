"use client"
import React, {useState} from 'react';
import SkillCategoryTitle from "@/app/skills/components/skill-title/skill-category-title";
import styles from "./development.module.scss";
import DevelopmentIcons
  from "@/app/skills/components/development/development-icons/development-icons";
import {CommonHelper} from "@/helpers/common.helper";
import Link from "next/link";
import Image from "next/image";
import ArrowDown from "@/components/arrow_down/arrow-down";

type SkillsDevelopmentProps = {
  skillsContent: DevelopmentSkill[]
}

function Development({skillsContent}: SkillsDevelopmentProps) {
  const [itemDisplayed, setItemDisplayed] = useState('react');


  const updateItemDisplayed = (icon: string) => {
    setItemDisplayed(icon)
  }

  const displaySkillContent = (): React.JSX.Element | undefined => {
    const itemToDisplay = skillsContent.find((item: DevelopmentSkill) => item.name === itemDisplayed);
    return itemToDisplay &&
        <>
          <div className={styles.contentRow}>
            <h3 className={styles.contentRowTitle}>Libraries</h3>
            {itemToDisplay.libraries.map((item: string, index: number) => <p key={index}>{item}</p>)}
          </div>
          <div className={styles.contentRow}>
            <h3 className={styles.contentRowTitle}>Linked Projects</h3>
            {itemToDisplay.linkedProjects.map((item: string, index: number) => <p key={index}>{item}</p>)}
          </div>
        </>
  }

  return (
    <div className={styles.container}>
      <SkillCategoryTitle title={"Development"}/>

      <div className={styles.content}>
        <div className={styles.content_title}>
          <h2>{CommonHelper.Capitalize(itemDisplayed)}</h2>
          {displaySkillContent()}
        </div>

        <DevelopmentIcons onIconClicked={updateItemDisplayed}/>

        <ArrowDown linkTo={"certifications"}/>
      </div>

    </div>
  );
}

export default Development;
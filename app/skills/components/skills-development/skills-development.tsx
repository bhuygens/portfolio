"use client"
import React, {useState} from 'react';
import SkillCategoryTitle from "@/app/skills/components/skill-category-title/skill-category-title";
import styles from "./skills-development.module.scss";
import SkillsDevelopmentIcons
  from "@/app/skills/components/skills-development/skills-development-icons/skills-development-icons";
import {CommonHelper} from "@/helpers/common.helper";

type SkillsDevelopmentProps = {
  skillsContent: DevelopmentSkill[]
}

function SkillsDevelopment({skillsContent}: SkillsDevelopmentProps) {
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
          <div>
            <h3 className={styles.subtitle}>Linked Projects</h3>
            {itemToDisplay.linkedProjects.map((item: string, index: number) => <p key={index}>{item}</p>)}
          </div>
        </>
  }

  return (
    <div className={styles.container}>
      <SkillCategoryTitle title={"Development"}/>

      <SkillsDevelopmentIcons onIconClicked={updateItemDisplayed}/>

      <h2>{CommonHelper.Capitalize(itemDisplayed)}</h2>
      {displaySkillContent()}
    </div>
  );
}

export default SkillsDevelopment;
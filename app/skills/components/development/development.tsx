"use client"
import React, {JSX, useState} from 'react';
import SkillCategoryTitle from "@/app/skills/components/skill-title/skill-category-title";
import styles from "./development.module.scss";
import DevelopmentIcons from "@/app/skills/components/development/development-icons/development-icons";
import {CommonHelper} from "@/helpers/common.helper";
import ArrowDown from "@/components/arrow_down/arrow-down";
import Image from "next/image";
import {CldImage} from "next-cloudinary";
type SkillsDevelopmentProps = {
  skillsContent: DevelopmentSkill[]
}

function Development({skillsContent}: SkillsDevelopmentProps) {
  const [itemDisplayed, setItemDisplayed] = useState('react');

  const icons = [['react', 'angular'], ['nest', 'node'], ['aws']];
  const flattenedIcons = icons.reduce((acc, current) => acc.concat(current), []);

  const updateItemDisplayed = (icon: string) => {
    setItemDisplayed(icon)
  }

  function findItemsToDisplay() {
    const projects = skillsContent.find((item: DevelopmentSkill) => item.name === itemDisplayed);
    return projects;
  }

  const displaySkillContent = (): JSX.Element | undefined => {
    const itemToDisplay = findItemsToDisplay();
    return itemToDisplay &&
        <div className={styles.contentRow}>
          <h3 className={styles.contentRow_title}>Libraries</h3>
          <div className={styles.contentRow_icons}>
            {itemToDisplay.libraries.map((item: string, index: number) =>
              <span key={index} style={{display: "grid", justifyItems: "center", gap: 12}}>
                  <CldImage alt={item} src={item} width={64} height={0} style={{height: "auto"}}/>
                  <p key={index}>{CommonHelper.Capitalize(item)}</p>
                </span>
            )}
          </div>
        </div>
  }


  const displayLinkedProjects = () => {
    const itemToDisplay = findItemsToDisplay();
    return itemToDisplay &&
        <>
          <h3>Linked Projects</h3>
          {itemToDisplay.linkedProjects.map((item: NotionMissionItem, index: number) =>
            <p key={index}>
              {item.properties.title.title[0].plain_text}
            </p>)}
        </>
  }
  return (
    <div className={styles.container}>
      <SkillCategoryTitle title={"Development"}/>

      <div className={styles.icon_line}>
        {flattenedIcons.map((icon: string) =>
          <p className={`${styles.skill} ${itemDisplayed === icon && styles.skill_selected}`} key={icon}
             onClick={() => updateItemDisplayed(icon)}>{CommonHelper.Capitalize(icon)}</p>
        )}
      </div>

      <div>
        <div className={styles.content}>
          <div>
            <div style={{display: "flex", flexDirection: "row", gap: 12, alignItems: "baseline"}}>
              <Image src={`/icons/${itemDisplayed}.svg`} alt={itemDisplayed} width={32} height={32}/>
              <h2 className={styles.content_title}>{CommonHelper.Capitalize(itemDisplayed)}</h2>
            </div>

            <div>
            {displaySkillContent()}
            </div>
          </div>

          <DevelopmentIcons onIconClicked={updateItemDisplayed} icons={icons}/>
        </div>


        {displayLinkedProjects()}

        <ArrowDown linkTo={"certifications"}/>
      </div>

    </div>
  );
}

export default Development;
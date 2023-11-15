"use client"
import React, {JSX, useState} from 'react';
import SkillCategoryTitle from "@/app/skills/components/skill-title/skill-category-title";
import styles from "./development.module.scss";
import DevelopmentIcons from "@/app/skills/components/development/development-icons/development-icons";
import {CommonHelper} from "@/helpers/common.helper";
import ArrowDown from "@/components/arrow_down/arrow-down";
import Image from "next/image";
import {CldImage} from "next-cloudinary";
import DevelopmentCard from "@/app/skills/components/development/development-card/development-card";

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
    return skillsContent.find((item: DevelopmentSkill) => item.name === itemDisplayed);
  }

  const displaySkillContent = (): JSX.Element | undefined => {
    const itemToDisplay = findItemsToDisplay();
    return itemToDisplay &&
        <div className={styles.contentRow}>
          <h2 className={styles.contentRow_title}>Libraries</h2>
          <div className={styles.contentRow_icons}>
            {itemToDisplay.libraries.map((item: string, index: number) =>
              <span key={index} style={{display: "grid", justifyItems: "center", gap: 12, justifyContent: "center"}}>
                  <CldImage alt={item} src={item} width={38} height={0} style={{height: "auto"}}/>
                  <p key={index}>{CommonHelper.Capitalize(item)}</p>
                </span>
            )}
          </div>
        </div>
  }


  const displayLinkedProjects = () => {
    const itemToDisplay = findItemsToDisplay();
    return itemToDisplay &&
        <div className={styles.contentRow} style={{overflowX: "scroll"}}>
          <h2 className={styles.contentRow_title}>Linked Projects</h2>
          <div className={styles.contentRow_card}>
            {itemToDisplay.linkedProjects.map((item: NotionMissionItem, index: number) =>
              <DevelopmentCard
                key={index}
                name={item.properties.title.title[0].plain_text}
                subtitle={item.properties.media.rich_text[0].plain_text}
                link={item.properties.ID.unique_id.number}
                icon={JSON.parse(item.properties.media.rich_text[0].plain_text).source.url!}
                index={index}/>
            )}
          </div>
        </div>
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
          <div style={{gridArea: "libraries"}}>
            <div style={{display: "flex", flexDirection: "row", gap: 12, alignItems: "baseline"}}>
              <Image src={`/icons/${itemDisplayed}.svg`} alt={itemDisplayed} width={32} height={32}/>
              <h2 className={styles.content_title}>{CommonHelper.Capitalize(itemDisplayed)}</h2>
            </div>
            {displaySkillContent()}
          </div>

          <div style={{gridArea: "spin"}}>
            <DevelopmentIcons onIconClicked={updateItemDisplayed} icons={icons}/>
          </div>

          <div style={{gridArea: "linkedProjects"}}>
            {displayLinkedProjects()}

          </div>
        </div>


        <ArrowDown linkTo={"certifications"}/>
      </div>

    </div>
  );
}

export default Development;
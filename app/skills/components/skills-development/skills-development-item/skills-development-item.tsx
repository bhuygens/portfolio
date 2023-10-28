import React from 'react';
import styles from "./skills-development-item.module.scss";
import Image from "next/image";

type SkillsDevelopmentItemProps = {
  title: string,
  icon: string,
  content: string[]
}

function SkillsDevelopmentItem({icon, title, content}: SkillsDevelopmentItemProps) {
  return (
    <div className={styles.container}>
      <Image src={`/icons/${icon}.svg`} alt={title} width={50} height={50}/>
      <ul>
        {content.map((item: string, index: number) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

export default SkillsDevelopmentItem;

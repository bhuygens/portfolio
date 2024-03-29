import React from 'react';
import styles from "./skill-category-title.module.scss";

type SkillCategoryTitleProps = {
  title: string
}

function SkillCategoryTitle({title}: SkillCategoryTitleProps) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <svg height={1} style={{width: '60vw'}} role={"presentation"}>
        <rect className={styles.bar} height="1"
              style={{fill: "#2618DC", width: '80vw'}}/>
      </svg>
    </div>
  );
}

export default SkillCategoryTitle;
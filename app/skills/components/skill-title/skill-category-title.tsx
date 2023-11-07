import React from 'react';
import styles from "./skill-category-title.module.scss";

type SkillCategoryTitleProps = {
  title: string
}

function SkillCategoryTitle({title}: SkillCategoryTitleProps) {
  return (
    <div>
      <h1 style={{fontSize: 36}}>{title}</h1>
      <svg height={1} style={{width: '60vw'}}>
        <rect className={styles.bar} height="1"
              style={{fill: "#ADADAD", strokeWidth: 3, stroke: "#ADADAD", width: '80vw'}}/>
      </svg>
    </div>
  );
}

export default SkillCategoryTitle;
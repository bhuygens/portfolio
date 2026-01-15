import React from 'react';
import styles from "./skill-category-title.module.scss";

type SkillCategoryTitleProps = {
  title: string
}

function SkillCategoryTitle({title}: SkillCategoryTitleProps) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <div className={styles.bar} role="presentation" />
    </div>
  );
}

export default SkillCategoryTitle;

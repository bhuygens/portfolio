import React from 'react';

type SkillCategoryTitleProps = {
  title: string
}

function SkillCategoryTitle({title}: SkillCategoryTitleProps) {
  return (
    <div>
      <h1>{title}</h1>
      <svg height={1} width={"500px"}>
        <rect width={"500px"} height="1" style={{fill: "#ADADAD", strokeWidth: 3, stroke: "#ADADAD"}}/>
      </svg>
    </div>
  );
}

export default SkillCategoryTitle;
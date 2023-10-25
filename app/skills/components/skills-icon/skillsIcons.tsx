import React from 'react';
import SkillIconItem from "@/app/skills/components/skills-icon-item/skill-icon-item";


function SkillsIcons() {
  const icons = [['react', 'angular'], ['nest', 'node'], ['aws']];
  const divider = 56;
  const lines = icons.length;

  return (
    <div style={{right: (lines * divider) + 32, position: 'fixed'}}>
      {
        icons.map((iconRow: string[], index: number) => {
          const count = (lines - index) * divider; // width of each circle
          const position = (index * divider) / 2; // position of each circle
          return <SkillIconItem parentBorder={"1px solid grey"} parentHeight={count} parentWidth={count}
                                icons={iconRow}
                                iconLeft={0}
                                iconTop={32} parentTop={position} parentLeft={position} key={index}/>
        })
      }
    </div>

  );
}

export default SkillsIcons;

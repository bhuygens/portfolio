"use client"
import SkillIconItem
  from "@/app/skills/components/skills-development/skills-development-icons/skills-icon-item/skill-icon-item";
import styles from "./skills-development-icons.module.scss";
import useWindowSize from "@/hooks/window.hook";
import {CommonHelper} from "@/helpers/common.helper";

type SkillsIconsProps = {
  onIconClicked: (icon: string) => void;
};

function SkillsDevelopmentIcons({onIconClicked}: SkillsIconsProps) {
  const icons = [['react', 'angular'], ['nest', 'node'], ['aws']];
  const flattenedIcons = icons.reduce((acc, current) => acc.concat(current), []);

  const divider = 56;
  const lines = icons.length;
  const windowWidth = useWindowSize();


  const handleIconClick = (icon: string) => {
    onIconClicked(icon);
  }

  const displayIconOnLine = () => {
    return <div className={styles.skill_icon_line}>
      {flattenedIcons.map((icon: string, index: number) =>
        <p className={styles.skill} key={index}
           onClick={() => handleIconClick(icon)}>{CommonHelper.Capitalize(icon)}</p>
      )}
    </div>
  }

  return (
    windowWidth.width > 768 ? (
      <div className={styles.skill_icon_circle}>
        {icons.map((iconRow: string[], index: number) => {
          const count = (lines - index) * divider;
          const position = (index * divider) / 2;
          return (
            <div key={index}>
              <SkillIconItem
                parentBorder={"1px solid grey"}
                parentHeight={count}
                parentWidth={count}
                icons={iconRow}
                iconLeft={0}
                iconTop={32}
                parentTop={position}
                parentRight={position}
                onIconClicked={handleIconClick}
              />
            </div>
          );
        })}
      </div>
    ) : displayIconOnLine()
  );
}

export default SkillsDevelopmentIcons;

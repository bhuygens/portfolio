"use client"
import SkillIconItem
  from "@/app/skills/components/skills-development/skills-development-icons/skills-icon-item/skill-icon-item";
import styles from "./skills-development-icons.module.scss";
import useWindowSize from "@/hooks/window.hook";

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
    return <div className={styles.skillIconLine}>
      {flattenedIcons.map((icon: string, index: number) =>
        <p key={index} onClick={() => handleIconClick(icon)}>{icon}</p>
      )}
    </div>
  }

  return (
    windowWidth.width > 768 ? (
      <div className={styles.skillIconCircle} style={{right: lines * divider + 32}}>
        <p>{windowWidth.width}</p>
        {icons.map((iconRow: string[], index: number) => {
          const count = (lines - index) * divider; // width of each circle
          const position = (index * divider) / 2; // position of each circle
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

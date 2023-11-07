"use client"
import styles from "./development-icons.module.scss";
import useWindowSize from "@/hooks/window.hook";
import IconCircle from "@/app/skills/components/development/development-icons/icon-circle/icon-circle";

type SkillsIconsProps = {
  onIconClicked: (icon: string) => void;
  icons: string[][]
};

function DevelopmentIcons({onIconClicked, icons}: SkillsIconsProps) {

  const divider = 56;
  const lines = icons.length;
  const windowWidth = useWindowSize();


  const handleIconClick = (icon: string) => {
    onIconClicked(icon);
  }

  return (
    windowWidth.width > 768 && (
      <div className={styles.skill_icon_circle}>
        {icons.map((iconRow: string[], index: number) => {
          const count = (lines - index) * divider;
          const position = (index * divider) / 2;
          return (
            <div key={index}>
              <IconCircle
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
    )
  );
}

export default DevelopmentIcons;

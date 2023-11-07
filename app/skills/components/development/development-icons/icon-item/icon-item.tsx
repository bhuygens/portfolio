import Image from "next/image";
import React from "react";
import styles from './icon-item.module.scss';

type SkillIconItemProps = {
  parentWidth: number,
  parentHeight: number,
  parentBorder: string,
  parentTop?: number,
  parentRight?: number
  icons: string[],
  iconTop: number,
  iconLeft?: number,
  onIconClicked: (icon: string) => void
}

export default function IconItem({
                                        parentWidth,
                                        parentHeight,
                                        parentBorder,
                                        icons,
                                        iconTop,
                                        iconLeft = 0,
                                        parentRight = 24,
                                        parentTop = 0,
                                        onIconClicked
                                      }: SkillIconItemProps) {

  const calculateTop = (index: number) => {
    return index === 0 ? iconTop : iconTop / (1 + index);
  }

  const calculateLeft = (index: number) => {
    return index === 0 ? 0 : parentWidth - 32;
  }
  return <div className={styles.skill_item}
              style={{
                width: parentWidth,
                height: parentHeight,
                border: parentBorder,
                top: parentTop,
                right: parentRight
              }}>
    {icons.map((icon: string, index: number) => <Image src={`/icons/${icon}.svg`} alt={icon} width={32}
                                                       height={32}
                                                       className={styles.skill_icon}
                                                       style={{top: calculateTop(index), left: calculateLeft(index)}}
                                                       key={index} onClick={() => onIconClicked(icon)}/>)}

  </div>;
}

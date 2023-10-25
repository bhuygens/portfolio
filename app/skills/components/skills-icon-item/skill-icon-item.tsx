import Image from "next/image";
import React from "react";
import styles from './skill-icon-item.module.scss';

type SkillIconItemProps = {
  parentWidth: number,
  parentHeight: number,
  parentBorder: string,
  parentTop?: number,
  parentLeft?: number
  icons: string[],
  iconTop: number,
  iconLeft?: number
}

export default function SkillIconItem({
                                        parentWidth,
                                        parentHeight,
                                        parentBorder,
                                        icons,
                                        iconTop,
                                        iconLeft = 0,
                                        parentLeft = 0,
                                        parentTop = 0
                                      }: SkillIconItemProps) {

  const calculTop = (index: number) => {
    return index === 0 ? iconTop : iconTop / (1 + index);
  }

  const calculLeft = (index: number) => {
    return index === 0 ? 0 : parentWidth - 32;
  }
  return <div className={styles.skill_item}
              style={{
                width: parentWidth,
                height: parentHeight,
                border: parentBorder,
                top: parentTop,
                left: parentLeft
              }}>
    {icons.map((icon: string, index: number) => <Image src={`/icons/${icon}.svg`} alt={icon} width={32}
                                                       height={32}
                                                       className={styles.skill_icon}
                                                       style={{top: calculTop(index), left: calculLeft(index)}}
                                                       key={index}/>)}

  </div>;
}

"use client"
import * as React from "react";
import styles from "./page-intro.module.scss"
import {motion} from "framer-motion";
import {CldImage} from "next-cloudinary";

type PageIntroProps = {
  children?: React.ReactNode,
  title: string,
  subtitle?: string
}

function PageIntro({children, subtitle, title}: PageIntroProps) {
  return <div className={styles.intro} role={"contentinfo"} aria-label={`introduction of the ${title} page`}>
    <div className={styles.intro_text}>
      <h1 className={styles.intro_text_title}>{title}</h1>
      {
        subtitle &&
          <p className={styles.intro_text_subtitle} role={"heading"} aria-level={2}>
            {subtitle}
          </p>
      }
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 0.5}}
      >
        <CldImage alt={"dev"} src={"skill_image"} width={300} height={300} className={styles.intro_icon}
                  loading={"lazy"}/>
      </motion.div>
    </div>
    {children}
  </div>;
}

export default PageIntro;
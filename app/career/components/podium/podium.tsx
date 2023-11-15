"use client"
import React from 'react';
import {motion} from "framer-motion";
import styles from "./podium.module.scss"
import {CldImage} from "next-cloudinary";
import {useRouter} from "next/navigation";
import useWindowSize from "@/hooks/window.hook";

function Podium() {
  const router = useRouter()
  const {windowHeight} = useWindowSize()
  const handleMissionClick = (link: string) => {
    router.push(`/career/${link}`);
  }
  return (
    <div className={styles.container}>
      <div className={styles.podium_item} onClick={() => handleMissionClick("2")}>
        <motion.div
          className={styles.podium_item_icon}
          initial={{opacity: 0, scale: 0.5}}
          animate={{opacity: 1, scale: 1}}
          transition={{delay: 1.1, delayChildren: 0}}>
          <motion.div
            animate={{opacity: 1, scale: 1}}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.95}}
          >
            <CldImage className={styles.podium_item_icon_second} width={0} height={0} src={"maka-bane_logo"}
                      alt="<Alt Text>"/>
          </motion.div>
        </motion.div>
        <motion.div
          className={styles.podium_item_support}
          initial={{height: 0, opacity: 0, translateY: 350}}
          animate={{height: 300, opacity: 1, translateY: 0}}
          transition={{
            type: "spring",
            duration: 1
          }}>
        </motion.div>
      </div>

      <div className={styles.podium_item} onClick={() => handleMissionClick("3")}>
        <motion.div
          className={styles.podium_item_icon}
          initial={{opacity: 0, scale: 0.5}}
          animate={{opacity: 1, scale: 1}}
          whileHover={{scale: 1.1}}
          transition={{delay: 0.8, delayChildren: 0}}>
          <motion.div
            animate={{opacity: 1, scale: 1}}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.95}}>
            <CldImage className={styles.podium_item_icon_first} width={0} height={0} src={"decathlon_logo"}
                      alt="<Alt Text>"/>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.podium_item_support}
          initial={{height: 0, opacity: 0, translateY: 400}}
          animate={{height: 400, opacity: 1, translateY: 0}}
          transition={{
            type: "spring",
            duration: 1
          }}>
        </motion.div>
      </div>

      <div className={styles.podium_item} onClick={() => handleMissionClick("11")}>
        <motion.div
          className={styles.podium_item_icon}
          initial={{opacity: 0, scale: 0.5}}
          animate={{opacity: 1, scale: 1}}
          whileHover={{scale: 1.1}}
          transition={{delay: 1.6, delayChildren: 0}}>
          <motion.div
            animate={{opacity: 1, scale: 1}}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.95}}>
            <CldImage className={styles.podium_item_icon_third} width={0} height={0} src={"talion-film-logo"}
                      alt="<Alt Text>"/>
          </motion.div>
        </motion.div>
        <motion.div
          className={styles.podium_item_support}
          initial={{height: 0, opacity: 0, translateY: 450}}
          animate={{height: 250, opacity: 1, translateY: 0}}
          transition={{
            type: "spring",
            duration: 1
          }}>
        </motion.div>
      </div>
    </div>
  );
}

export default Podium;

"use client"

import "./globals.css"
import styles from "./layout.module.scss"
import Image from "next/image";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import * as React from "react";
import {useEffect, useState} from "react";
import {MenuToggle} from "@/components/menu/menu_toggle";
import useWindowSize from "@/hooks/window.hook";
import {motion} from "framer-motion";
import {MenuItem} from "@/components/menu/menu_item";
import {TabsEnum} from "@/enums/tabs.enum";
import {CommonHelper} from "@/helpers/common.helper";
import Footer from "@/components/footer/footer";
import { Analytics } from '@vercel/analytics/react';

const navBarVariants = {
  open: {},
  closed: {
    transition: {
      type: "spring",
      delay: 0.3,
    },
  },
};

const toggleIconVariants = {
  open: {
    transition: {
      type: "spring",
    },
  },
  closed: {
    transition: {
      delay: 0.5,
      type: "spring",
    },
  },
};

const navbarItemsVariants = {
  open: {
    height: "100vh",
    transition: {
      type: "spring",
    },
  },
  closed: {
    display: "none",
    transition: {
      delay: 0.3,
      type: "spring",
      stiffness: 600,
      damping: 40,
    },
  },
};

const RootLayout = ({children}: { children: React.ReactNode }) => {
  const [currentPath, setCurrentPath] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const routerPathname = usePathname();
  const router = useRouter();
  const {windowsWidth} = useWindowSize();

  useEffect(() => {
    const currentRoute = routerPathname.split("/")[1];
    setCurrentPath(currentRoute);
  }, [routerPathname]);

  const displayNavBarItems = () =>
    Object.values(TabsEnum).map((item, key) => (
      <MenuItem item={item} onClick={handleTabClick} key={key} index={key}/>
    ));

  const handleToggleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleTabClick = (item: string) => {
    setIsOpen(false);
    router.push(`/${item}`);
  };

  return (
    <html lang="en">
    <head/>
    <body style={{background: `${currentPath === "" ? "#4F48AD" : "#DCDAFB"}`}}>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className={`${styles.navbar_container} ${
          currentPath === "" && windowsWidth > 768 ? styles.navbar_container_home : ""
        }`}
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={navBarVariants}
      >
        {windowsWidth > 768 ? (
          <>
            <a href={"/"}>
              <Image
                className={styles.logo}
                src="/brand_logo.svg"
                alt="BH Logo"
                width={64}
                height={64}
                priority
              />
            </a>
            <div className={styles.navbar_items}>
              {Object.values(TabsEnum).map((item: TabsEnum, index: number) => (
                <Link
                  key={index}
                  className={`${styles.navbar_link} ${
                    currentPath === item ? styles.selected : ""
                  }`}
                  href={`/${item}`}
                >
                  {CommonHelper.Capitalize(item)}
                </Link>
              ))}
            </div>
          </>
        ) : (
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100vw",
              }}
            >
              <a href={"/"}>
                <Image
                  className={styles.logo}
                  src="/brand_logo.svg"
                  alt="BH Logo"
                  width={64}
                  height={64}
                  priority
                />
              </a>
              <motion.div
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={toggleIconVariants}
              >
                <motion.div>
                  <MenuToggle onClick={handleToggleClick}/>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              style={{
                width: "100vw",
                display: "flex",
                flexDirection: "column",
                marginTop: 24,
              }}
              initial={false}
              animate={isOpen ? "open" : "closed"}
              variants={navbarItemsVariants}
            >
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingLeft: 48,
                  gap: 24,
                }}
              >
                {displayNavBarItems()}
              </ul>
            </motion.div>
          </>
        )}
      </motion.div>
      <div style={{height: windowsWidth > 768 ? 0 : 52}}></div>
      {children}
    </motion.div>
    {currentPath !== "" && <Footer/>}
    <Analytics/>
    </body>
    </html>
  );
};

export default RootLayout;
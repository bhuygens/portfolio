"use client"

import "./globals.css"
import styles from "./layout.module.scss"
import Image from "next/image";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import * as React from "react";
import {useEffect, useState} from "react";
import {useScrollTop} from "@/hooks/scrollTop.hook";
import {MenuToggle} from "@/components/menu/menu_toggle";
import useWindowSize from "@/hooks/window.hook";
import {motion} from "framer-motion";
import {MenuItem} from "@/components/menu/menu_item";
import {TabsEnum} from "@/enums/tabs.enum";
import {CommonHelper} from "@/helpers/common.helper";

const navBarVariants = {
    open: {
        background: "#1D1D1D"
    },
    closed: {
        background: "rgba(22, 22, 23, .8)",
        transition: {
            type: "spring",
            delay: 0.3
        }

    }
}
const toggleIconVariants = {
    open: {
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        },
    },
    closed: {
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
}

const navbarItemsVariants = {
    open: {
        height: "100vh",
        transition: {
            type: "spring",
        },
    },
    closed: {
        height: "0vh",
        display: "none",
        transition: {
            delay: 0.3,
            type: "spring",
            stiffness: 600,
            damping: 40
        }
    }
}


export default function RootLayout({children}: { children: React.ReactNode }) {
    const [currentPath, setCurrentPath] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const routerPathname = usePathname();
    const router = useRouter();
    const windowScroll = useScrollTop()
    const {windowsWidth} = useWindowSize();

    useEffect(() => {
        const currentRoute = routerPathname.split("/")[1];
        setCurrentPath(currentRoute);
    }, [routerPathname])

    const displayNavBarItems = () => {
        return Object.values(TabsEnum).map((item, key) =>
            <MenuItem item={item}
                      onClick={handleTabClick}
                      key={key} index={key}/>)

    }

    const handleToggleClick = () => {
        setIsOpen((prevState) => !prevState);
    }

    const handleTabClick = (item: string) => {
        setIsOpen(false);
        router.push(`/${item}`);
    }

    return (
        <html lang="en">
        <body>
        <motion.div
            className={styles.navbar_container}
            initial={false}
            animate={isOpen ? "open" : "closed"}
            variants={navBarVariants}
        >
            {windowsWidth > 768 ?
                <>
                    <a href={"/"}>
                        <Image
                            className={styles.logo}
                            src="/brand_logo.svg"
                            alt="BH Logo"
                            width={100}
                            height={100}
                            priority
                        />
                    </a>
                    <div className={styles.navbar_items}>
                        {Object.values(TabsEnum).map((item: TabsEnum, index: number) =>
                            <Link key={index}
                                  className={`${styles.navbar_link} ${currentPath === item ? styles.selected : ""}`}
                                  href={`/${item}`}>{CommonHelper.Capitalize(item)}</Link>)}
                    </div>

                    <div className={styles.navbar_external_links}>
                        <a href="https://www.linkedin.com/in/benjamin-huygens/" style={{marginRight: 12}}
                           target="_blank">
                            <Image height={0} width={0} src="/icons/linkedin.svg" alt="Linkedin"
                                   style={{width: 32, height: 32}}/>
                        </a>
                        <a href="https://github.com/bhuygens" target="_blank">
                            <Image height={0} width={0} src="/icons/github.svg" alt="Github"
                                   style={{width: 32, height: 32}}/>
                        </a>
                    </div>
                </>
                : <>
                    <div style={{
                        display: 'flex',
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "100vw"
                    }}>
                        <a href={"/"}>
                            <Image
                                className={styles.logo}
                                src="/brand_logo.svg"
                                alt="BH Logo"
                                width={100}
                                height={100}
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
                            marginTop: 24
                        }}
                        initial={false}
                        animate={isOpen ? "open" : "closed"}
                        variants={navbarItemsVariants}>
                        <ul
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                paddingLeft: 48,
                                gap: 24,
                            }}>
                            {displayNavBarItems()}
                        </ul>
                    </motion.div>

                </>
            }
        </motion.div>
        {children}
        </body>
        </html>
    )
}


/*


                    <motion.div
                        style={{
                            display: isOpen ? "flex" : "none", flexDirection: "column", marginTop: 120, gap: 100,
                        }}
                        variants={itemsVariants}>

                    </motion.div>
 */
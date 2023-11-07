"use client"

import "./globals.css"
import styles from "./layout.module.scss"
import Image from "next/image";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {useScrollTop} from "@/hooks/scrollTop.hook";


export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  const [currentPath, setCurrentPath] = useState("");
  const routerPathname = usePathname();
  const router = useRouter();

  const windowScroll = useScrollTop()

  useEffect(() => {
    const currentRoute = routerPathname.split("/")[1];
    setCurrentPath(currentRoute);
  }, [routerPathname])

  const goToHomePage = (e: any): void => {
    router.push("/");
  }
  return (
    <html lang="en">
    <body>
    <div className={styles.navbar_container}
         style={{
           borderBottom: windowScroll ? "2px solid grey" : "none",
         }}
    >
      <a href={"/"}>
        <Image
          src="/brand_logo.svg"
          alt="BH Logo"
          width={100}
          height={100}
          priority

        />
      </a>

      <div className={styles.navbar_items}>
        <Link className={`${styles.navbar_link} ${currentPath === "career" ? styles.selected : ""}`}
              href={"/career"}>Career</Link>
        <p>.</p>
        <Link className={`${styles.navbar_link} ${currentPath === "skills" ? styles.selected : ""}`}
              href={"/skills"}>Skills</Link>
        <p>.</p>
        <Link className={`${styles.navbar_link} ${currentPath === "contact" ? styles.selected : ""}`}
              href={"/contact"}>Contact</Link>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/benjamin-huygens/" style={{marginRight: 12}} target="_blank">
          <img src="/icons/linkedin.svg" alt="Linkedin" style={{width: 32, height: 32}}/>
        </a>
        <a href="https://github.com/bhuygens" target="_blank">
          <img src="/icons/github.svg" alt="Github" style={{width: 32, height: 32}}/>
        </a>
      </div>
    </div>
    {children}
    </body>
    </html>
  )
}

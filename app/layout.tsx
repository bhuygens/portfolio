"use client"

import "./globals.css"
import styles from "./layout.module.scss"
import Image from "next/image";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import {useEffect, useState} from "react";


export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  const [currentPath, setCurrentPath] = useState("");
  const routerPathname = usePathname();
  const router = useRouter();
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
    <div className={styles.navbar_container}>
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
        <Link className={`${styles.navbar_link} ${currentPath === "skills" ? styles.selected : ""}`}
              href={"/skills"}>Skills</Link>
        <Link className={`${styles.navbar_link} ${currentPath === "contact" ? styles.selected : ""}`}
              href={"/contact"}>Contact</Link>
      </div>
    </div>
    {children}
    </body>
    </html>
  )
}

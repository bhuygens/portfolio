import styles from "./page.module.scss";
import Image from "next/image";
import {Metadata} from "next";
import TypedComponent from "@/components/typed-component/typed-component";
import {Sequence} from "react-type-animation/dist/cjs/components/TypeAnimation/index.types";

export const metadata: Metadata = {
  title: "HB - Portfolio",
  description: "Welcome to Benjamin Huygens's portfolio",
}
export default function Home() {
  const subTitleSequence: Sequence = [1000, "Developer Freelance", 1300, "Developer Fullstack"];

  return (
    <main className={styles.main}>
      <Image className={styles.background_image} src={"background_image.svg"} alt={"home_image"} width={900}
             height={676} priority/>

      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.title}>Huygens Benjamin</h1>

          <TypedComponent
            text={subTitleSequence}
            styleComponent={{
              fontSize: "1.5rem",
              color: "#CBC8F9",
              fontWeight: 100,
              minHeight: 24
            }}
            repeat={5}
          />
        </div>

        <svg className={styles.content_bar} xmlns="http://www.w3.org/2000/svg" height={300} width={20}>
          <rect width="2" height="300" rx="15" fill={"#CCCCCC"}/>
        </svg>

        <p className={styles.current_job}>Currently working @ Decathlon</p>

      </div>
    </main>
  )
    ;
}

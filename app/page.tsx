import Image from "next/image";
import styles from "./page.module.scss";


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.background}>
        <Image
          className={styles.background_image}
          src={"/home_background.svg"}
          alt={"Home background image"}
          width={1000}
          height={1000}
        />
      </div>

      <div className={styles.content}>
        <p className={styles.title}>Huygens Benjamin</p>
        <p className={styles.subtitle}>Backend & Roll out developer @ Decathlon</p>
      </div>
    </main>
  );
}

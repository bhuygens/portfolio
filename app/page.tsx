import styles from "./page.module.scss";


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.background}>
        <img
          className={styles.background_image}
          src={"/home_background.svg"}
          alt={"Home background image"}
        />
      </div>

      <div className={styles.content}>
        <p className={styles.title}>Huygens Benjamin</p>
        <p className={styles.subtitle}>Freelance fullstack developer @ Decathlon</p>
      </div>
    </main>
  );
}

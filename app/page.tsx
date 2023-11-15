import styles from "./page.module.scss";


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.background}>
        <svg xmlns="http://www.w3.org/2000/svg" width="820" height="749" viewBox="0 0 820 749" fill="none" className={styles.background_image}>
          <path d="M792 488C744 570 684 632.5 612 675.5C540 718.5 462.5 742.5 379.5 747.5C296.5 752.5 213 735.833 129 697.5C45 659.167 2.16666 594.167 0.499991 502.5C-1.16668 410.833 19.3333 334 62 272C104.667 210 149.167 150.167 195.5 92.4999C241.833 34.8332 304.5 4.16656 383.5 0.499891C462.5 -3.16678 523.833 26.1666 567.5 88.4999C611.167 150.833 671.5 212.5 748.5 273.5C825.5 334.5 840 406 792 488Z" fill="url(#paint0_linear_47_343)"/>
          <defs>
            <linearGradient id="paint0_linear_47_343" x1="410.027" y1="0.194336" x2="410.027" y2="748.365" gradientUnits="userSpaceOnUse">
              <stop stopColor="#05161A"/>
              <stop offset="0.291667" stopColor="#072E33"/>
              <stop offset="0.703125" stopColor="#0C7078"/>
              <stop offset="0.942708" stopColor="#0F9690"/>
              <stop offset="1" stopColor="#6DA5C0"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>Huygens Benjamin</h1>
        <h2 className={styles.subtitle}>Freelance fullstack developer @ Decathlon</h2>
      </div>
    </main>
  );
}

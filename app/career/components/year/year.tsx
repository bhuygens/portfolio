import styles from "./year.module.scss";

export default function displayYear(mission: { year: number; foundMissionsByYear: MissionType[] }) {

  return <div className={styles.yearContainer}>
    <svg width="1" height="64">
      <rect width="1" height="64" style={{fill: "white"}}/>
    </svg>
    <div className={styles.yearContent}>
      <svg width="16" height="1">
        <rect width="16" height="1" style={{fill: "white"}}/>
      </svg>
      <p>{mission.year}</p>
      <svg width="16" height="1">
        <rect width="16" height="1" style={{fill: "white"}}/>
      </svg>
    </div>
    <svg width="1" height="64">
      <rect width="1" height="64" style={{fill: "white"}}/>
    </svg>
  </div>;
}

import styles from "./year-section.module.scss";

function YearSection(mission: { year: number; foundMissionsByYear: MissionType[] }) {

  return <div className={styles.yearContainer}>
    <svg width="1" height="64">
      <rect width="1" height="64" style={{fill: "black"}}/>
    </svg>
    <div className={styles.yearContent}>
      <svg width="16" height="1">
        <rect width="16" height="1" style={{fill: "black"}}/>
      </svg>
      <p>{mission.year}</p>
      <svg width="16" height="1">
        <rect width="16" height="1" style={{fill: "black"}}/>
      </svg>
    </div>
    <svg width="1" height="64">
      <rect width="1" height="64" style={{fill: "black"}}/>
    </svg>
  </div>;
}

export default YearSection;
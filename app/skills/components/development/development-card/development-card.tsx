import Link from "next/link";
import {CldImage} from "next-cloudinary";
import styles from "./development-card.module.scss";

type DevelopmentCardProps = {
  name: string,
  subtitle: string,
  link: number,
  icon: string,
  index: number
}

function DevelopmentCard({link, name, subtitle, icon, index}: DevelopmentCardProps) {
  const jobTitle = name.split('@')[0];
  const company = name.split('@')[1];

  const getContainerClassnames = () => {
    const classes = [styles.container];
    switch (index) {
      case 1:
        classes.push(styles.first);
        break;
      case 2:
        classes.push(styles.second);
        break;
      case 3:
        classes.push(styles.third);
        break;
      case 4:
      default:
        classes.push(styles.fourth);
        break;
    }
    return classes.join(" ");
  }

  return (
    <Link href={`/career/${link}`}>
      <div className={getContainerClassnames()}>
        <CldImage src={icon} alt={icon} height={0} width={90} className={styles.icon}/>
        <h2>{jobTitle}</h2>
        <h3>{company}</h3>
        <p>{subtitle}</p>
      </div>
    </Link>
  );
}

export default DevelopmentCard;
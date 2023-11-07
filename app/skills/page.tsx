import Development from "@/app/skills/components/development/development";
import styles from "./page.module.scss";
import getSkillsContent from "@/lib/getSkillContent";
import Certifications from "@/app/skills/components/certifications/certifications";

export default async function SkillsPage() {
  let developmentData: DevelopmentSkill[] = await getSkillsContent();
  return (
    <div className={styles.skills_page}>
      <section className={styles.skills_item} id={"development"}>
        <Development skillsContent={developmentData}/>
      </section>
      <section className={styles.skills_item} id={"certifications"}>
        <Certifications/>
      </section>
    </div>
  );
}


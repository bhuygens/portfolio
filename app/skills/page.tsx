import SkillsDevelopment from "@/app/skills/components/skills-development/skills-development";
import styles from "./page.module.scss";
import getSkillsContent from "@/lib/getSkillContent";

async function SkillsPage() {
  let developmentData: DevelopmentSkill[] = await getSkillsContent();
  return (
    <div className={styles.skills_page}>
      <SkillsDevelopment skillsContent={developmentData}/>
    </div>
  );
}

export default SkillsPage;

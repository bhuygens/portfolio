import Development from "@/app/skills/components/development/development";
import styles from "./page.module.scss";
import getSkillsContent from "@/lib/getSkillContent";
import Certifications from "@/app/skills/components/certifications/certifications";
import SkillsFrameworksIcons from "@/app/skills/components/framework-icons/frameworks-icons";
import * as React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Benjamin Huygens - Skills",
  description: "My technical skills and certifications",
  openGraph: {
    images: [
      {
        alt: "home",
        type: "",
        width: "1024",
        height: "524",
        url: "https://huygens.io/external_link.png",
      },
    ],
  },
};

export default async function SkillsPage() {
  let developmentData: DevelopmentSkill[] = await getSkillsContent();

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <span className={styles.tag}>Skills</span>
        <h1 className={styles.title}>
          Technical <span className={styles.gradient}>Expertise</span>
        </h1>
        <p className={styles.subtitle}>
          After 5 years as a freelance developer and many experiences, I have
          now strong knowledge in Javascript development.
        </p>
        <div className={styles.icons}>
          <SkillsFrameworksIcons />
        </div>
      </div>

      <div className={styles.skills_page}>
        <section className={styles.skills_item} id="development">
          <Development skillsContent={developmentData} />
        </section>
        <section className={styles.skills_item} id="certifications">
          <Certifications />
        </section>
      </div>
    </div>
  );
}

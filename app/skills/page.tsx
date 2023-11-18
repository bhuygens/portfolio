import Development from "@/app/skills/components/development/development";
import styles from "./page.module.scss";
import getSkillsContent from "@/lib/getSkillContent";
import Certifications from "@/app/skills/components/certifications/certifications";
import SkillsFrameworksIcons from "@/app/skills/components/framework-icons/frameworks-icons";
import * as React from "react";
import PageIntro from "@/components/page-intro/page-intro";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Huygens - Skills',
  description: 'This is all of my skills',

  openGraph: {
    images: [{
      alt: "home",
      type: "",
      width: "1024",
      height: "524",
      url: "https://huygens.io/external_link.png"
    }]
  }
}
export default async function SkillsPage() {
  let developmentData: DevelopmentSkill[] = await getSkillsContent();
  const subtitle = "After 3 years as a freelance developer and many experiences, I have now strong knowledge in Javascript development"
  return (
    <div style={{background: "#DCDAFB", color: "black"}}>
      <PageIntro title={"Skills"}
                 subtitle={subtitle}>
        <SkillsFrameworksIcons/>
      </PageIntro>


      <div className={styles.skills_page}>
        <section className={styles.skills_item} id={"development"}>
          <Development skillsContent={developmentData}/>
        </section>
        <section className={styles.skills_item} id={"certifications"}>
          <Certifications/>
        </section>
      </div>
    </div>
  );
}


"use client"
import React from 'react';
import SkillCategoryTitle from "@/app/skills/components/skill-title/skill-category-title";
import styles from "./certifications.module.scss";
import CertificationItem from "@/app/skills/components/certifications/certification-item/certification-item";

function Certifications() {

  return (
    <>
      <div className={styles.container} style={{marginBottom: 120}}>
        <SkillCategoryTitle title={"Certifications"}/>

        <div className={styles.content}>
          <CertificationItem title={"Cloud Practitioner"}
                             detail={"Obtained: October 2023, Valid until: October 2026"}
                             image={"aws"}/>
          <CertificationItem title={"Azure AZ-900"} detail={"Cloud basics"}
                             image={"azure"}/>
        </div>
      </div>

      <div className={styles.container}>
        <SkillCategoryTitle title={"Languages"}/>

        <div className={styles.content}>
          <CertificationItem title={"French"}
                             detail={"Native"}
                             image={"flag-fr"}/>
          <CertificationItem title={"English"} detail={"Professional"}
                             image={"flag-gb"}/>
        </div>
      </div>
    </>

  );
}

export default Certifications;
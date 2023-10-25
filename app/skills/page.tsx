import React from "react";
import SkillsIcons from "@/app/skills/components/skills-icon/skillsIcons";

interface PropsType {
}

function Page(props: PropsType) {
  return (
    <div style={{position: "relative"}}>
      <p>Career</p>

      <SkillsIcons/>
    </div>
  );
}

export default Page;

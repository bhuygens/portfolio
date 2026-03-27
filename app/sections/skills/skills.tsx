"use client";

import { motion, useInView } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import styles from "./skills.module.scss";
import NodeJS from "@/public/icons/node.svg";
import NestJS from "@/public/icons/nest_js.svg";
import PostgreSQL from "@/public/icons/postgres.svg";
import ReactJS from "@/public/icons/react.svg";
import Typescript from "@/public/icons/typescript.png";
import MongoDB from "@/public/icons/mongoDB.png";
import Express from "@/public/icons/express.svg";
import GraphQL from "@/public/icons/graphQL.png";
import Redis from "@/public/icons/redis.png";
import Prisma from "@/public/icons/prisma.svg";
import Docker from "@/public/icons/docker.png";
import Git from "@/public/icons/github.svg";
import Vercel from "@/public/icons/vercel.svg";
import AWS from "@/public/icons/aws.svg";
import SCSS from "@/public/icons/scss.png";
import Tailwind from "@/public/icons/tailwind.png";
import Framer from "@/public/icons/framer.webp";
import NextJS from "@/public/icons/next_js.svg";
import type { HomeSectionsCopy } from "@/lib/i18n/sections-content";
import { isExpertSkillLevel } from "@/lib/i18n/sections-content";

type Skill = {
  name: string;
  level: string;
  years: string;
  icon: React.ReactNode;
};

type SkillCategory = {
  name: string;
  skills: Skill[];
};

type SkillsProps = {
  copy: HomeSectionsCopy["skills"];
};

const iconByName: Record<string, React.ReactNode> = {
  "Node.js": <Image src={NodeJS} width={48} height={48} alt="Node.js" />,
  NestJS: <Image src={NestJS} width={48} height={48} alt="NestJS" />,
  Express: <Image src={Express} width={48} height={48} alt="Express" />,
  GraphQL: <Image src={GraphQL} width={48} height={48} alt="GraphQL" />,
  "REST APIs": <Image src={NodeJS} width={48} height={48} alt="REST" />,
  React: <Image src={ReactJS} width={48} height={48} alt="React" />,
  "Next.js": <Image src={NextJS} width={48} height={48} alt="Next.js" />,
  TypeScript: (
    <Image src={Typescript} width={48} height={48} alt="TypeScript" />
  ),
  "SCSS/CSS": <Image src={SCSS} width={48} height={48} alt="SCSS" />,
  "Tailwind CSS": (
    <Image src={Tailwind} width={48} height={48} alt="Tailwind" />
  ),
  "Framer Motion": (
    <Image src={Framer} width={48} height={48} alt="Framer Motion" />
  ),
  PostgreSQL: (
    <Image src={PostgreSQL} width={48} height={48} alt="PostgreSQL" />
  ),
  MongoDB: <Image src={MongoDB} width={48} height={48} alt="MongoDB" />,
  Redis: <Image src={Redis} width={48} height={48} alt="Redis" />,
  Prisma: <Image src={Prisma} width={48} height={48} alt="Prisma" />,
  Git: <Image src={Git} width={48} height={48} alt="Git" />,
  Docker: <Image src={Docker} width={48} height={48} alt="Docker" />,
  Vercel: <Image src={Vercel} width={48} height={48} alt="Vercel" />,
  AWS: <Image src={AWS} width={48} height={48} alt="AWS" />,
};

const Skills = ({ copy }: SkillsProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState(copy.tabAll);

  const skillCategories: SkillCategory[] = useMemo(
    () =>
      copy.categories.map((cat) => ({
        name: cat.name,
        skills: cat.skills.map((s) => ({
          name: s.name,
          level: s.level,
          years: s.years,
          icon:
            iconByName[s.name] ?? (
              <Image src={NodeJS} width={48} height={48} alt="" />
            ),
        })),
      })),
    [copy.categories]
  );

  const categories = useMemo(
    () => [copy.tabAll, ...skillCategories.map((cat) => cat.name)],
    [copy.tabAll, skillCategories]
  );

  const filteredCategories =
    activeCategory === copy.tabAll
      ? skillCategories
      : skillCategories.filter((cat) => cat.name === activeCategory);

  return (
    <section className={styles.skills} id="stack" ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.section_title}>{copy.sectionTitle}</h2>
          <p className={styles.section_description}>
            {copy.sectionDescription}
          </p>
        </motion.div>

        <motion.div
          className={styles.tabs}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`${styles.tab} ${
                activeCategory === category ? styles.active : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className={styles.categories_container}>
          {filteredCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              className={styles.category_section}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + catIndex * 0.1 }}
            >
              <h3 className={styles.category_name}>{category.name}</h3>

              <div className={styles.skills_grid}>
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className={styles.skill_card}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: 0.4 + catIndex * 0.1 + index * 0.05,
                    }}
                  >
                    <div className={styles.skill_icon}>{skill.icon}</div>
                    <span className={styles.skill_name}>{skill.name}</span>
                    <span
                      className={`${styles.skill_level} ${
                        isExpertSkillLevel(skill.level)
                          ? styles.level_expert
                          : styles.level_intermediate
                      }`}
                    >
                      {skill.level}
                    </span>
                    <span
                      className={`${styles.skill_years} ${
                        isExpertSkillLevel(skill.level)
                          ? styles.years_expert
                          : styles.years_intermediate
                      }`}
                    >
                      {skill.years}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
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

type Skill = {
  name: string;
  level: "Expert" | "Intermediate";
  years: string;
  icon: React.ReactNode;
};

type SkillCategory = {
  name: string;
  skills: Skill[];
};

// Technology Icons as SVG components
const icons = {
  react: <Image src={ReactJS} width={48} height={48} alt="React" />,
  nextjs: <Image src={NextJS} width={48} height={48} alt="NextJS" />,
  typescript: (
    <Image src={Typescript} width={48} height={48} alt="Typescript" />
  ),
  nestjs: <Image src={NestJS} width={48} height={48} alt="NestJS" />,
  postgresql: (
    <Image src={PostgreSQL} width={48} height={48} alt="PostgreSQL" />
  ),
  mongodb: <Image src={MongoDB} width={48} height={48} alt="MongoDB" />,
  docker: <Image src={Docker} width={48} height={48} alt="Docker" />,
  git: <Image src={Git} width={48} height={48} alt="Git" />,
  vercel: <Image src={Vercel} width={48} height={48} alt="Vercel" />,
  aws: <Image src={AWS} width={48} height={48} alt="AWS" />,
  scss: <Image src={SCSS} width={48} height={48} alt="SCSS" />,
  tailwind: <Image src={Tailwind} width={48} height={48} alt="Tailwind" />,
  framer: <Image src={Framer} width={48} height={48} alt="Framer" />,
  express: <Image src={Express} width={48} height={48} alt="Express" />,
  graphql: <Image src={GraphQL} width={48} height={48} alt="GraphQL" />,
  redis: <Image src={Redis} width={48} height={48} alt="Redis" />,
  prisma: <Image src={Prisma} width={48} height={48} alt="Prisma" />,
  nodejs: <Image src={NodeJS} width={48} height={48} alt="Node.js" />,
};

const skillCategories: SkillCategory[] = [
  {
    name: "Backend",
    skills: [
      {
        name: "Node.js",
        level: "Expert",
        years: "5 years exp",
        icon: icons.nodejs,
      },
      {
        name: "NestJS",
        level: "Expert",
        years: "3 years exp",
        icon: icons.nestjs,
      },
      {
        name: "Express",
        level: "Expert",
        years: "4 years exp",
        icon: icons.express,
      },
      {
        name: "GraphQL",
        level: "Intermediate",
        years: "2 years exp",
        icon: icons.graphql,
      },
      {
        name: "REST APIs",
        level: "Expert",
        years: "5 years exp",
        icon: icons.nodejs,
      },
    ],
  },
  {
    name: "Frontend",
    skills: [
      {
        name: "React",
        level: "Expert",
        years: "5 years exp",
        icon: icons.react,
      },
      {
        name: "Next.js",
        level: "Expert",
        years: "4 years exp",
        icon: icons.nextjs,
      },
      {
        name: "TypeScript",
        level: "Expert",
        years: "4 years exp",
        icon: icons.typescript,
      },
      {
        name: "SCSS/CSS",
        level: "Expert",
        years: "5 years exp",
        icon: icons.scss,
      },
      {
        name: "Tailwind CSS",
        level: "Expert",
        years: "3 years exp",
        icon: icons.tailwind,
      },
      {
        name: "Framer Motion",
        level: "Expert",
        years: "2 years exp",
        icon: icons.framer,
      },
    ],
  },
  {
    name: "Database",
    skills: [
      {
        name: "PostgreSQL",
        level: "Expert",
        years: "4 years exp",
        icon: icons.postgresql,
      },
      {
        name: "MongoDB",
        level: "Expert",
        years: "3 years exp",
        icon: icons.mongodb,
      },
      {
        name: "Redis",
        level: "Intermediate",
        years: "2 years exp",
        icon: icons.redis,
      },
      {
        name: "Prisma",
        level: "Expert",
        years: "2 years exp",
        icon: icons.prisma,
      },
    ],
  },
  {
    name: "Cloud & DevOps",
    skills: [
      { name: "Git", level: "Expert", years: "5 years exp", icon: icons.git },
      {
        name: "Docker",
        level: "Intermediate",
        years: "2 years exp",
        icon: icons.docker,
      },
      {
        name: "Vercel",
        level: "Expert",
        years: "3 years exp",
        icon: icons.vercel,
      },
      {
        name: "AWS",
        level: "Intermediate",
        years: "2 years exp",
        icon: icons.aws,
      },
    ],
  },
];

const categories = ["All", ...skillCategories.map((cat) => cat.name)];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCategories =
    activeCategory === "All"
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
          <h2 className={styles.section_title}>Technology Stack</h2>
          <p className={styles.section_description}>
            Technologies I use to bring ideas to life
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
                        skill.level === "Expert"
                          ? styles.level_expert
                          : styles.level_intermediate
                      }`}
                    >
                      {skill.level}
                    </span>
                    <span
                      className={`${styles.skill_years} ${
                        skill.level === "Expert"
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

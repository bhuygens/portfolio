"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import styles from "./about.module.scss";
import AdeoLogo from "@/public/icons/adeo.png";
import DecathlonLogo from "@/public/icons/decathlon.png";
import KafkaLogo from "@/public/icons/kafka.png";
import PivotLogo from "@/public/icons/pivot.png";
import type { HomeSectionsCopy } from "@/lib/i18n/sections-content";

type AboutProps = {
  copy: HomeSectionsCopy["about"];
};

const CORE_TECH_KEYS = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "NestJS",
  "PostgreSQL",
  "MongoDB",
  "REST APIs",
  "Clean Architecture",
  "AWS",
  "GCP",
  "Kafka",
] as const;

const experienceIcons = [
  () => (
    <Image
      src={AdeoLogo}
      alt="ADEO"
      width={32}
      height={32}
      style={{ objectFit: "contain" }}
    />
  ),
  () => (
    <Image
      src={PivotLogo}
      alt="Pivot"
      width={32}
      height={32}
      style={{ objectFit: "contain" }}
    />
  ),
  () => (
    <Image
      src={DecathlonLogo}
      alt="Decathlon"
      width={32}
      height={32}
      style={{ objectFit: "contain" }}
    />
  ),
];

const About = ({ copy }: AboutProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className={styles.about} id="about" ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            {copy.badge}
          </span>
          <h2 className={styles.section_title}>{copy.sectionTitle}</h2>
          <div className={styles.title_line}></div>
          <p className={styles.section_subtitle}>{copy.sectionSubtitle}</p>
        </motion.div>

        <div className={styles.main_grid}>
          <div className={styles.left_column}>
            <motion.div
              className={styles.intro_card}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className={styles.card_dots}>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <h3 className={styles.greeting}>
                <span className={styles.wave}>👋</span> {copy.greeting}
              </h3>

              <p className={styles.intro_text}>
                {copy.introBefore}
                <span className={styles.highlight_green}>
                  {copy.introFullstack}
                </span>
                {copy.introMid1}
                <span className={styles.highlight_purple}>{copy.introTech}</span>
                {copy.introMid2}
                <span className={styles.highlight_green}>{copy.introYears}</span>
                {copy.introAfter}
              </p>

              <p className={styles.description}>{copy.paragraph1}</p>

              <p className={styles.description}>{copy.paragraph2}</p>

              <div className={styles.technologies}>
                <h4 className={styles.tech_title}>
                  <span className={styles.tech_icon}>🔧</span> {copy.techTitle}
                </h4>
                <div className={styles.tech_tags}>
                  {CORE_TECH_KEYS.map((tech) =>
                    tech === "Kafka" ? (
                      <span
                        key={tech}
                        className={`${styles.tech_tag} ${styles.tech_tag_with_logo}`}
                      >
                        <Image
                          src={KafkaLogo}
                          alt=""
                          width={18}
                          height={18}
                          className={styles.tech_tag_logo}
                        />
                        Kafka
                      </span>
                    ) : (
                      <span key={tech} className={styles.tech_tag}>
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </motion.div>

            <div className={styles.experience_grid}>
              {copy.experiences.map((exp, index) => {
                const Icon = experienceIcons[index];
                const badgeColor =
                  index === 0 ? "purple" : index === 1 ? "green" : "blue";
                return (
                  <motion.div
                    key={index}
                    className={styles.experience_card}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <div className={styles.exp_header}>
                      <div className={styles.exp_icon}>
                        {Icon ? <Icon /> : null}
                      </div>
                      <div className={styles.exp_info}>
                        <h4 className={styles.exp_title}>{exp.title}</h4>
                        <span className={styles.exp_company}>{exp.company}</span>
                        <span className={styles.exp_period}>{exp.period}</span>
                      </div>
                    </div>
                    <p className={styles.exp_description}>{exp.description}</p>
                    <span
                      className={`${styles.exp_badge} ${
                        styles[`badge_${badgeColor}`]
                      }`}
                    >
                      {badgeColor === "green" ? "⭐" : "✓"} {exp.badge}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className={styles.right_column}>
            <motion.div
              className={styles.connect_card}
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className={styles.card_title}>
                <span className={styles.card_icon}>💬</span> {copy.connectTitle}
              </h4>
              <div className={styles.connect_list}>
                <a
                  href="mailto:huygens.benjamin@gmail.com"
                  className={styles.connect_item}
                >
                  <span
                    className={styles.connect_icon}
                    style={{ background: "rgba(239, 68, 68, 0.2)" }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ef4444"
                      strokeWidth="2"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </span>
                  huygens.benjamin@gmail.com
                </a>
                <a
                  href="https://github.com/bhuygens"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.connect_item}
                >
                  <span
                    className={styles.connect_icon}
                    style={{ background: "rgba(34, 197, 94, 0.2)" }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#22c55e"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </span>
                  github.com/bhuygens
                </a>
                <span className={styles.connect_item}>
                  <span
                    className={styles.connect_icon}
                    style={{ background: "rgba(239, 68, 68, 0.2)" }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ef4444"
                      strokeWidth="2"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  Lille, France
                </span>
              </div>
            </motion.div>

            <motion.div
              className={styles.achievements_card}
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className={styles.card_title}>
                <span className={styles.card_icon}>🏆</span>{" "}
                {copy.achievementsTitle}
              </h4>
              <div className={styles.achievements_list}>
                {copy.achievements.map((item, index) => (
                  <div key={index} className={styles.achievement_item}>
                    <span className={styles.achievement_icon}>{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className={styles.availability_card}
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h4 className={styles.card_title}>
                <span className={styles.card_icon}>🚀</span> {copy.hireTitle}
              </h4>
              <div className={styles.availability_list}>
                {copy.availability.map((item, index) => (
                  <div key={index} className={styles.availability_item}>
                    <span className={styles.availability_icon}>
                      {item.icon}
                    </span>
                    {item.text}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

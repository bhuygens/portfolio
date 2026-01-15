"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./experience.module.scss";
import { useRouter } from "next/navigation";
import Image from "next/image";

type ExperienceItem = {
  id: string;
  year: string;
  title: string;
  company: string;
  description: string;
  tags: string[];
  achievements?: string[];
  icon: string;
};

import Decathlon from "@/public/icons/decathlon.png";
import Pivot from "@/public/icons/pivot.png";
import Talion from "@/public/icons/talion.png";
import Supinfo from "@/public/icons/supinfo.svg";
import ListenToo from "@/public/icons/listen-too.png";
import MakaBane from "@/public/icons/maka-bane.png";
import Onivo from "@/public/icons/onivo.png";

interface ExperienceProps {
  experiences: ExperienceItem[];
}

// Icons for different experience types
const experienceIcons = {
  decathlon: <Image src={Decathlon} width={80} height={80} alt="Decathlon" />,
  pivot: <Image src={Pivot} width={75} height={75} alt="Pivot" />,
  talion: <Image src={Talion} width={75} height={75} alt="Talion" />,
  supinfo: <Image src={Supinfo} width={75} height={75} alt="Supinfo" />,
  listentoo: <Image src={ListenToo} width={75} height={75} alt="ListenToo" />,
  makaBane: <Image src={MakaBane} width={75} height={75} alt="MakaBane" />,
  onivo: <Image src={Onivo} width={75} height={75} alt="Onivo" />,
};

// Color themes for each card
const cardColors = [
  { bg: "#3b82f6", border: "transparent", icon: "#ffffff", company: "#60a5fa" },
  { bg: "#6366f1", border: "transparent", icon: "#ffffff", company: "#818cf8" },
  { bg: "#8b5cf6", border: "transparent", icon: "#ffffff", company: "#a78bfa" },
  { bg: "#ec4899", border: "transparent", icon: "#ffffff", company: "#f472b6" },
  { bg: "#06b6d4", border: "transparent", icon: "#ffffff", company: "#22d3ee" },
];

const Experience = ({ experiences }: ExperienceProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const router = useRouter();

  return (
    <section className={styles.experience} id="experience" ref={ref}>
      <div className={styles.container}>
        {/* Header */}
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
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            Professional Journey
          </span>
          <h2 className={styles.section_title}>Experience</h2>
          <div className={styles.title_line}></div>
          <p className={styles.section_description}>
            My professional journey and the impact I&apos;ve made across
            different domains
          </p>
        </motion.div>

        {/* Experience List */}
        <div className={styles.experiences_list}>
          {experiences.map((item, index) => (
            <div key={index}>
              {index > 0 && <div className={styles.experience_divider} />}
              <motion.div
                onClick={() => router.push(`/career/${item.id}`)}
                className={styles.experience_card}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                {/* Icon */}
                <div
                  className={styles.card_icon}
                  style={{
                    background: cardColors[index % cardColors.length].bg,
                    borderColor: cardColors[index % cardColors.length].border,
                    color: cardColors[index % cardColors.length].icon,
                  }}
                >
                  {experienceIcons[item.icon as keyof typeof experienceIcons] ||
                    item.icon}
                </div>

                {/* Content */}
                <div className={styles.card_content}>
                  {/* Period */}
                  <div className={styles.card_period}>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    {item.year}
                  </div>

                  {/* Title & Company */}
                  <h3 className={styles.card_title}>{item.title}</h3>
                  <span
                    className={styles.card_company}
                    style={{
                      color: cardColors[index % cardColors.length].company,
                    }}
                  >
                    {item.company}
                  </span>

                  {/* Description */}
                  <p className={styles.card_description}>{item.description}</p>

                  {/* Achievements */}
                  {item.achievements && item.achievements.length > 0 && (
                    <div className={styles.achievements_section}>
                      <h4 className={styles.section_label}>
                        <span className={styles.label_icon}>🏆</span>
                        Key Achievements
                      </h4>
                      <ul className={styles.achievements_list}>
                        {item.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies */}
                  <div className={styles.tech_section}>
                    <h4 className={styles.section_label}>
                      <span className={styles.label_icon}>📦</span>
                      Technologies & Skills
                    </h4>
                    <div className={styles.card_tags}>
                      {item.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a href="/career" className={styles.btn_secondary}>
            View Full Career History
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

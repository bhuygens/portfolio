"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./about.module.scss";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const coreTechnologies = [
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
  ];

  const experiences = [
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      title: "Lead Developer",
      company: "Pivot",
      period: "2023 - Present",
      description:
        "Building modern web applications using React, Next.js, and Node.js. Working on scalable solutions for enterprise clients.",
      badge: "SaaS platform",
      badgeColor: "green",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8" />
          <path d="M12 17v4" />
        </svg>
      ),
      title: "Backend and Rollout developer",
      company: "Decathlon United",
      period: "2022 - 2024",
      description:
        "Successful deployment of the shopping app in 25 countries around the world",
      badge: "NestJS, Clean Architecture, AWS",
      badgeColor: "blue",
    },
  ];

  const achievements = [
    { icon: "⭐", text: "5+ Years Experience" },
    { icon: "🎯", text: "Expert in React & Node.js" },
    { icon: "🚀", text: "10+ Projects Delivered" },
  ];

  const availability = [{ icon: "🌐", text: "Remote & On-site Available" }];

  return (
    <section className={styles.about} id="about" ref={ref}>
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
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            Get To Know Me
          </span>
          <h2 className={styles.section_title}>About Me</h2>
          <div className={styles.title_line}></div>
          <p className={styles.section_subtitle}>
            Crafting digital experiences with passion, precision, and purpose
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className={styles.main_grid}>
          {/* Left Column */}
          <div className={styles.left_column}>
            {/* Intro Card */}
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
                <span className={styles.wave}>👋</span> Hello, I&apos;m Benjamin
                Huygens
              </h3>

              <p className={styles.intro_text}>
                A passionate{" "}
                <span className={styles.highlight_green}>
                  Full Stack Developer
                </span>{" "}
                and{" "}
                <span className={styles.highlight_purple}>Tech enthusiast</span>{" "}
                with <span className={styles.highlight_green}>5+ years</span> of
                experience crafting digital experiences that users love.
              </p>

              <p className={styles.description}>
                I specialize in building scalable web and mobile applications
                using React, Next.js, TypeScript, and modern development
                technologies. I thrive on turning complex problems into elegant
                solutions that users love.
              </p>

              <p className={styles.description}>
                Beyond work, I love exploring emerging technologies,
                contributing to open-source projects, and mentoring aspiring
                developers. I believe in continuous learning and staying at the
                forefront of technological innovation.
              </p>

              {/* Core Technologies */}
              <div className={styles.technologies}>
                <h4 className={styles.tech_title}>
                  <span className={styles.tech_icon}>🔧</span> Core Technologies
                </h4>
                <div className={styles.tech_tags}>
                  {coreTechnologies.map((tech) => (
                    <span key={tech} className={styles.tech_tag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Experience Cards */}
            <div className={styles.experience_grid}>
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className={styles.experience_card}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <div className={styles.exp_header}>
                    <div className={styles.exp_icon}>{exp.icon}</div>
                    <div className={styles.exp_info}>
                      <h4 className={styles.exp_title}>{exp.title}</h4>
                      <span className={styles.exp_company}>{exp.company}</span>
                      <span className={styles.exp_period}>{exp.period}</span>
                    </div>
                  </div>
                  <p className={styles.exp_description}>{exp.description}</p>
                  <span
                    className={`${styles.exp_badge} ${
                      styles[`badge_${exp.badgeColor}`]
                    }`}
                  >
                    {exp.badgeColor === "green" ? "⭐" : "✓"} {exp.badge}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.right_column}>
            {/* Let's Connect Card */}
            <motion.div
              className={styles.connect_card}
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className={styles.card_title}>
                <span className={styles.card_icon}>💬</span> Let&apos;s Connect
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

            {/* Achievements Card */}
            <motion.div
              className={styles.achievements_card}
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className={styles.card_title}>
                <span className={styles.card_icon}>🏆</span> Achievements
              </h4>
              <div className={styles.achievements_list}>
                {achievements.map((item, index) => (
                  <div key={index} className={styles.achievement_item}>
                    <span className={styles.achievement_icon}>{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Available for Hire Card */}
            <motion.div
              className={styles.availability_card}
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h4 className={styles.card_title}>
                <span className={styles.card_icon}>🚀</span> Available for Hire
              </h4>
              <div className={styles.availability_list}>
                {availability.map((item, index) => (
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

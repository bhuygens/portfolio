"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./projects.module.scss";

type ProjectItem = {
  id: number | string;
  title: string;
  company: string;
  detailText: string;
  tags: string[];
  url: string;
  image?: string;
  isLive?: boolean;
  isFeatured?: boolean;
  externalUrl: string;
};

interface ProjectsProps {
  projects: ProjectItem[];
}

const Projects = ({ projects }: ProjectsProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredProjects = projects.filter((project) =>
    [12, 3, 2, 1].includes(project.id as number)
  );

  return (
    <section className={styles.projects} id="projects" ref={ref}>
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
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16l-5.74-9.94M14.31 16H2.83M16.62 12l-5.74 9.94" />
            </svg>
            Portfolio Showcase
          </span>
          <h2 className={styles.section_title}>Featured Projects</h2>
          <div className={styles.title_line}></div>
          <p className={styles.section_description}>
            Discover my latest work in web development, AI integration, and
            digital innovation
          </p>
        </motion.div>

        {/* Projects List */}
        <div className={styles.projects_list}>
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={styles.project_card}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
            >
              {/* Background Image Overlay */}
              {project.image && (
                <div
                  className={styles.card_background}
                  style={{ backgroundImage: `url(${project.image})` }}
                />
              )}

              {/* Content */}
              <div className={styles.card_content}>
                {/* Tags */}
                <div className={styles.tags}>
                  {project.tags.slice(0, 4).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`${styles.tag} ${
                        tagIndex === 1 ? styles.tag_featured : ""
                      }`}
                    >
                      {tagIndex === 1 && (
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      )}
                      {tag}
                    </span>
                  ))}
                  {project.isLive !== false && (
                    <span className={styles.tag_live}>
                      <span className={styles.live_dot}></span>
                      Live
                    </span>
                  )}
                </div>

                {/* Title & Company */}
                <div>
                  <h3 className={styles.project_title}>{project.title}</h3>
                  <span className={styles.project_company}>
                    Client: {project.company}
                  </span>
                  {/* Description */}
                  <p className={styles.project_description}>
                    {project.detailText}
                  </p>
                </div>

                {/* Actions */}
                <div className={styles.card_actions}>
                  {project.externalUrl && (
                    <a
                      href={project.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.visit_btn}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                      Visit website
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a href="/career" className={styles.btn_primary}>
            View all projects
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

export default Projects;

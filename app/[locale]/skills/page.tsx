import Development from "@/app/skills/components/development/development";
import styles from "@/app/skills/page.module.scss";
import getSkillsContent from "@/lib/getSkillContent";
import Certifications from "@/app/skills/components/certifications/certifications";
import SkillsFrameworksIcons from "@/app/skills/components/framework-icons/frameworks-icons";
import * as React from "react";
import { Metadata } from "next";
import { getUi } from "@/lib/i18n/ui";
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";

type PageProps = { params: { locale: string } };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const ui = getUi(locale);
  return {
    title: `Benjamin Huygens — ${ui.nav.skills}`,
    description:
      locale === "fr"
        ? "Compétences techniques et certifications."
        : "My technical skills and certifications",
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
}

export default async function SkillsPage({ params }: PageProps) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const ui = getUi(locale);

  const developmentData: DevelopmentSkill[] = await getSkillsContent();

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <span className={styles.tag}>{ui.nav.skills}</span>
        <h1 className={styles.title}>
          {locale === "fr" ? (
            <>
              Expertise <span className={styles.gradient}>technique</span>
            </>
          ) : (
            <>
              Technical <span className={styles.gradient}>Expertise</span>
            </>
          )}
        </h1>
        <p className={styles.subtitle}>
          {locale === "fr"
            ? "Après plusieurs années en développement et de nombreuses missions, j’ai consolidé une solide pratique du JavaScript et de son écosystème."
            : "After 5 years as a freelance developer and many experiences, I have now strong knowledge in Javascript development."}
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

import React from "react";
import styles from "@/app/career/page.module.scss";
import getAllMissionsByYear from "@/lib/getAllMissionsByYear";
import { Metadata } from "next";
import MissionsRow from "@/app/career/components/missions-row/missions-row";
import { getUi } from "@/lib/i18n/ui";
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";

type PageProps = { params: { locale: string } };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const t = getUi(locale);
  return {
    title: `Benjamin Huygens — ${t.nav.career}`,
    description: t.career.subtitle,
  };
}

export default async function CareerPage({ params }: PageProps) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const t = getUi(locale);

  const missions: { year: number; foundMissionsByYear: MissionType[] }[] =
    await getAllMissionsByYear(locale);

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <span className={styles.tag}>{t.career.tag}</span>
        <h1 className={styles.title}>
          {t.career.titleBefore}
          <span className={styles.gradient}>{t.career.titleGradient}</span>
          {t.career.titleAfter}
        </h1>
        <p className={styles.subtitle}>{t.career.subtitle}</p>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          {missions.map((missionPerYear) => (
            <MissionsRow
              key={missionPerYear.year}
              missionPerYear={missionPerYear}
              locale={locale}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

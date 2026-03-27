import React from "react";
import getMissionByID from "@/lib/getMissionById";
import getAllMissions from "@/lib/getAllMissions";
import styles from "@/app/career/[id]/page.module.scss";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import CareerDetailWebsite from "@/app/career/[id]/components/career-detail-website/career-detail-website";
import { CommonHelper } from "@/helpers/common.helper";
import { getUi } from "@/lib/i18n/ui";
import { defaultLocale, isLocale, locales, type Locale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";

type PageProps = {
  params: { locale: string; id: string };
};

export async function generateStaticParams() {
  const ids = new Set<string>();
  for (const loc of locales) {
    const allMissions = await getAllMissions(loc);
    allMissions.forEach((m) => ids.add(m.id.toString()));
  }
  const idList = Array.from(ids);
  return locales.flatMap((locale) =>
    idList.map((id) => ({ locale, id }))
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const mission = await getMissionByID(+params.id, locale);

  if (!mission) {
    return { title: "Mission not found" };
  }

  return {
    title: `Huygens - ${mission.company}`,
    description: (mission.detailText || "").slice(0, 160),
  };
}

export default async function CareerDetailPage({ params }: PageProps) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const t = getUi(locale);

  const mission = await getMissionByID(+params.id, locale);
  if (!mission) notFound();

  const displayContent = () => {
    return Object.entries(mission.content).map(([key, value]) => (
      <li key={key}>
        <h2 id={key}>{key}</h2>
        <div dangerouslySetInnerHTML={{ __html: value }}></div>
      </li>
    ));
  };

  const displaySidebar = () => {
    return (
      <div className={styles.sidebarContent}>
        <h3>{t.mission.summary}</h3>
        <ol>
          {Object.entries(mission.content).map(([key]) => (
            <li key={key} className={styles.sidebar_item}>
              <a href={`#${key}`}>{key}</a>
            </li>
          ))}
          <li className={styles.sidebar_item}>
            <a href={`#mentions`}>{t.mission.mentions}</a>
          </li>
        </ol>
        <svg width="64" height="1">
          <rect width="64" height="1" style={{ fill: "white" }} />
        </svg>
        <div>
          <svg height="26" width="26">
            <circle cx="13" cy="13" r="12" stroke="white" strokeWidth={1}></circle>
          </svg>
          <svg height="26" width="26">
            <circle cx="13" cy="13" r="12" stroke="white" strokeWidth={1}></circle>
          </svg>
          <svg height="26" width="26">
            <circle cx="13" cy="13" r="12" stroke="white" strokeWidth={1}></circle>
          </svg>
          <svg height="26" width="26">
            <circle cx="13" cy="13" r="12" stroke="white" strokeWidth={1}></circle>
          </svg>
        </div>
      </div>
    );
  };

  const displayMentions = () => {
    return (
      <li>
        <h2 id="mentions">{t.mission.mentions}</h2>
        <div className={styles.mentions_container}>
          <div className={styles.mention_content}>
            {mission.mentions.map((item: MentionType, index: number) => (
              <Link
                href={item.link}
                target="_blank"
                key={index}
                className={styles.mentions_item}
                aria-label={item.title}
              >
                <Image
                  alt={item.title}
                  src={item.image_url}
                  className={styles.mentions_itemImage}
                  width={220}
                  height={0}
                />
                <h2 className={styles.mentions_itemTitle}>{item.title}</h2>
                <p className={styles.mentions_itemSubtitle}>{item.subtitle}</p>
                <div className={styles.mentions_itemTags}>
                  {item.tags.map((tag: string, tagIndex: number) => (
                    <span key={tagIndex}>{tag}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </li>
    );
  };

  return (
    <div className={styles.careerDetailContainer}>
      <div className={styles.header}>
        <div className={styles.header_tags}>
          {mission.tags.map((tag, id) => (
            <span key={id}>{CommonHelper.Capitalize(tag)}</span>
          ))}
        </div>
        <h1 className={styles.header_title}>
          {mission.title} @ {mission.company}
        </h1>
      </div>

      {mission.url && (
        <CareerDetailWebsite title={mission.title} url={mission.url} />
      )}

      <div className={styles.mainWrapper}>
        <div className={styles.content}>
          <ol>
            {displayContent()}
            {displayMentions()}
          </ol>
        </div>
        <aside className={styles.sidebar}>{displaySidebar()}</aside>
      </div>
    </div>
  );
}

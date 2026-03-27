import type { Locale } from "@/lib/i18n/config";
import raw from "@/lib/i18n/sections.json";

export type SectionSkill = {
  name: string;
  level: string;
  years: string;
};

export type SectionSkillCategory = {
  name: string;
  skills: SectionSkill[];
};

export type HomeSectionsCopy = {
  hero: {
    roleBadge: string;
    description: string;
    availability: string;
    scrollHint: string;
    socialEmail: string;
  };
  about: {
    badge: string;
    sectionTitle: string;
    sectionSubtitle: string;
    greeting: string;
    introBefore: string;
    introFullstack: string;
    introMid1: string;
    introTech: string;
    introMid2: string;
    introYears: string;
    introAfter: string;
    paragraph1: string;
    paragraph2: string;
    techTitle: string;
    connectTitle: string;
    achievementsTitle: string;
    hireTitle: string;
    achievements: { icon: string; text: string }[];
    availability: { icon: string; text: string }[];
    experiences: {
      title: string;
      company: string;
      period: string;
      description: string;
      badge: string;
    }[];
  };
  skills: {
    sectionTitle: string;
    sectionDescription: string;
    tabAll: string;
    categories: SectionSkillCategory[];
  };
  experience: {
    badge: string;
    sectionTitle: string;
    sectionDescription: string;
    keyAchievements: string;
    techSkills: string;
    cta: string;
  };
  projects: {
    badge: string;
    sectionTitle: string;
    sectionDescription: string;
    clientPrefix: string;
    live: string;
    visitWebsite: string;
    cta: string;
  };
  contact: {
    sectionTag: string;
    titleBefore: string;
    titleHighlight: string;
    description: string;
    labels: { location: string; email: string; phone: string };
    followMe: string;
    form: {
      subject: string;
      subjectPlaceholder: string;
      email: string;
      emailPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      sending: string;
    };
    toast: {
      loading: string;
      success: string;
      error: string;
    };
  };
};

const bundle = raw as Record<Locale, HomeSectionsCopy>;

export function getHomeSections(locale: Locale): HomeSectionsCopy {
  return bundle[locale];
}

/** Level label is localized; expert is the same in FR/EN. */
export function isExpertSkillLevel(level: string): boolean {
  return level === "Expert";
}

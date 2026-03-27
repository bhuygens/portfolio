import type { Locale } from "./config";

const ui = {
  fr: {
    nav: {
      overview: "Aperçu",
      about: "À propos",
      stack: "Stack",
      experience: "Expérience",
      projects: "Projets",
      contact: "Contact",
      home: "Accueil",
      career: "Parcours",
      skills: "Compétences",
    },
    career: {
      tag: "Parcours",
      titleBefore: "Mon ",
      titleGradient: "parcours",
      titleAfter: " pro",
      subtitle:
        "J’ai contribué à de nombreux projets, principalement en JavaScript / TypeScript, côté front et back.",
    },
    mission: {
      summary: "Sommaire",
      mentions: "Mentions",
    },
    footer: {
      quickLinks: "Liens rapides",
      connect: "Contact",
      rights: "Tous droits réservés.",
    },
    lang: { fr: "FR", en: "EN", switch: "Langue" },
  },
  en: {
    nav: {
      overview: "Overview",
      about: "About",
      stack: "Stack",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
      home: "Home",
      career: "Career",
      skills: "Skills",
    },
    career: {
      tag: "Career",
      titleBefore: "My Professional ",
      titleGradient: "Journey",
      titleAfter: "",
      subtitle:
        "I've been involved in many projects, mostly in Javascript (TS), for both front and back.",
    },
    mission: {
      summary: "Summary",
      mentions: "Mentions",
    },
    footer: {
      quickLinks: "Quick Links",
      connect: "Connect",
      rights: "All rights reserved.",
    },
    lang: { fr: "FR", en: "EN", switch: "Language" },
  },
} as const;

export type UiDict = (typeof ui)[Locale];

export function getUi(locale: Locale): UiDict {
  return ui[locale];
}

import { Metadata } from "next";
import { Toaster } from "sonner";
import Hero from "@/app/sections/hero/hero";
import About from "@/app/sections/about/about";
import Skills from "@/app/sections/skills/skills";
import Experience from "@/app/sections/experience/experience";
import Projects from "@/app/sections/projects/projects";
import Contact from "@/app/sections/contact/contact";
import getAllMissionsByYear from "@/lib/getAllMissionsByYear";
import { isLocale, defaultLocale, type Locale } from "@/lib/i18n/config";
import { getHomeSections } from "@/lib/i18n/sections-content";
import { notFound } from "next/navigation";

type PageProps = { params: { locale: string } };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const locale = isLocale(params.locale) ? params.locale : defaultLocale;
  if (locale === "fr") {
    return {
      title: "Benjamin Huygens - Développeur Full Stack",
      description:
        "Benjamin Huygens, développeur full stack basé à Lille. React, Next.js, Node.js, NestJS.",
    };
  }
  return {
    title: "Benjamin Huygens - Fullstack Developer",
    description:
      "I'm Benjamin, a fullstack developer with 5+ years of experience. Specializing in React, Next.js, and Node.js. Based in Lille (France), available for freelance projects.",
    keywords: [
      "fullstack",
      "developer",
      "javascript",
      "typescript",
      "next",
      "nextjs",
      "react",
      "nestjs",
      "huygens",
      "benjamin huygens",
      "frontend",
      "backend",
      "freelance",
      "lille",
      "france",
    ],
  };
}

export default async function Home({ params }: PageProps) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const sections = getHomeSections(locale);

  const missionsData = await getAllMissionsByYear(locale);

  const experiences = missionsData.slice(0, 4).flatMap((yearGroup) =>
    yearGroup.foundMissionsByYear.slice(0, 2).map((mission) => ({
      id: String(mission.id),
      year: String(yearGroup.year),
      title: mission.title,
      company: mission.company,
      description: mission.detailText,
      tags: mission.tags,
      icon: mission.icon,
    }))
  );

  const projects = missionsData.flatMap((yearGroup) =>
    yearGroup.foundMissionsByYear.map((mission) => ({
      id: mission.id,
      title: mission.title,
      company: mission.company,
      detailText: mission.detailText,
      tags: mission.tags,
      url: mission.url,
      externalUrl: mission.externalUrl,
      icon: mission.icon,
    }))
  );

  return (
    <main>
      <Hero copy={sections.hero} />
      <About copy={sections.about} />
      <Skills copy={sections.skills} />
      <Experience experiences={experiences} copy={sections.experience} />
      <Projects projects={projects} copy={sections.projects} />
      <Contact copy={sections.contact} />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#1c1c1f",
            border: "1px solid #27272a",
            color: "#fafafa",
          },
        }}
      />
    </main>
  );
}

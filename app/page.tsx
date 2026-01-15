import { Metadata } from "next";
import { Toaster } from "sonner";
import Hero from "./sections/hero/hero";
import About from "./sections/about/about";
import Skills from "./sections/skills/skills";
import Experience from "./sections/experience/experience";
import Projects from "./sections/projects/projects";
import Contact from "./sections/contact/contact";
import getAllMissionsByYear from "@/lib/getAllMissionsByYear";

export const metadata: Metadata = {
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

export default async function Home() {
  const missionsData = await getAllMissionsByYear();

  // Transform missions data for components
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
      <Hero />
      <About />
      <Skills />
      <Experience experiences={experiences} />
      <Projects projects={projects} />
      <Contact />
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

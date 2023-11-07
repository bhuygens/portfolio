import {notionClient} from "./notion";

export interface SkillsContent {
  linkedProjects: NotionMissionItem[];
  name: string;
  libraries: string[];
}

export default async function getSkillsContent(): Promise<SkillsContent[]> {
  const response = await notionClient.databases.query({
    database_id: process.env.NOTION_SKILLS_DATABASE!,
  });
  const notionResults = response.results as NotionDevelopmentSkillItem[];

  return serializeSkills(notionResults);
}

async function serializeSkills(data: NotionDevelopmentSkillItem[]): Promise<SkillsContent[]> {
  const serializedSkills: SkillsContent[] = [];

  for (const item of data) {
    const projects = [] as NotionMissionItem[];

    for (const linkedProject of item.properties.Projects.relation) {
      const project = await getProjectDetails(linkedProject.id);
      projects.push(project as NotionMissionItem);
    }

    const serializedSkill: SkillsContent = {
      name: item.properties.Name.title[0].plain_text,
      libraries: item.properties.Librairies.multi_select.map(library => library.name),
      linkedProjects: projects,
    };

    serializedSkills.push(serializedSkill);
  }
  return serializedSkills;
}

async function getProjectDetails(projectUuid: string) {
  return await notionClient.pages.retrieve({
    page_id: projectUuid,
  });
}

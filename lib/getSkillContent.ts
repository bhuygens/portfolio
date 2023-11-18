import {notionClient} from "./notion";

export default async function getSkillsContent(): Promise<DevelopmentSkill[]> {
  const response = await notionClient.databases.query({
    database_id: process.env.NOTION_SKILLS_DATABASE!,
  });
  const notionResults = response.results as NotionDevelopmentSkillItem[];

  return serializeSkills(notionResults);
}

async function serializeSkills(data: NotionDevelopmentSkillItem[]): Promise<DevelopmentSkill[]> {
  const serializedSkills: DevelopmentSkill[] = [];

  for (const item of data) {
    const projects = [] as NotionMissionItem[];

    for (const linkedProject of item.properties.Projects.relation) {
      const project = await getProjectDetails(linkedProject.id);
      projects.push(project as NotionMissionItem);
    }

    const serializedSkill: DevelopmentSkill = {
      name: item.properties.Name.title[0].plain_text,
      libraries: item.properties.Librairies.multi_select.map(library => library.name),
      linkedProjects: projects,
      content: item.properties.Content.rich_text[0].plain_text,
      subContent: item.properties.SubContent.rich_text[0].plain_text,
      type: item.properties.type.select.name as "backend" | "frontend",
      image: item.properties.image_url.rich_text[0].plain_text,
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

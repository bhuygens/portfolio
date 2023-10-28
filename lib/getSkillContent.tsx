import {notionClient} from "./notion"


export default async function getSkillsContent() {
  const response = await notionClient.databases.query({
    database_id: process.env.NOTION_SKILLS_DATABASE!,
  });
  const notionResults = response.results as NotionDevelopmentSkillItem[]
  return serializeSkills(notionResults);
}

function serializeSkills(data: NotionDevelopmentSkillItem[]): DevelopmentSkill[] {
  return data.map(item => (
    {
      name: item.properties.Name.title[0].plain_text,
      libraries: item.properties.Librairies.multi_select.map(library => library.name),
      linkedProjects: item.properties.Projects.relation.map(relation => relation.id)
    }
  ))
}
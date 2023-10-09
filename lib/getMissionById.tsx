import {notionClient} from "./notion"


export default async function getMissionByID(missionId: number) {
  const response = await notionClient.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: {property: "ID", unique_id: {equals: missionId}},
  });
  const notionResults = response.results as NotionMissionItem[]

  let contentFormatted = "";
  notionResults[0].properties.content.rich_text.map((text) => {contentFormatted += text.plain_text})

  return {
    detailText: notionResults[0].properties.detailText.rich_text[0].plain_text,
    media: JSON.parse(notionResults[0].properties.media.rich_text[0].plain_text),
    tags: notionResults[0].properties.Tags.multi_select.map(tag => tag.name),
    title: notionResults[0].properties.title.title[0].plain_text,
    url: notionResults[0].properties.url.rich_text[0]?.plain_text ?? undefined,
    year: new Date(notionResults[0].properties.year.date.start),
    id: notionResults[0].properties.ID.unique_id.number,
    content: JSON.parse(contentFormatted),
  }

}



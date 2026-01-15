import {notionClient} from "./notion"


export default async function getMissionByID(missionId: number) {
  const response = await notionClient.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: {property: "ID", unique_id: {equals: missionId},},
  });
  const notionResults = response.results[0] as NotionMissionItem

  let contentFormatted = "";
  notionResults.properties.content.rich_text.map((text) => {
    contentFormatted += text.plain_text
  })

  let mentionsFormatted = "";
  notionResults.properties.mentions.rich_text.map((text) => {
    mentionsFormatted += text.plain_text
  })
  return {
    detailText: notionResults.properties.detailText.rich_text[0].plain_text,
    media: JSON.parse(notionResults.properties.media.rich_text[0].plain_text),
    tags: notionResults.properties.Tags.multi_select.map(tag => tag.name),
    title: notionResults.properties.title.title[0].plain_text,
    url: notionResults.properties.url.rich_text[0]?.plain_text ?? "",
    year: new Date(notionResults.properties.year.date.start),
    id: notionResults.properties.ID.unique_id.number,
    content: JSON.parse(contentFormatted),
    mentions: JSON.parse(mentionsFormatted),
    company: notionResults.properties.company.rich_text[0].plain_text,
    icon: notionResults.properties.icon.rich_text[0]?.plain_text ?? "",
    externalUrl: notionResults.properties.externalUrl?.rich_text?.[0]?.plain_text ?? ""
  }

}



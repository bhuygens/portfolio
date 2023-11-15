import {notionClient} from "./notion"


export default async function getAllMissions() {
    const response = await notionClient.databases.query({
        database_id: process.env.NOTION_DATABASE_ID!,
    });
    const notionResults = response.results as NotionMissionItem[]

    return notionResults
        .map((item: NotionMissionItem, id: number): Omit<MissionType, "reverse"> => {

            let contentFormatted = "";
            item.properties.content.rich_text.map((text) => {
                contentFormatted += text.plain_text
            })

            let mentionsFormatted = "";
            notionResults[0].properties.mentions.rich_text.map((text) => {
                mentionsFormatted += text.plain_text
            })
            return {
                detailText: item.properties.detailText.rich_text[0].plain_text,
                media: JSON.parse(item.properties.media.rich_text[0].plain_text),
                tags: item.properties.Tags.multi_select.map(tag => tag.name),
                title: item.properties.title.title[0].plain_text,
                url: item.properties.url.rich_text[0]?.plain_text ?? "",
                year: new Date(item.properties.year.date.start),
                id: item.properties.ID.unique_id.number,
                content: JSON.parse(contentFormatted),
                mentions: JSON.parse(mentionsFormatted) ?? []
            }
        });
}

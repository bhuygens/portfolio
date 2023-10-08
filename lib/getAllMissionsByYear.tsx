import {notionClient} from "./notion"


export default async function getAllMissions() {
  const response = await notionClient.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
  });
  const notionResults = response.results as NotionMissionItem[]

  const missions = notionResults
    .sort((a, b) => sortByDate(a.properties.year.date.start, b.properties.year.date.start))
    .map((item: NotionMissionItem, id: number): MissionType => {
      return {
        detailText: item.properties.detailText.rich_text[0].plain_text,
        media: JSON.parse(item.properties.media.rich_text[0].plain_text),
        tags: item.properties.Tags.multi_select.map(tag => tag.name),
        title: item.properties.title.title[0].plain_text,
        url: item.properties.url.rich_text[0].plain_text,
        year: new Date(item.properties.year.date.start),
        reverse: (!!(id % 2)),
        id: item.properties.ID.unique_id.number,
      }
    });


  return groupMissionsByYear(missions);
}

const groupMissionsByYear = (missions: MissionType[]) => {
  const missionCategories = new Set<number>;
  missions.map(item => missionCategories.add(item.year.getFullYear()));

  const groupedCategories: { year: number; foundMissionsByYear: MissionType[]; }[] = [];
  missionCategories.forEach(year => {
    const foundMissionsByYear = missions.filter((item => item.year.getFullYear() === year))
    groupedCategories.push({
      year, foundMissionsByYear,
    })
  });
  return groupedCategories;
}

const sortByDate = (a: Date, b: Date) => {
  const dateA = new Date(a);
  const dateB = new Date(b);


  if (dateA.getTime() < dateB.getTime()) {
    return 1;
  } else if (dateA.getTime() > dateB.getTime()) {
    return -1;
  } else {
    return 0;
  }
}

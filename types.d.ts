type MissionType = {
  year: Date;
  title: string;
  detailText: string;
  media: any;
  tags: string[];
  url: string;
  reverse: boolean;
}

type NotionMissionItem = {
  object: string,
  id: string,
  created_time: string,
  last_edited_time: string,
  created_by: {
    object: string,
    id: string
  },
  last_edited_by: {
    object: string,
    id: string
  },
  cover: any,
  icon: any,
  parent: any,
  archived: boolean,
  properties: {
    detailText: {
      id: string,
      type: string,
      rich_text: [
        {
          type: string,
          text: {
            content: string,
            link: string
          },
          annotations: {
            bold: boolean,
            italic: boolean,
            strikethrough: boolean,
            underline: boolean,
            code: boolean,
            color: string
          },
          plain_text: string,
          href: string
        }
      ]
    },
    Tags: {
      id: string,
      type: string,
      multi_select: [
        {
          id: string,
          name: string,
          color: string
        },
        {
          id: string,
          name: string,
          color: string
        },
        {
          id: string,
          name: string,
          color: string
        },
        {
          id: string,
          name: string,
          color: string
        },
        {
          id: string,
          name: string,
          color: string
        }
      ]
    },
    url: {
      id: string,
      type: string,
      rich_text: [
        {
          type: string,
          text: {
            content: string,
            link: string
          },
          annotations: {
            bold: boolean,
            italic: boolean,
            strikethrough: boolean,
            underline: boolean,
            code: boolean,
            color: string,
          },
          plain_text: string,
          href: string
        }
      ]
    },
    media: {
      id: string,
      type: string,
      rich_text: [
        {
          type: string,
          text: {
            content: { type: string, source: { url: string, } },
            link: string
          },
          annotations: {
            bold: boolean,
            italic: boolean,
            strikethrough: boolean,
            underline: boolean,
            code: boolean,
            color: string
          },
          plain_text: string,
          href: string
        }
      ]
    },
    year: {
      id: string,
      type: string,
      date: {
        start: Date,
        end: string,
        time_zone: string
      }
    },
    title: {
      id: string,
      type: string,
      title: [
        {
          type: string,
          text: {
            content: string,
            link: string
          },
          annotations: {
            bold: boolean,
            italic: boolean,
            strikethrough: boolean,
            underline: boolean,
            code: boolean,
            color: string
          },
          plain_text: string,
          href: string
        }
      ]
    }
  },
  url: string,
  public_url: string
}

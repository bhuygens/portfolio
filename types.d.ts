type MissionType = {
    id: number | string
    year: Date;
    title: string;
    detailText: string;
    media: any;
    tags: string[];
    url: string;
    reverse: boolean;
    content: Object,
    mentions: MentionType[]
}

type MentionType = {
    image_url: string,
    title: string,
    subtitle: string,
    tags: string[],
    link: string
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
        ID: {
            id: string,
            type: string,
            unique_id: {
                prefix: string,
                number: number
            }
        },
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
        content: {
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
            multi_select: NotionMultiSelect[]
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
        },
        mentions: {
            id: string,
            type: "rich_text",
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
                    plain_text: string
                    href: string
                }
            ]
        }
    },
    url: string,
    public_url: string
}

type NotionDevelopmentSkillItem = {
    object: string,
    id: string,
    created_time: Date,
    last_edited_time: Date,
    created_by: {
        object: string,
        id: string
    },
    last_edited_by: {
        object: string,
        id: string
    },
    cover: string,
    icon: string,
    parent: {
        type: string,
        database_id: string
    },
    archived: false,
    properties: {
        Librairies: {
            id: string,
            type: string,
            multi_select: NotionMultiSelect[]
        },
        Projects: {
            id: string,
            type: string,
            relation: [
                {
                    id: string
                }
            ],
            has_more: boolean
        },
        Name: {
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

type NotionMultiSelect = {
    id: string,
    name: string,
    color: string
}

type DevelopmentSkill = {
    name: string,
    linkedProjects: NotionMissionItem[],
    libraries: string[]
}
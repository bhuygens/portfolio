import "server-only";

import {Client} from "@notionhq/client";
import React from "react";

export const notionClient = new Client({
  auth: process.env.NOTION_TOKEN,
});


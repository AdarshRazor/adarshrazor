import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

// Notion API Keys
const notionApiKey = process.env.NEXT_PUBLIC_NOTION_NOTSOTECH_API;
const notionDatabaseId = process.env.NEXT_PUBLIC_NOTION_NOTSOTECH_DATABASE_ID;

export async function GET() {
  if (!notionApiKey || !notionDatabaseId) {
    console.error(
      "🔴 [api/notion/notsotech]: Notion API Key or Database ID is missing",
    );
    return NextResponse.json(
      { error: "Server configuration error" },
      { status: 500 },
    );
  }

  try {
    const notion = new Client({ auth: notionApiKey });
    const response = await notion.databases.query({
      database_id: notionDatabaseId as string,
      filter: {
        property: "Status",
        select: {
          equals: "Public",
        },
      },
    });

    if (!response.results || !Array.isArray(response.results)) {
      console.error(
        "🔴 [api/notion/notsotech]: Unexpected Notion API response structure",
      );
      return NextResponse.json([], { status: 200 });
    }

    // 🔵 [api/notion/notsotech]: Success. Found items.
    return NextResponse.json(response.results);
  } catch (error) {
    console.error(
      "🔴 [api/notion/notsotech]: Failed to fetch data from Notion",
      error,
    );
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}

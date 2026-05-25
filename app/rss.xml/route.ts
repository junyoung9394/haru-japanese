import { cultureItems } from "@/data/culture";

const BASE_URL = "https://japanese.luckygrampus.com";

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const buildDate = new Date().toUTCString();

  const items = cultureItems
    .map(
      (item) => `
    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${BASE_URL}/culture/${item.slug}</link>
      <description>${escapeXml(item.description)}</description>
      <guid isPermaLink="true">${BASE_URL}/culture/${item.slug}</guid>
      <pubDate>${buildDate}</pubDate>
      <category>${escapeXml(item.category)}</category>
    </item>`
    )
    .join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>하루일본어</title>
    <link>${BASE_URL}</link>
    <description>히라가나, 가타카나, JLPT 단어와 문법, 일본 문화를 초보자도 쉽게 배울 수 있는 일본어 학습 사이트</description>
    <language>ko</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}

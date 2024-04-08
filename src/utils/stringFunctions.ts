import parse from "node-html-parser";

export function stripHtmlTags(html: string): string {
  const root = parse(html);
  return root.text.trim(); // Extract text content and remove leading/trailing whitespace
}

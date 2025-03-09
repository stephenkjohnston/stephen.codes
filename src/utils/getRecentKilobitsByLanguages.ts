import { getCollection } from "astro:content";

export default async function getRecentKilobitsByLanguages(language: string) {
  return (
    await getCollection("kilobits", (kb) => kb.data.language === language)
  )
    .sort(
      (a, b) =>
        new Date(b.data.publishDate).getTime() -
        new Date(a.data.publishDate).getTime()
    )
    .slice(0, 4);
}

import { getCollection } from "astro:content";

export default async function getKilobitsByLanguages(
  language: string,
  limit?: number
) {
  const kilobitCollection = (
    await getCollection("kilobits", (kb) => kb.data.language === language)
  ).sort(
    (a, b) =>
      new Date(b.data.publishDate).getTime() -
      new Date(a.data.publishDate).getTime()
  );
  if (limit) {
    return kilobitCollection.slice(0, limit);
  }

  return kilobitCollection;
}

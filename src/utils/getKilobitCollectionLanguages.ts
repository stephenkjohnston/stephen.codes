import { getCollection, type CollectionEntry } from "astro:content";

export default async function getKilobitCollectionLanguages() {
  const kilobitLanguages = (await getCollection("kilobits"))
    .map((kbc) => kbc.data.language)
    .flat();
  return [...new Set(kilobitLanguages)];
}

import { getCollection } from "astro:content";

export default async function getAllKilobitEntries() {
  const kilobitCollection = await getCollection("kilobits");
  return kilobitCollection.sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  )
  .filter(article => article.data.status === "Publish");
}

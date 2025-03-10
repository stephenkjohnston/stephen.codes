import { getCollection } from "astro:content";

export default async function getAllKilobitEntries() {
  const kilobitCollection = await getCollection("kilobits");
  return kilobitCollection;
}

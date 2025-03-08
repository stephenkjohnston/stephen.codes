/**
 * Takes a bit of text and generates a
 * sluggified version.
 *
 * @author Grok
 * @param text
 * @returns A sluggified URL
 */
export function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/\s/g, "-");
}

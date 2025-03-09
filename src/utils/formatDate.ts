/**
 * Formats the date to the preferred format like "Jan 1, 2021"
 * @param date
 * @returns string "Jan 1, 2021"
 */
export default function formateDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "PST",
  });
}

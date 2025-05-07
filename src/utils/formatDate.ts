/**
 * Formats the date to the preferred format like "Jan 1, 2021"
 * @param date
 * @returns string "Jan 1, 2021"
 */
export default function formatDate(date: Date): string {
  const pstDate = new Date(date.toISOString().replace("Z", "-08:00"));
  return pstDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

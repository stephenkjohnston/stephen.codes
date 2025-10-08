/**
 * Formats the programming language with the correct
 * casing for it.
 * @TODO: Find a better way to do this.
 * @param language
 * @returns the language name with correct case formatting
 */
export default function formatLanguage(language: string) {
  switch (language) {
    case "html":
      return "HTML";
    case "js":
      return "JavaScript";
    case "css":
      return "CSS";
    case "cobol":
      return "COBOL";
    case "ispf":
      return "ISPF";
    case "rexx":
      return "REXX";
  }
}

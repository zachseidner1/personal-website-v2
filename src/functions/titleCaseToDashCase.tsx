export function titleCaseToDashCase(titleCase: string): string {
  return titleCase
    .split(/\s+/)
    .map((c) => c.toLowerCase())
    .join("-");
}

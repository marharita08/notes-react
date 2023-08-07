const summaryKeys: string[] = ["category", "active", "archived"];
const noteKeys: string[] = ["name", "created", "category", "content", "dates"];

export function getSummaryKeys(): string[] {
    return summaryKeys;
}

export function getNoteKeys(): string[] {
    return noteKeys;
}

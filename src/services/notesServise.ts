import { INote, Summary } from "../types";
import { getCategories } from "./categoriesService";

export function getActive(notes: INote[]) {
    return notes.filter((note: INote) => !note.archived);
}

export function getArchived(notes: INote[]) {
    return notes.filter((note: INote) => note.archived);
}

function countActiveNoteByCategory(notes: INote[], category:string) {
    return notes.filter(note => note.category === category && !note.archived).length
}

function countArchivedNoteByCategory(notes: INote[], category:string) {
    return notes.filter(note => note.category === category && note.archived).length
}

export function getSummary(notes: INote[]): Summary[] {
    let summary: Summary[] = [];
    getCategories().forEach((category: string) => {
        const active: number = countActiveNoteByCategory(notes, category);
        const archived: number = countArchivedNoteByCategory(notes, category);
        summary.push({category, active, archived});
    })
    return summary;
}


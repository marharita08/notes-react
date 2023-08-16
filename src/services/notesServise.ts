import {ICategory, INote, INoteAction, INoteToAddOrUpdate, ISetNotesAction, Summary} from "../types";
import {getNotesFromApi, addNoteToApi, updateNoteOnApi, archiveOrUnarchiveNoteOnApi, deleteNoteOnApi} from "../axios/notes";
import {Dispatch} from "redux";

const onError = (error: any) => console.error(error);

export function fetchNotes(dispatch: Dispatch, setNotes: (notes: INote[]) => ISetNotesAction): void {
    getNotesFromApi()
        .then(response => {
            dispatch(setNotes(response.data));
        })
        .catch(onError);
}

export function getActive(notes: INote[]): INote[] {
    return notes.filter((note: INote) => !note.archived);
}

export function getArchived(notes: INote[]): INote[] {
    return notes.filter((note: INote) => note.archived);
}

function countActiveNoteByCategory(notes: INote[], category_id: number): number {
    return notes.filter((note: INote) => note.category_id === category_id && !note.archived).length;
}

function countArchivedNoteByCategory(notes: INote[], category_id: number): number {
    return notes.filter((note: INote) => note.category_id === category_id && note.archived).length;
}

export function getSummary(notes: INote[], categories: ICategory[]): Summary[] {
    let summary: Summary[] = [];
    categories.forEach((category: ICategory) => {
        const active: number = countActiveNoteByCategory(notes, category.category_id);
        const archived: number = countArchivedNoteByCategory(notes, category.category_id);
        summary.push({category: category.name, active, archived});
    })
    return summary;
}

export function archiveOrUnarchiveNote(note: INote, dispatch: Dispatch, editNote: (note: INote) => INoteAction): void {
    archiveOrUnarchiveNoteOnApi(note.note_id, !note.archived)
        .then(response => dispatch(editNote(response.data)))
        .catch(onError);
}

export function createNote(note: INoteToAddOrUpdate, dispatch: Dispatch, addNote: (note: INote) => INoteAction): void {
    addNoteToApi(note)
        .then(response => dispatch(addNote(response.data)))
        .catch(onError);
}

export function updateNote(id: number, note: INoteToAddOrUpdate, dispatch: Dispatch, editNote: (note: INote) => INoteAction): void {
    updateNoteOnApi(id, note)
        .then(response => dispatch(editNote(response.data)))
        .catch(onError);
}

export function removeNote(id: number, dispatch: Dispatch, deleteNote: (note: INote) => INoteAction): void {
    deleteNoteOnApi(id)
        .then(response => dispatch(deleteNote(response.data)))
        .catch(onError);
}

import {ICategory, INote} from "../types";
import {INoteAction, ISetNotesAction} from "../types";

export enum actionTypes {
    SET_CATEGORIES = "SET_CATEGORIES",
    SET_NOTES = "SET_NOTES",
    ADD_NOTE = "ADD_NOTE",
    EDIT_NOTE = "EDIT_NOTE",
    DELETE_NOTE = "DELETE_NOTE",
}

export const setCategories = (categories: ICategory[]) => ({
    type: actionTypes.SET_CATEGORIES,
    categories
})

export const setNotes = (notes: INote[]): ISetNotesAction => ({
    type: actionTypes.SET_NOTES,
    notes
});

export const addNote = (note: INote): INoteAction => ({
    type: actionTypes.ADD_NOTE,
    note
});

export const editNote = (note: INote): INoteAction => ({
    type: actionTypes.EDIT_NOTE,
    note
});

export const deleteNote = (note: INote): INoteAction => ({
    type: actionTypes.DELETE_NOTE,
    note
});

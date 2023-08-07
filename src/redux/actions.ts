import {INote} from "../types";
import {INoteAction} from "../types";

export  enum actionTypes {
    ADD_NOTE = "ADD_NOTE",
    EDIT_NOTE = "EDIT_NOTE",
    DELETE_NOTE = "DELETE_NOTE",
}

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

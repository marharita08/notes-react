import {initialState} from "./initialState";
import {IAppState, INote, INoteAction, ISetCategoriesAction, ISetNotesAction} from "../types";
import {actionTypes} from "./actions";


const notesReducer = (state = initialState, action: INoteAction|ISetNotesAction|ISetCategoriesAction): IAppState => {
    switch (action.type) {
        case actionTypes.SET_CATEGORIES:
            let categories = [...state.categories];
            if ("categories" in action) {
                categories = action.categories;
            }
            return {
                ...state,
                categories
            }
        case actionTypes.SET_NOTES:
            let notesToSet = [...state.notes];
            if ("notes" in action) {
                notesToSet = action.notes;
            }
            return {
                ...state,
                notes: notesToSet
            }
        case actionTypes.ADD_NOTE:
            let notesToAdd = [...state.notes];
            if ("note" in action) {
                notesToAdd.push(action.note);
            }
            return  {
                ...state,
                notes: notesToAdd,
            };
        case actionTypes.EDIT_NOTE:
            const updatedNotes = [...state.notes];
            if ("note" in action) {
                const updatedNote = action.note;
                const index = updatedNotes.findIndex((note: INote) => note.note_id === updatedNote.note_id);
                updatedNotes[index] = updatedNote;
            }
            return {
                ...state,
                notes: updatedNotes,
            };
        case actionTypes.DELETE_NOTE:
            let notesToDelete = [...state.notes];
            if ("note" in action) {
                notesToDelete = notesToDelete.filter((note: INote) => note.note_id !== action.note.note_id);
            }
            return {
                ...state,
                notes: notesToDelete,
            };
        default:
            return state;
    }
};

export default notesReducer;


import {initialState} from "./initialState";
import {IAppState, INote, INoteAction} from "../types";
import {actionTypes} from "./actions";


const notesReducer = (state = initialState, action: INoteAction): IAppState => {
    switch (action.type) {
        case actionTypes.ADD_NOTE:
            return {
                ...state,
                notes: [...state.notes, action.note],
            };
        case actionTypes.EDIT_NOTE:
            const updatedNote  = action.note;
            const updatedNotes = [...state.notes];
            const index = updatedNotes.indexOf((note: INote) => note.id === updatedNote.id);
            updatedNotes[index] = updatedNote;
            return {
                ...state,
                notes: updatedNotes,
            };
        case actionTypes.DELETE_NOTE:
            return {
                ...state,
                notes: state.notes.filter((note: INote) => note.id !== action.note.id),
            };
        default:
            return state;
    }
};

export default notesReducer;


import apiClient from "./config";
import {INoteToAddOrUpdate} from "../types";

export const getNotesFromApi = async () => {
    return apiClient.get('/notes');
}

export const addNoteToApi = async (note: INoteToAddOrUpdate) => {
    return apiClient.post('/notes', {...note});
}

export const updateNoteOnApi = async (id: number, note: INoteToAddOrUpdate) => {
    return apiClient.patch(`/notes/${id}`, {...note});
}

export const archiveOrUnarchiveNoteOnApi = async (id: number, archived: boolean) => {
    return apiClient.patch(`/notes/archive/${id}`, {archived});
}

export const deleteNoteOnApi = async (id: number) => {
    return apiClient.delete(`/notes/${id}`);
}

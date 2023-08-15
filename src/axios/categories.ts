import apiClient from "./config";

export const getCategoriesFromApi = async () => {
    return apiClient.get('/categories');
}

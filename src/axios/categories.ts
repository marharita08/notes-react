import apiClient from "./config";

export const getCategoriesFromApi = async () => {
    /*console.log(apiClient);
    console.log(process.env.REACT_APP_API_URL);*/
    return apiClient.get('/categories');
}

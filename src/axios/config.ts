import axios from 'axios';

const apiClient = axios.create(
    {
        baseURL: "http://localhost:3001", //process.env.REACT_APP_API_URL,
        responseType: 'json'
    }
);

export default apiClient;

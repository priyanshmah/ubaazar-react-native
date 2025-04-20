import axios from "axios";
import { API_ENDPOINT } from "@env"
import { clearTokens, getTokens } from "./TokenMethods.js";
import refreshAccessToken from "../../hooks/getRefreshToken.js";

const axiosInstance = axios.create({
    baseURL: API_ENDPOINT,
    headers: {
        'Content-Type': 'application/json',
    }
})


axiosInstance.interceptors.request.use(
    async (config) => {
        const { accessToken } = await getTokens();
        if (accessToken) {
            config.headers.Authorization = `${accessToken}`
        }
        return config;
    },
    (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    response => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;
        const { accessToken, refreshToken } = await getTokens();

        if (error?.response?.status === 403 && !originalRequest._retry && accessToken && refreshToken) {

            originalRequest._retry = true;

            const newAccessToken = await refreshAccessToken();
            if (newAccessToken) {
                axiosInstance.defaults.headers.common['Authorization'] = `${newAccessToken}`;
                originalRequest.headers.Authorization = `${newAccessToken}`;

                return axiosInstance(originalRequest)
            } else {
                clearTokens();
                return Promise.reject(error);
            }
        }
        return Promise.reject(error);
    }
);


export default axiosInstance;
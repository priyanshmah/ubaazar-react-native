import axios from 'axios';
import { API_ENDPOINT } from '@env'
import { clearTokens, getTokens, setTokens } from '../utils/axios/TokenMethods';
import axiosInstance from '../utils/axios/axiosClient';

async function refreshAccessToken() {
    try {
        const token = await getTokens();
        const response = await axiosInstance.post(`/auth/refresh-token`,
            { refreshToken: token.refreshToken });

        if (!response.data.success) {
            await clearTokens();
            return null;
        }

        const { accessToken, refreshToken } = response.data;
        if (accessToken && refreshToken) {
            const response = await setTokens(accessToken, refreshToken);
            if (response) console.log("Tokens refreshed");
            return accessToken;
        }
    } catch (e) {
        console.error('Failed to refresh access token:', e);
        await clearTokens();
        return null;
    }
};



export default refreshAccessToken;

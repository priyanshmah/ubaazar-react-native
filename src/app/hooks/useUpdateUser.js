import axiosInstance from "../utils/axios/axiosClient";
import { API_ENDPOINT } from "@env"
import axios from 'axios'

const useUpdateUser = async (updates) => {
    try {
        console.log("updates");
        
        const response = await axiosInstance.post(
            `/auth/user/edit`,
            JSON.stringify({ ...updates })
        );

        if (response.data.success) 
            return { success: true, user: response.data.user }
        
        return { success: false };

    } catch (error) {
        console.error('Error updating user data:', error);
        return { success: false };
    }
};

export default useUpdateUser;
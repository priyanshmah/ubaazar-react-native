import { API_ENDPOINT } from "@env";
import axios from 'axios'
import { setTokens } from "../utils/axios/TokenMethods";
import { Context } from "../context/context.js";
import { useContext } from "react";
import Realm from "realm";

const useVerifyOTP = async (mobileNumber, enteredOTP, realm) => {

    try {

        if (!mobileNumber || !enteredOTP) {
            console.log("missing details");
            return { success: false }
        }

        const response = await axios.post(
            `${API_ENDPOINT}/auth/verify-otp`,
            JSON.stringify({ mobileNumber, enteredOTP })
        );

        if (response.data?.success && response.data?.accessToken && response.data?.refreshToken) {
            
            await setTokens(
                response.data.accessToken, response.data.refreshToken
            );

            if (response.data.user)
                realm.write(() => {
                    realm.create(
                        'UserData',
                        {
                            id: response.data.user?._id,
                            name: response.data.user?.username,
                            mobileNumber: response.data.user?.mobileNumber,
                        },
                        Realm.UpdateMode.Modified
                    )
                })

            return {
                success: true,
                user: response.data?.user,
                new: response.data?.user.username === response.data?.user.mobileNumber
            }
        }
        else return {
            success: false,
            message: response.data?.message,
            new: false
        };

    } catch (error) {
        console.error('Error Verifying otp:', error);
        return {
            success: false,
            message: 'Please try again later',
            new: false
        };
    }
};

export default useVerifyOTP;
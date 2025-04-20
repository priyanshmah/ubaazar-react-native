import { API_ENDPOINT } from "@env";
import axios from 'axios'
import axiosInstance from "../utils/axios/axiosClient";

const useSendOTP = async (mobileNumber) => {
  try {

    console.log("sending OTP.....");
    
    
    const response = await axios.post(
        `${API_ENDPOINT}/auth/send-otp`,
        JSON.stringify({ mobileNumber })
    );

    if (response.data?.success) return true;
    else return false;

  } catch (error) {
    console.error('Error sending OTP:', error);
    return false;
  }
};

export default useSendOTP;
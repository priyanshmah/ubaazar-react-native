import { API_ENDPOINT } from '@env'
import axios from 'axios';
import axiosInstance from '../utils/axios/axiosClient';

const getFeed = async (category) => {
  try {
       console.log(API_ENDPOINT);
       
    const response = await axios.post(
      `${API_ENDPOINT}/feed`,
      JSON.stringify({category})
    );
    

    if (response.data?.success && response.data?.feed) {
      return {
        feed: response.data?.feed,
        trendingProducts: response.data?.trendingProducts
      };
    }
  } catch (error) {
    return;
  }
};

export default getFeed;
import { API_ENDPOINT } from '@env';
import axiosInstance from '../utils/axios/axiosClient';
import Realm from 'realm';

const getOrders = async () => {
  try {
    const response = await axiosInstance.get(
      `/auth/user/get-orders`
    );

    if (response.data?.success && response.data?.orders)     
      return response.data?.orders;
    

    return;
  } catch (error) {
    console.error("Error fetching orders:", error);
    return;
  }
};

export default getOrders;

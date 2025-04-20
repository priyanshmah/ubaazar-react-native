import { API_ENDPOINT } from '@env'
import axios from 'axios';

const getReels = async () => {
    try {
      const response = await axios.get(
        `${API_ENDPOINT}/reels`,
      );
      
      return response.data?.reels;

      
    } catch (error) {
      return;
    }
  };

  export default getReels;
import axios from "axios";
import { API_ENDPOINT } from '@env'

const getProductById = async (productId) => {
    try {       
        const response = await axios.post(`${API_ENDPOINT}/product`,
            JSON.stringify({ productId })            
        );
               
        return response.data?.product

    } catch (error) {
        return;
    }
}

export default getProductById;
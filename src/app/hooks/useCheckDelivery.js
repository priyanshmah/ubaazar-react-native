import axios from "axios";
import { API_ENDPOINT } from '@env'

export default async function checkDelivery(pinCode) {

    let result = {
        servicable: false,
        cod: false
    }

    try {
        const response = await axios.post(
            `${API_ENDPOINT}/orders/check-delivery`,
            JSON.stringify({ pinCode })
        );

        if (response.data?.result?.delivery_codes?.length > 0) {
            result.servicable = true;
            if (
                response.data?.result?.delivery_codes?.[0]?.postal_code?.cash === "Y"
            ) {
                result.cod = true;
                return result
            }
        } else return result;

    } catch (error) {
        return result;
    }
}
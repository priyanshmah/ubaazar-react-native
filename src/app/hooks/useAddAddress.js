import { API_ENDPOINT } from '@env'
import axiosInstance from '../utils/axios/axiosClient';
import Realm from 'realm';

const useAddAddress = async (address, realm, userId) => {
    try {
        const response = await axiosInstance.post(
            `/auth/user/add-address`,
            JSON.stringify(address)
        );
      
        if (response.data?.success && response.data?.address) {

            let address = response.data.address;
                  realm.write(() => {
                    realm.create('Address', {
                        id: address?._id,
                        name: address?.name,
                        mobileNumber: address?.mobileNumber,
                        address: address?.address,
                        area: address?.area,
                        pincode: address?.pincode,
                        city: address?.city,
                        state: address?.state,
                        addressType: address?.addressType,
                        isDefault: address?.isDefault,
                        userId,
                    })
                });
            return { success: true, address: response.data?.address };
        }

        return { success: false };
    } catch (error) {
        return { success: false };
    }
};

export default useAddAddress;
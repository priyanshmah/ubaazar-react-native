import { API_ENDPOINT } from '@env';
import axiosInstance from '../utils/axios/axiosClient';
import Realm from 'realm';

const getAddresses = async (realm, userId) => {
  try {
    const response = await axiosInstance.get(
      `/auth/user/get-address`
    );

    if (response.data?.success && response.data?.addresses) {

      let addresses = response.data.addresses;


      realm.write(() => {

        const cachedAddresses = realm.objects("Address")
          .filtered(`userId == "${userId}"`);
        realm.delete(cachedAddresses);

        addresses.forEach((address) => {

          realm.create(
            'Address',
            {
              id: address._id,
              area: address.area,
              address: address.address,
              pincode: address.pincode,
              city: address.city,
              state: address.state,
              mobileNumber: address.mobileNumber,
              name: address.name,
              addressType: address.addressType,
              isDefault: address.isDefault,
              userId
            },
            Realm.UpdateMode.Modified
          );
        });
      });
      return response.data?.addresses;
    }

    return;
  } catch (error) {
    console.error("Error fetching addresses:", error);
    return;
  }
};

export default getAddresses;

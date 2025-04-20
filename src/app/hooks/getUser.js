import { API_ENDPOINT } from '@env';
import axiosInstance from '../utils/axios/axiosClient';
import Realm from 'realm';

const getUser = async (realm) => {
    try {
        const response = await axiosInstance.get(
            `/auth/user`
        );

        if (response.data?.success && response.data?.user) {

            realm.write(() => {
                realm.create(
                    'UserData',
                    {
                        id: response.data?.user?._id,
                        name: response.data?.user?.username,
                        email: response.data?.user?.email,
                        mobileNumber: response.data?.user?.mobileNumber,
                        gender: response.data?.user?.gender,
                    },
                    Realm.UpdateMode.Modified
                );
            });
        }
    }
    catch (error) {
        return null;
    }
};
export default getUser;

import { API_ENDPOINT } from '@env';
import axiosInstance from '../utils/axios/axiosClient';
import Realm from 'realm';

const getCoupons = async (realm, userId) => {
    try {
        const response = await axiosInstance.get(
            `/auth/user/get-coupons`
        );

        if (response.data?.success && response.data?.coupons) {

            let coupons = response.data.coupons;
            const cachedCoupons = realm
                .objects('Coupon')
                .filtered('userId == $0', userId);

            realm.write(() => {
                realm.delete(cachedCoupons);
                coupons.forEach((coupon) => {

                    realm.create(
                        'Coupon',
                        {
                            userId,
                            code: coupon.code,
                            description: coupon.description,
                            maxDiscount: coupon.maxDiscount,
                            discountType: coupon.discountType,
                            discountValue: coupon.discountValue,
                            minPurchase: coupon.minPurchase
                        },
                        Realm.UpdateMode.Modified
                    );
                });
            });
            return response.data?.coupons;
        }

        return [];
    } catch (error) {
        console.error("Error fetching coupons:", error);
        return [];
    }
};

export default getCoupons;

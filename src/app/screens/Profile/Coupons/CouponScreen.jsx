import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import GradientBar from '@/src/app/components/bars/gradientBar';
import colors from '@/src/app/constants/colors';
import AvailableCoupon from './AvailableCoupon';
import NoCoupon from '@/src/app/components/profile/profile/coupon/NoCoupon';
import {useRealm} from '@/src/app/utils/realm';
import axiosInstance from '@/src/app/utils/axios/axiosClient';
import getCoupons from '@/src/app/hooks/getCoupons';

const CouponScreen = () => {
  const [coupons, setCoupons] = useState([]);
  const realm = useRealm();
  const user = realm.objects('UserData').at(0);
  const cachedCoupons = realm
    .objects('Coupon')
    .filtered('userId == $0', user.id);


  const fetchCoupons = async () => {
    const result = await getCoupons(realm, user.id);
    if (result) setCoupons(result);
  };

  useEffect(() => {
    if (!cachedCoupons.length) fetchCoupons();
    else setCoupons(cachedCoupons)
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <GradientBar name={'Discount Coupons'} />
      {coupons.length < 1 ? (
        <NoCoupon />
      ) : (
        <AvailableCoupon coupons={coupons} />
      )}
    </View>
  );
};

export default CouponScreen;

const styles = StyleSheet.create({});

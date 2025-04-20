import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomBar from '../../components/bars/customBar';
import colors from '../../constants/colors';
import AppTextBold from '../../components/text/appTextbold';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Coupon from '../../components/profile/profile/coupon/Coupon';
import AvailableCoupon from '../Profile/Coupons/AvailableCoupon';
import Ionicons from 'react-native-vector-icons/Ionicons';
import getCoupons from '../../hooks/getCoupons';
import {useRealm} from '../../utils/realm';
import {useDispatch, useSelector} from 'react-redux';
import {
  setAppliedCoupon,
  setPriceDetails,
} from '../../utils/redux/slice/BagSlice';
import { useNavigation } from '@react-navigation/native';

const ApplyCouponScreen = () => {
  const subTotal = useSelector(state => state.bag?.priceDetails?.subTotal);
  const [discountCoupon, setDiscountCoupon] = useState('');
  const dispatch = useDispatch();
  const realm = useRealm();
  const navigation = useNavigation();
  const user = realm.objects('UserData').at(0);
  const cachedCoupons = realm
    .objects('Coupon')
    .filtered('userId == $0', user.id);

  const [coupons, setCoupons] = useState([]);
  const [error, setError] = useState('');

  const fetchCoupons = async () => {
    const result = await getCoupons(realm, user.id);
    if (result) setCoupons(result);
  };

  useEffect(() => {
    if (!cachedCoupons.length) fetchCoupons();
    else setCoupons(cachedCoupons);
  }, []);

  const validateCoupon = (code) => {
    
    const targetedCoupon = coupons.find(value => value.code === code);
    
    if (!targetedCoupon) setError('Invalid Coupon code');
    if (targetedCoupon && subTotal <= targetedCoupon?.minPurchase)
      setError(
        `Your bag total must be atleast ₹${targetedCoupon?.minPurchase}`,
      );

    if (targetedCoupon && subTotal >= targetedCoupon?.minPurchase) {

      const couponDiscount =
        targetedCoupon.discountType === 'PERCENTAGE'
          ? subTotal * (targetedCoupon.discountValue / 100)
          : targetedCoupon.discountValue;
      dispatch(setAppliedCoupon({ discountCoupon: code }))
      dispatch(setPriceDetails({couponDiscount: Math.min(couponDiscount, targetedCoupon.maxDiscount)}))
      navigation.goBack();

    } else {
      dispatch(setPriceDetails({couponDiscount: 0}))
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: colors.lightBackground}}>
      <View
        style={{
          backgroundColor: colors.white,
          borderBottomLeftRadius: 24,
          borderBottomRightRadius: 24,
          paddingBottom: 24,
        }}>
        <CustomBar name={'Apply Coupons'} />

        <View style={styles.codeContainer}>
          <TextInput
            cursorColor={colors.brightOrange}
            inputMode="text"
            value={discountCoupon}
            onChangeText={text => setDiscountCoupon(text)}
            placeholder="Enter Coupon Code"
            placeholderTextColor={colors.grayColor}
            style={styles.discountCode}
            selectionColor={colors.brightOrange}
            autoCapitalize="characters"
            onSubmitEditing={() => validateCoupon(discountCoupon)}
          />
          <Pressable
            onPress={() => {
              if (discountCoupon) validateCoupon(discountCoupon);
            }}>
            <Text
              style={{
                fontFamily: 'Metropolis-Bold',
                color: discountCoupon ? colors.brightOrange : colors.silver,
              }}>
              APPLY
            </Text>
          </Pressable>
        </View>

        {error && (
          <View style={styles.errorContainer}>
            <Ionicons
              name="close-circle"
              size={20}
              color={colors.red}
              style={{padding: 1}}
            />
            <AppTextBold style={styles.errorText}>{error}</AppTextBold>
          </View>
        )}
      </View>

      <View style={{padding: 12, gap: 18}}>
        <AppTextBold style={styles.heading}>AVAILABLE COUPONS</AppTextBold>

        {coupons?.map((value, index) => {
          return (
            <Pressable
            key={index}
            onPress={() => {
              setDiscountCoupon(value.code)
              validateCoupon(value.code);
            }}>
              <Coupon coupon={value} isApplicable={true} />
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

export default ApplyCouponScreen;

const styles = StyleSheet.create({
  discountCode: {
    fontSize: 16,
    fontFamily: 'Metropolis-Medium',
    width: '80%',
    color: colors.brightOrange,
  },
  codeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 6,
    borderWidth: 1,
    borderColor: colors.silver,
    borderRadius: 12,
    margin: 12,
    marginBottom: 0,
  },
  heading: {
    fontSize: 14,
    color: colors.silver,
    letterSpacing: 2,
    textAlign: 'center',
  },
  errorContainer: {
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  errorText: {
    color: colors.red,
    fontSize: 12,
    flexWrap: 1,
  },
});

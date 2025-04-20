import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../constants/colors';
import AppTextBold from '../text/appTextbold';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const Coupon = () => {

  const navigation = useNavigation();
  const appliedCoupon = useSelector(state => state.bag?.appliedCoupon);
  const couponDiscount = useSelector(state => state.bag?.priceDetails?.couponDiscount)

  return (
    <View
      style={{
        margin: 8,
        backgroundColor: colors.white,
        borderRadius: 16,
        padding: 12,
        gap: 12,
      }}>
      <AppTextBold style={styles.heading}>SAVINGS CORNER</AppTextBold>
      <Pressable
        onPress={() => navigation.navigate('ApplyCouponScreen')}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 12,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 12,
            flex: 1,
          }}>
          <View
            style={{
              backgroundColor: 'rgb(255, 241, 242)',
              padding: 4,
              borderRadius: 100,
            }}>
            <Ionicons
              name="ticket-outline"
              size={20}
              color={colors.brightOrange}
            />
          </View>
          {appliedCoupon ? (
            <View style={{flexDirection: 'row', gap: 6, alignItems: 'center'}}>
              <Text style={styles.orangeText}>{appliedCoupon}</Text>
              <AppTextBold style={{color: colors.green, fontSize: 14}}>
                ₹{couponDiscount} saved !!!
              </AppTextBold>
            </View>
          ) : (
            <AppTextBold style={{fontSize: 14}}>Apply Coupon</AppTextBold>
          )}
        </View>
        <Ionicons
          name="chevron-forward"
          size={20}
          color={colors.darkGrayColor}
        />
      </Pressable>
    </View>
  );
};

export default Coupon;

const styles = StyleSheet.create({
  heading: {
    fontSize: 14,
    color: colors.grayColor,
    letterSpacing: 2,
  },
  orangeText: {
    color: colors.brightOrange,
    padding: 6,
    fontSize: 12,
    paddingHorizontal: 12,
    borderRadius: 6,
    backgroundColor: colors.lightPink,
    borderWidth: 1,
    borderColor: colors.brightOrange,
    alignSelf: 'flex-start',
    fontFamily: 'Metropolis-Bold',
  },
});

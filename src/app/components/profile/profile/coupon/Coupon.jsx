import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '@/src/app/constants/colors';
import AppTextBold from '../../../text/appTextbold';

const Coupon = ({coupon, isApplicable = false, applyHandler}) => {
  return (
    <View
      style={{
        height: 180,
        width: '100%',
        backgroundColor: colors.white,
        borderRadius: 18,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        elevation: 2,
      }}>
      <View
        style={{
          backgroundColor: colors.brightOrange,
          borderTopLeftRadius: 18,
          borderBottomLeftRadius: 18,
          width: '15%',
          height: '100%',
          overflow: 'hidden',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={styles.verticalText}>{coupon?.code}</Text>
      </View>

      <View
        style={{
          width: '85%',
          padding: 18,
        }}>
        <View
          style={{
            gap: 8,
            borderBottomColor: colors.lightGrayColor,
            borderBottomWidth: 1,
            borderStyle: 'dashed',
            paddingBottom: 18,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <AppTextBold style={{fontSize: 16, letterSpacing: 1, padding: 1}}>
              {coupon?.code}
            </AppTextBold>

            <Text
              style={{
                fontFamily: 'Metropolis-Bold',
                color: colors.brightOrange,
              }}>
              {isApplicable ? 'APPLY' : 'USE NOW'}
            </Text>
          </View>
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'Metropolis-SemiBold',
              color: colors.green,
            }}>
            Save{' '}
            {coupon?.discountType === 'FIXED'
              ? `₹${coupon?.maxDiscount}`
              : `${coupon?.maxDiscount}%`}{' '}
             on this order!
          </Text>
        </View>
        <AppTextBold style={styles.text}>{coupon?.description}</AppTextBold>
      </View>
    </View>
  );
};

export default Coupon;

const styles = StyleSheet.create({
  verticalText: {
    transform: [{rotate: '-90deg'}],
    color: colors.white,
    fontFamily: 'PassionOne-Regular',
    // fontFamily: 'Metropolis-Bold',
    fontSize: 18,
    letterSpacing: 2,
    width: '500%',
    textAlign: 'center',
  },
  text: {
    fontSize: 12,
    color: colors.lightGrayColor,
    paddingVertical: 18,
  },
});

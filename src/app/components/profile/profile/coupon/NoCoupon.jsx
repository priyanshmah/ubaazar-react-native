import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Voucher from '@/src/app/assets/icons/coupons/voucher';
import AppTextBold from '../../../text/appTextbold';
import colors from '@/src/app/constants/colors';
import AppText from '../../../text/appText';

const NoCoupon = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        gap: 6,
        paddingTop: 150,
      }}>
      <Voucher size={200} />
      <AppTextBold style={{fontSize: 20, fontFamily: 'Metropolis-Bold'}}>No more coupons? </AppTextBold>
      <AppText
        style={{
          color: colors.lightGrayColor,
          textAlign: 'center',
          paddingHorizontal: 12,
          fontSize: 14,
          fontFamily: 'Metropolis-Medium',
        }}>
        Guess you’ve already unlocked all the deals we had for you !!!
      </AppText>
    </View>
  );
};

export default NoCoupon;

const styles = StyleSheet.create({});

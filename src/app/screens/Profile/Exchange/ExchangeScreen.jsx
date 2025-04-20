import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomBar from '../../../components/bars/customBar';
import Exchange from '@/src/app/assets/images/illustrations/money';
import colors from '@/src/app/constants/colors';
import GradientBar from '@/src/app/components/bars/gradientBar';

const ExchangeScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <GradientBar name={'Exchange & Refund'} />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          padding: 24,
        }}>
        <Exchange size={300} />
        <View style={{gap: 6}}>
          <Text style={styles.heading}>No exchange or refund!</Text>
          <Text style={styles.text}>
            Your orders are living happily !!! no exchange or refunds initiated
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ExchangeScreen;

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontFamily: 'Metropolis-Bold',
    color: colors.darkGrayColor,
    textAlign: 'center',
  },
  text: {
    fontFamily: 'Metropolis-Medium',
    color: colors.lightGrayColor,
    textAlign: 'center',
    fontSize: 14,
  },
});

import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomBar from '../../components/bars/customBar';
import {color} from 'native-base/lib/typescript/theme/styled-system';
import colors from '../../constants/colors';
import AppTextBold from '../../components/text/appTextbold';
import AppText from '../../components/text/appText';
import OtpInput from '../../components/ui/OtpBoxes';

const OtpVerify = ({ route }) => {
  const {mobileNumber} = route.params;

  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <CustomBar name={'OTP Verification'} />
      <View style={{padding: 20,}}>
        <AppText style={styles.mainText}>
          We have sent a verification code to
        </AppText>
        <AppTextBold style={styles.mainText}>+91 {mobileNumber}</AppTextBold>
      </View>

      <OtpInput mobileNumber={mobileNumber}/>

     
    </View>
  );
};

export default OtpVerify;

const styles = StyleSheet.create({
  mainText: {
    fontSize: 16,
    textAlign: 'center',
    color: colors.lightGrayColor,
  },
});

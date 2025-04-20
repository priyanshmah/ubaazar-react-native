import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppTextBold from '../../text/appTextbold';
import Notifications from '@/src/app/assets/images/illustrations/notification.jsx';
import colors from '@/src/app/constants/colors';

const Nonotification = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Notifications size={150} />
      <View style={{padding: 24, alignItems: 'center', gap: 6}}>
        <AppTextBold style={styles.heading}>No Notifications</AppTextBold>
        <Text style={styles.text}>
          We checked under the sofa... no notifications. You're good!
        </Text>
      </View>
    </View>
  );
};

export default Nonotification;

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontFamily: 'Metropolis-Bold',
    color: colors.pink,
    textAlign: 'center',
  },
  text: {
    fontFamily: 'Metropolis-Medium',
    color: colors.lightGrayColor,
    textAlign: 'center',
    fontSize: 14,
  },
});

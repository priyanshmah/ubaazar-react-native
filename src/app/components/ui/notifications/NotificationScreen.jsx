import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import Notifications from '@/src/app/assets/images/illustrations/notification.jsx';
import FastImage from 'react-native-fast-image';
import colors from '@/src/app/constants/colors';
import {Pressable} from 'react-native-gesture-handler';
import AppTextBold from '../../text/appTextbold';

const POST_NOTIFICATIONS_PERMISSION = PERMISSIONS.ANDROID.POST_NOTIFICATIONS || 'android.permission.POST_NOTIFICATIONS';

const PermissionsScreen = ({setIsVisible}) => {


  const requestPermission = async () => {
    console.log("clicked");

    await request(POST_NOTIFICATIONS_PERMISSION);

    
  };

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
        flex: 1,
        gap: 48
      }}>
      <View
        style={{
          alignItems: 'center',
          padding: 12,
          gap: 48
        }}>
        <View style={{gap: 12}}>
          <Text style={styles.heading}>Enable notifications ?</Text>
          <Text style={styles.text}>
            Our app is shy, but it wants to whisper sweet deals in your ear.
          </Text>
        </View>
        <Notifications size={150} />
      </View>

      <View style={{width: '100%', padding: 12, gap: 12}}>
        <Pressable
        onPress={requestPermission}
        style={styles.button}>
          <AppTextBold
            style={{color: colors.white, fontSize: 18, textAlign: 'center'}}>
            Turn on Notifications
          </AppTextBold>
        </Pressable>
        <Pressable>
          <AppTextBold
            style={{color: colors.pink, fontSize: 16, textAlign: 'center'}}>
            Not now
          </AppTextBold>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontFamily: 'Metropolis-Bold',
    fontSize: 24,
    color: colors.darkGrayColor,
  },
  text: {
    fontFamily: 'Metropolis-Medium',
    fontSize: 16,
    color: colors.lightGrayColor,
  },
  button: {
    padding: 12,
    backgroundColor: colors.pink,
    borderRadius: 12,
    width: '100%',
  },
});

export default PermissionsScreen;

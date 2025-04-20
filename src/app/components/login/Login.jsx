import {
  ActivityIndicator,
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Ubaazar from '../text/ubaazar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../constants/colors';
import AppTextBold from '../text/appTextbold';
import AppText from '../text/appText';
import CustomActionSheet from '../ui/CustomBottomSheet';

import {useNavigation} from '@react-navigation/native';
import useSendOTP from '../../hooks/useSendOTP';
import { ErrorToast, SuccessToast } from '../../utils/toast/Toast';


const LoginBottomSheet = ({visible, setVisible}) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [toast, setToast] = useState(false);
  const navigation = useNavigation();
  const [randomIndex, setRanDomIndex] = useState(
    Math.floor(Math.random() * lines.length),
  );

  const handleLogin = async () => {
    if (mobileNumber.length < 10) {
      setError('Mobile number must be exactly of 10 digits');
      return;
    } else setError('');

    try {
      setLoading(true);
      const response = await useSendOTP(mobileNumber);
  
      if (response) {
        setLoading(false);
        setVisible(false);
        navigation.navigate('OtpVerificationScreen', {mobileNumber});
      } else {
        setToast(true);
      }
    } catch (error) {
      console.log("Error while sending OTP", error);
      
      setToast(true);
      
    } finally {  
      setLoading(false);
      setVisible(false);
    }
    
  };

  const handleClose = () => {
    setMobileNumber('');
    setError('');
    setRanDomIndex(Math.floor(Math.random() * lines.length));
    setLoading(false);
    setVisible(false);
  };

  return (
    <CustomActionSheet isOpen={visible} onClose={handleClose}>
      <View style={{padding: 12, paddingBottom: 48}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{alignSelf: 'flex-start'}}>
            <Ubaazar size={30} />
          </View>
          <Pressable onPress={() => setVisible(false)}>
            <Ionicons name="close" size={25} color={colors.darkGrayColor} />
          </Pressable>
        </View>

        <View style={{gap: 40, paddingVertical: 40, paddingBottom: 60}}>
          <View style={styles.title}>
            <AppTextBold style={styles.heading}>
              {lines[randomIndex]}😊💖
            </AppTextBold>
          </View>
          <View style={{gap: 20}}>
            <View style={styles.loginContainer}>
              <View style={styles.line} />
              <AppTextBold style={{fontSize: 16, color: colors.silver}}>
                Login or signup
              </AppTextBold>
              <View style={styles.line} />
            </View>
            <View style={{gap: 4}}>
              <View
                style={{
                  borderColor: colors.silver,
                  borderWidth: 1,
                  flexDirection: 'row',
                  gap: 12,
                }}>
                <AppText style={styles.code}>+91</AppText>
                <TextInput
                  style={styles.input}
                  placeholder="Mobile Number"
                  inputMode="tel"
                  maxLength={10}
                  // autoFocus={true}
                  placeholderTextColor={colors.grayColor}
                  value={mobileNumber}
                  onChangeText={text => setMobileNumber(text)}
                  onSubmitEditing={handleLogin}
                />
              </View>
              {error && (
                <View
                  style={{
                    flexDirection: 'row',
                    padding: 1,
                    gap: 8,
                    alignItems: 'center',
                  }}>
                  <Ionicons
                    name="alert-circle-outline"
                    size={20}
                    color={colors.red}
                  />
                  <AppTextBold style={{color: colors.red}}>{error}</AppTextBold>
                </View>
              )}
            </View>
          </View>

          <View style={{gap: 12}}>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: 4,
                justifyContent: 'flex-start',
              }}>
              <AppTextBold style={styles.text}>
                By continuing, I agreed to
              </AppTextBold>
              <AppTextBold style={[styles.text, {color: colors.brightOrange}]}>
                Terms
              </AppTextBold>
              <AppTextBold style={[styles.text, {color: colors.brightOrange}]}>
                of
              </AppTextBold>
              <AppTextBold style={[styles.text, {color: colors.brightOrange}]}>
                use
              </AppTextBold>
              <AppTextBold style={styles.text}>&</AppTextBold>
              <AppTextBold style={[styles.text, {color: colors.brightOrange}]}>
                Privacy
              </AppTextBold>
              <AppTextBold style={[styles.text, {color: colors.brightOrange}]}>
                policy
              </AppTextBold>
            </View>
          </View>
            <TouchableOpacity onPress={handleLogin} style={styles.btn}>
              {loading ? (
                <ActivityIndicator color={colors.white} size={'small'} />
              ) : (
                <AppTextBold style={styles.btnText}>Continue</AppTextBold>
              )}
            </TouchableOpacity>
        </View>
      </View>
      <ErrorToast 
      message={"OTP not sent"}
      visible={toast}
      onClose={() => setToast(false)}
      />
    </CustomActionSheet>
  );
};

export default LoginBottomSheet;

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
  },
  code: {
    color: colors.grayColor,
    borderRightColor: colors.silver,
    borderRightWidth: 1,
    width: '15%',
    fontSize: 16,
    marginVertical: 6,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  input: {
    color: colors.grayColor,
    width: '80%',
    fontSize: 16,
  },
  text: {
    fontSize: 12,
    color: colors.grayColor,
  },
  btn: {
    backgroundColor: colors.darkBlue,
    color: colors.white,
    borderRadius: 8,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  btnText: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 18,
  },
  title: {
    flexDirection: 'row',
    gap: 12,
    padding: 1,
    alignItems: 'flex-end',
  },
  loginContainer: {
    flexDirection: 'row',
    padding: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  line: {
    height: 1.5,
    borderRadius: 50,
    width: '30%',
    backgroundColor: colors.silver,
    opacity: 0.5,
  },
});

const lines = [
  'You’re glowing, is it the discounts ?',
  'Our deals are here to impress!',
  'Eyes on us? Same!',
  'Prices so good, its your crush!',
  'Ready to fall for our offers?',
  'Blush-worthy prices, just for you!',
  'Careful, our deals might flirt back!',
  'Are these prices winking at you ?',
  'These deals are dangerously cute !!!',
  'Caution: These offers are irresistible!',
  'Who needs a date when you have us?',
  'Love at first unbox!',
  'Your parcel is our love letter!',
  'Warning: These deals are too attractive!',
  'Are you blushing, or is it the deals ?',
  'Delivering smiles, daily!!!',
  'Ready to Be Surprised?',
];

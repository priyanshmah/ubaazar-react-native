import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Alert,
  Keyboard,
  Text,
  ActivityIndicator,
} from 'react-native';
import colors from '../../constants/colors';
import {useNavigation} from '@react-navigation/native';
import useVerifyOTP from '../../hooks/useVerifyOTP';
import {ErrorToast} from '../../utils/toast/Toast.js';
import {Context} from '../../context/context.js';
import {Pressable} from 'react-native-gesture-handler';
import AppTextBold from '../text/appTextbold.jsx';
import {OtpInput} from 'react-native-otp-entry';
import {useRealm} from '../../utils/realm/index.js';
import useSendOTP from '../../hooks/useSendOTP.js';

const OtpBoxes = ({mobileNumber}) => {
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const {setIsLoggedIn} = useContext(Context);
  const navigation = useNavigation();
  const realm = useRealm();
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [toast, setToast] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
      return () => clearInterval(countdown);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  const handleResend = async () => {
    if (!canResend) return;
    else {
      await useSendOTP(mobileNumber);
    }
    setTimer(30);
    setCanResend(false);
  };

  const handleSubmit = async () => {
    if (otp.length !== 6) return;

    setLoading(true);
    const response = await useVerifyOTP(mobileNumber, otp, realm);
    setLoading(false);

    if (!response.success) {
      setToast(true);
      setError(response.message);
      return;
    }

    if (response.success) setIsLoggedIn(true);

    if (response.success && response.new)
      navigation.replace('PersonalDetailScreen', {id: response.user?._id});
    else navigation.goBack();
  };

  useEffect(() => {
    if (otp.length === 6) handleSubmit();
  }, [otp]);

  return (
    <View style={{padding: 12, flex: 1}}>
      <OtpInput
        numberOfDigits={6}
        focusColor={colors.brightOrange}
        autoFocus={true}
        hideStick={true}
        blurOnFilled={true}
        disabled={false}
        type="numeric"
        secureTextEntry={false}
        onTextChange={text => setOtp(text)}
        textInputProps={{
          accessibilityLabel: 'One-Time Password',
        }}
        caretHidden={true}
        theme={{
          containerStyle: styles.container,
          pinCodeContainerStyle: styles.pinCodeContainer,
          pinCodeTextStyle: styles.pinCodeText,
          focusStickStyle: styles.focusStick,
          placeholderTextStyle: styles.placeholderText,
          filledPinCodeContainerStyle: styles.filledPinCodeContainer,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          padding: 1,
          gap: 12,
          justifyContent: 'center',
        }}>
        <AppTextBold style={{}}>Didn't get the OTP ?</AppTextBold>
        {canResend ? (
          <Pressable onPress={handleResend}>
            <AppTextBold style={{color: colors.brightOrange}}>
              Resend Code
            </AppTextBold>
          </Pressable>
        ) : (
          <AppTextBold style={{color: colors.grayColor}}>
            Resend code in {timer}s
          </AppTextBold>
        )}
      </View>
      <Pressable
        style={[
          styles.btn,
          {
            backgroundColor:
              otp.length === 6 ? colors.brightOrange : colors.silver,
          },
        ]}>
        {loading ? (
          <ActivityIndicator color={colors.white} size={'small'} />
        ) : (
          <AppTextBold
            style={{color: colors.white, fontSize: 18, textAlign: 'center'}}>
            Submit code
          </AppTextBold>
        )}
      </Pressable>
      <ErrorToast 
      message={error}
      visible={toast}
      onClose={() => setToast(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 20,
  },
  pinCodeContainer: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: colors.silver,
    borderRadius: 16,
    textAlign: 'center',
  },
  pinCodeText: {
    fontSize: 24,
    color: colors.darkGrayColor,
    fontFamily: 'Metropolis-Bold',
  },
  btn: {
    width: '100%',
    borderRadius: 12,
    padding: 10,
    position: 'absolute',
    bottom: 12,
    alignSelf: 'center',
  },
  filledPinCodeContainer: {
    borderWidth: 2,
    borderColor: colors.brightOrange,
  },
});

export default OtpBoxes;

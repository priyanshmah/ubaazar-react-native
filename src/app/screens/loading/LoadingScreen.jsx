import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../constants/colors';
import LottieView from 'lottie-react-native';
import loading from '@/src/app/assets/animations/load.lottie';
import Ubaazar from '../../components/text/ubaazar';

const LoadingScreen = () => {

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 5000
      }}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <Ubaazar size={30} />
      <LottieView
        source={loading}
        style={{
          height: 50,
          width: 50,
        }}
        autoPlay
        loop
      />
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({});

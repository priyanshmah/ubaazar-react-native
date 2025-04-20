import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import loading from '@/src/app/assets/animations/loading.lottie';
import colors from '@/src/app/constants/colors';

const {height: screenHeight} = Dimensions.get('screen');

const BasicLoadingScreen = ({height = 1}) => {

  const randomIndex = Math.floor(Math.random() * messages.length);
  return (
    <View
      style={{
        height: screenHeight * height,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12
      }}>
        <Text style={{
          fontSize: 14,
          color: colors.silver,
          textAlign: 'center',
          paddingHorizontal: 24,
          fontFamily: 'Metropolis-Medium',
        }}>
          {messages[randomIndex]}
        </Text>


      <LottieView
        source={loading}
        style={{
          height: 60, // Increase size if needed
          width: 60,
        }}
        autoPlay
        loop
      />

    </View>
  );
};

export default BasicLoadingScreen;

const styles = StyleSheet.create({});

const messages = [
  "Chai break! We're just loading your styles...!",
"Loading your styles faster than a Mumbai local train!",
"Just a moment! Our server is on a tea break.",
"Loading... like a Bollywood movie with a twist ending!",
"Hold on! Our server is doing yoga to speed things up.",
"Your styles are on a rickshaw ride... almost there!",
"Our server is doing a Bollywood dance... please wait!",
"Did someone say 'jalebi'? Oh, just the loading bar. Be patient!",
"Don't worry, our code is just having a little 'desi' drama. Almost done!",
"We're sending a carrier pigeon with your styles. Should be any second...",
"Our loading bar is doing the 'bhangra'. Give it a moment!",
"We're busy hand-weaving your digital experience. Loading...",
"Patience is a virtue... especially when loading handcrafted styles.",
"Our app is doing the 'namaste' to your screen. Loading...",
"Our code is having a 'desi' party. We'll be there soon!",
"We're loading... because good things take time",
];

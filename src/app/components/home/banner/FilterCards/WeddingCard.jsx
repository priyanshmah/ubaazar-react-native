import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import WeddingWear from '@/src/app/assets/images/home/cards/WeddingWear.png';
import colors from '@/src/app/constants/colors';
import AppTextBold from '../../../text/appTextbold';
import Feather from 'react-native-vector-icons/Feather';
import { Pressable } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

// const mainColor = colors.darkGreen;
const mainColor = '#035553';

const WeddingCard = () => {
const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('FilterScreen', {
      screen: 'Wedding',
    });
  };

  return (
    <Pressable
    onPress={handlePress}
      style={{
        elevation: 2,
        borderRadius: 24,
        overflow: 'hidden',
        backgroundColor: colors.white,
        // height: 256,
        // width: 150,
        gap: 12,
      }}>
      
      <FastImage
        source={WeddingWear}
        style={{
          height: 256,
          aspectRatio: 4/5,
          borderRadius: 24
        }}
        resizeMode='contain'
      />
    </Pressable>
  );
};

export default WeddingCard;

const styles = StyleSheet.create({
  heading: {
    fontFamily: 'PassionOne-Regular',
    fontSize: 18,
    color: colors.pink,
    // textAlign: 'right',
  },
  text: {
    color: colors.silver,
    fontSize: 12,
    fontFamily: 'Metropolis-Medium',
    // textAlign: 'right',
  },
  discountText: {
    color: colors.pink,
    fontSize: 12,
    fontFamily: 'Metropolis-SemiBold',
    // textAlign: 'right',
  },
});

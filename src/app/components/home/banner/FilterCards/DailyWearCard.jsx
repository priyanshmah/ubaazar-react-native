import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import DailyWear from '@/src/app/assets/images/home/cards/DailyWear.webp';
import colors from '@/src/app/constants/colors';
import AppTextBold from '../../../text/appTextbold';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const mainColor = colors.lightGrayColor;
// const mainColor = '#777374';

const DailyWearCard = () => {
  const navigation = useNavigation();
  
    const handlePress = () => {
      navigation.navigate('FilterScreen', {
        screen: 'Daily',
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
       
      }}>
      
      <FastImage
        source={DailyWear}
        style={{
          height: 256,
          aspectRatio: 4/5,
        }}
        resizeMode='contain'
      />
    </Pressable>
  );
};

export default DailyWearCard;

const styles = StyleSheet.create({
  heading: {
    fontFamily: 'PassionOne-Regular',
    fontSize: 18,
    color: colors.pink,
    textAlign: 'right',
  },
  text: {
    color: colors.silver,
    fontSize: 12,
    fontFamily: 'Metropolis-Medium',
    textAlign: 'right',
  },
  discountText: {
    color: colors.pink,
    fontSize: 12,
    fontFamily: 'Metropolis-SemiBold',
    textAlign: 'right',
  },
});

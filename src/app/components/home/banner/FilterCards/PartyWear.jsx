import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import PartyWear from '@/src/app/assets/images/home/cards/PartyWear.webp';
import colors from '@/src/app/constants/colors';
import AppTextBold from '../../../text/appTextbold';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native-gesture-handler';

// const mainColor = colors.red;
const mainColor = '#9f2632';

const PartyWearCard = () => {

  const navigation = useNavigation();
  
    const handlePress = () => {
      navigation.navigate('FilterScreen', {
        screen: 'Party',
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
        source={PartyWear}
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

export default PartyWearCard;

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

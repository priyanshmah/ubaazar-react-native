import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import colors from '@/src/app/constants/colors';
import EthnicWear from '@/src/app/assets/images/home/cards/EthicWear.png';
import { Pressable } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


const EthnicWearCard = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('FilterScreen', {
      screen: 'Ethnic',
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
        source={EthnicWear}
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

export default EthnicWearCard;

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

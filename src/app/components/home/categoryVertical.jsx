import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AppTextBold from '../text/appTextbold';
import Suit from '../../assets/icons/suit';
import colors from '../../constants/colors';
import Cordset from '../../assets/icons/cordset';
import Saree from '../../assets/icons/saree';
import Animated, { Extrapolation, interpolate, useAnimatedStyle, withTiming } from 'react-native-reanimated';

const {height, width} = Dimensions.get('window');

const CategoryVertical = ({ selected, setSelected}) => {
 
  return (
    <Animated.View style={[styles.container]}>
      <Pressable
        onPress={() => setSelected('sarees')}
        style={[selected === 'sarees' && styles.active, styles.category]}>
        <Text
          style={[
            styles.categoryText,
            {color: selected === 'sarees' ? colors.pink : colors.silver},
          ]}>
          Indian Sarees
        </Text>
      </Pressable>
      <Pressable
        onPress={() => setSelected('suits')}
        style={[selected === 'suits' && styles.active, styles.category]}>
        <Text
          style={[
            styles.categoryText,
            {color: selected === 'suits' ? colors.pink : colors.silver},
          ]}>
          Suits & Kurtis
        </Text>
      </Pressable>
      <Pressable
        onPress={() => setSelected('cordset')}
        style={[selected === 'cordset' && styles.active, styles.category]}>
        <AppTextBold
          style={[
            styles.categoryText,
            {color: selected === 'cordset' ? colors.pink : colors.silver},
          ]}>
          Cordset
        </AppTextBold>
      </Pressable>
    </Animated.View>
  );
};

export default CategoryVertical;

const styles = StyleSheet.create({
  active: {
    backgroundColor: 'rgb(255, 228, 230)',
    borderRadius: 12,
  },
  container: {
    width: '15%',
    height: height * 0.6,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.white,
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 10
  },
  category: {
    transform: [{rotate: '-90deg'}],
    alignSelf: 'center',
    padding: 10,
    minWidth: 100,
  },
  categoryText: {
    fontSize: 12,
    fontFamily: 'Overlock-Black',
    // fontFamily: 'Fontspring-DEMO-cerapro-bold',
    textAlign: 'center',
    color: colors.grayColor
  },
});

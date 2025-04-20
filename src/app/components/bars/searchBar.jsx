import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import colors from '../../constants/colors';
import Feather from 'react-native-vector-icons/Ionicons';
import {Microphone, SliderHorizontal} from '../../utils/icons';
import {Pressable} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const placeholders = ['Bandhani Sarees', 'Anarkali Suits', 'Bridal Lehengas', 'Short Kurti', 'Long Kurti', 'Silk Suits', 'Ready To Wear Sarees', 'Peacock Co-ord sets', 'Designer Sarees', 'Designer Suits', 'Designer Lehengas', 'Designer Gowns', 'Designer Kurtis', 'Designer Co-ord sets'];

const SearchBar = () => {
  const navigation = useNavigation();

  const [index, setIndex] = useState(0);
  // const [placeholder, setPlaceholder] = useState(searchTerms[0]);
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  // const placeholders = ['Pizza', 'Burger', 'Sushi', 'Pasta'];
  const opacityValue = useSharedValue(1);
  const translateYValue = useSharedValue(0);
  const nextTranslateYValue = useSharedValue(0); // Initial position for the next placeholder

  useEffect(() => {
    const interval = setInterval(() => {
      // Animate current placeholder up and out
      opacityValue.value = withTiming(0, { duration: 300 });
      translateYValue.value = withTiming(-5, { duration: 300, easing: Easing.ease });

      setTimeout(() => {
        // Hide and change placeholder
        setShowPlaceholder(false); // Remove the old placeholder
        setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);

        setTimeout(() => {
          // Animate new placeholder up from the bottom
          setShowPlaceholder(true);
          translateYValue.value = nextTranslateYValue.value;
          nextTranslateYValue.value = 5;

          opacityValue.value = withTiming(1, { duration: 300 });
          translateYValue.value = withTiming(0, { duration: 300, easing: Easing.ease });
        }, 0); // Small delay before showing the new placeholder
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const animatedPlaceholderStyle = useAnimatedStyle(() => {
    return {
      opacity: opacityValue.value,
      transform: [{ translateY: translateYValue.value }],
    };
  });

  return (
    <Pressable
      onPress={() => navigation.navigate('SearchScreen')}
      style={{padding: 12}}>
      <View style={styles.searchBarContainer}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 6,
            borderRightWidth: 1,
            borderColor: colors.silver,
          }}>
          <Feather name={'search-outline'} size={20} color={colors.lightGrayColor} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 6,
            }}>
            <Text style={styles.text}>Search</Text>
            {showPlaceholder && <Animated.Text style={[styles.text, animatedPlaceholderStyle]}>
              '{placeholders[placeholderIndex]}'
            </Animated.Text>}
          </View>
        </View>
        <Microphone size={20} color={colors.brightOrange} />
      </View>
    </Pressable>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: colors.white,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 18,
    // paddingVertical: 18,
    borderWidth: 1,
    borderColor: colors.silver,
    gap: 6,
  },
  sliderContainer: {
    backgroundColor: colors.darkBlue,
    borderRadius: 10,
    padding: 4,
  },
  text: {
    color: colors.lightGrayColor,
    fontSize: 14,
    fontFamily: 'Metropolis-Medium',
  },
});

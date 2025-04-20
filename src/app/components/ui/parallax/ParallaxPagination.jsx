import {Dimensions, StyleSheet, View} from 'react-native';
import React from 'react';
import Animated, {
  Extrapolation,
  SharedValue,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';
import colors from '@/src/app/constants/colors';
const OFFSET = 70;
const width = Dimensions.get('window').width - OFFSET * 2;

const PaginationDot = ({index, scrollX}) => {
  const animatedDotStyle = useAnimatedStyle(() => {
    const widthAnimation = interpolate(
      scrollX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [8, 12, 8],
      Extrapolation.CLAMP,
    );

    const opacityAnimation = interpolate(
      scrollX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [0.2, 0.8, 0.2],
      Extrapolation.CLAMP,
    );
    return {
      width: widthAnimation,
      opacity: opacityAnimation,
    };
  });

  const animatedColor = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      scrollX.value,
      [0, width, 2 * width],
      [colors.grayColor, colors.grayColor, colors.grayColor],
    );

    return {
      backgroundColor: backgroundColor,
    };
  });

  return (
    <Animated.View style={[styles.dots, animatedDotStyle, animatedColor]} />
  );
};

const ParallaxCarouselPagination = ({data, scrollX}) => {
  return (
    <View style={styles.paginationContainer}>
      {data.map((_, index) => {
        return <PaginationDot index={index} scrollX={scrollX} key={index} />;
      })}
    </View>
  );
};

export default ParallaxCarouselPagination;

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  dots: {
    height: 8,
    marginHorizontal: 4,
    borderRadius: 50,
  },
});

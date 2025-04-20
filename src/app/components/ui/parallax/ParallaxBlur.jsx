import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import ParallaxCarouselCard from './ParallaxCarouselCard';
import ParallaxCarouselPagination from './ParallaxPagination';

const OFFSET = 45;

const AnimationParallaxCarousel = ({width, height}) => {
  const scrollX = useSharedValue(0);

  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: e => {
      scrollX.value = e.contentOffset.x;
    },
  });

  const data = [
    'https://res.cloudinary.com/dxweby5rk/image/upload/v1730305934/jsdvmp2wqvht6xcxfjvk.jpg',
    'https://res.cloudinary.com/dxweby5rk/image/upload/v1730305951/ierklrimhnuc0pfx0c4q.jpg',
  ];

  return (
      <Animated.FlatList
        horizontal={true}
        data={data}
        decelerationRate={'normal'}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <ParallaxCarouselCard
            item={item}
            id={index}
            scrollX={scrollX}
            width={width}
            height={height}
            total={data.length}
          />
        )}
        snapToInterval={width}
        // bounces={false}
        onScroll={onScrollHandler}
        // scrollEventThrottle={12}
      />

  );
};
export default AnimationParallaxCarousel;
const styles = StyleSheet.create({
  parallaxCarouselView: {
    // paddingVertical: 12,
    // backgroundColor: 'red'
  },
});

import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import colors from '../../constants/colors';
import Animated, {
  useSharedValue,
} from 'react-native-reanimated';

const {width} = Dimensions.get('screen');

const CarouselImages = ({product}) => {
  const scrollX = useSharedValue(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef(null);

  // const data = [
  //   'https://res.cloudinary.com/dxweby5rk/image/upload/v1730305934/jsdvmp2wqvht6xcxfjvk.jpg',
  //   'https://res.cloudinary.com/dxweby5rk/image/upload/v1730305951/ierklrimhnuc0pfx0c4q.jpg',
  // ];

  const handleScroll = (event) => {
    const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    if (newIndex !== currentIndex && newIndex >= 0 && newIndex < product.length) {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <View>
      <Animated.ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToInterval={width}
        decelerationRate="fast"
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={{
          borderBottomRightRadius: 24,
          borderBottomLeftRadius: 24,
        }}>
        {product?.map((value, index) => {
          return (
            <Image source={{uri: value}} style={styles.image} key={index} />
          );
        })}
      </Animated.ScrollView>

      <View style={styles.paginationContainer}>
        {product?.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentIndex === index ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default CarouselImages;

const styles = StyleSheet.create({
  image: {
    width: width,
    aspectRatio: 3 / 4,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: colors.grayColor,
  },
  inactiveDot: {
    backgroundColor: colors.silver,
  },
});

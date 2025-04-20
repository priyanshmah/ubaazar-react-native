import {
  StyleSheet,
  Dimensions,
  Text,
  ImageBackground,
  View,
  Image,
} from 'react-native';
import React from 'react';
import Animated, {
  Extrapolation,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import colors from '@/src/app/constants/colors';

const OFFSET = 50;
// const ITEM_WIDTH = Dimensions.get('screen').width - OFFSET * 2;

const ParallaxCarouselCard = ({item, scrollX, id, total, width, height}) => {
  const inputRange = [
    (id - 1) * width,
    id * width,
    (id + 1) * width,
  ];
  const translateStyle = useAnimatedStyle(() => {
    const translate = interpolate(
      scrollX.value,
      inputRange,
      [-width * 0.25, 0, width * 0.25],
      Extrapolation.CLAMP,
    );
    const scale = interpolate(
      scrollX.value,
      inputRange,
      [0.9, 1, 0.9],
      Extrapolation.CLAMP,
    );
    
    return {transform: [{translateX: translate}, { scale: scale }]};
  });
 

  console.log('item is: ', item);

  return (
    <Animated.View
      style={[
        {
          width: width,
          height: height,
        //   marginLeft: id === 0 ? undefined : OFFSET,
          marginRight: id === total - 1 ? undefined : width * 0.25,
          overflow: 'hidden',
          borderRadius: 18,
          elevation: 5,
          backgroundColor: colors.white,
          marginVertical: 10
        },
        translateStyle,
      ]}>
        <Image source={{uri: item}} style={style.imageBackgroundStyle} />
    </Animated.View>
  );
};

export default ParallaxCarouselCard;
const style = StyleSheet.create({
  imageBackgroundStyle: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    borderRadius: 14,
  },
  imageBackgroundView: {
    paddingHorizontal: 15,
    paddingVertical: 25,
    flex: 1,
    justifyContent: 'flex-end',
    gap: 4,
  },
  userImageView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  
});

import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
import colors from '../../constants/colors';
import Animated, {useSharedValue} from 'react-native-reanimated';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontawesome from 'react-native-vector-icons/FontAwesome6';
import AppTextBold from '../text/appTextbold';
import AppText from '../text/appText';
import Truck from '../../assets/icons/fast-delivery';
import {Discount, DiscountFilled} from '../../assets/icons/discount';
import {Bag, ShoppingBag, ShoppingBagPlus} from '../../utils/icons';
import Sound from 'react-native-sound';
import Ubaazar from '../text/ubaazar';
import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import Sale from '@/src/app/assets/animations/sale.json';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  Pressable,
} from 'react-native-gesture-handler';
import getProductById from '../../hooks/getProductData';
import {useLoading} from '../../context/LoadingContext';
import FastImage from 'react-native-fast-image';
import { Context } from '../../context/context';
import { useDispatch } from 'react-redux';
import { resetProductState, setProductId } from '../../utils/redux/slice/ProductSlice';

Sound.setCategory('Playback');
const pop = new Sound('pop.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('failed to load sound');
  }
});

const playSound = () => {
  pop.play();
};

const { width } = Dimensions.get('window');

const ProductImages = ({product, setVisible}) => {
  const navigation = useNavigation();
  const {isLoggedIn} = useContext(Context);
  const [favourite, setFavourite] = useState(false);
  const dispatch = useDispatch();
    
  const handleNavigation = async () => {
    
    dispatch(resetProductState());
    dispatch(setProductId({productId: product?._id}))
    navigation.navigate('ProductScreen');

  
  };

  const handleAddToFavourite = () => {
    if (!isLoggedIn) {
      setVisible(true);
      return;
    } else {
      setFavourite(prev => !prev);
    }
  }

  return (
    <View style={{width: '100%', flexDirection: 'row', padding: 6}}>
      <View style={styles.flatListContainer}>
        <Ionicons
          onPress={handleAddToFavourite}
          name={favourite ? "heart" : "heart-outline"}
          size={20}
          color={colors.pink}
          style={styles.icon}
        />

        <Pressable onPress={handleNavigation}>
          <FastImage
            source={{uri: product?.images?.[0], priority: 'high'}}
            style={{width: width * 0.55, aspectRatio: 3 / 4, borderRadius: 24}}
            resizeMode={FastImage.resizeMode.cover}
          />
        </Pressable>
      </View>
      <ProductBasicDetails product={product} />
    </View>
  );
};

export default ProductImages;

const ProductBasicDetails = ({product}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleNavigation = async () => {

    dispatch(resetProductState());
    dispatch(setProductId({productId: product?._id}))
    navigation.navigate('ProductScreen');

  
  };
  const discountPrice = product.mrp || Math.floor(1.5 * product.price);
  return (
    <View
      style={{flex: 1, justifyContent: 'flex-start', paddingLeft: 12, gap: 12}}>
      <View>
        <Pressable onPress={handleNavigation}>
          <AppTextBold numberOfLines={2} style={styles.title}>
            {product.productName}
          </AppTextBold>
        </Pressable>
        <View style={{flexDirection: 'row', gap: 6}}>
          <AppTextBold style={styles.price}>₹{product.price}</AppTextBold>
          <AppTextBold style={styles.discountPrice}>
            ₹{discountPrice}
          </AppTextBold>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 6,
            paddingHorizontal: 6,
            backgroundColor: colors.darkGreen,
            borderRadius: 6,
            alignSelf: 'flex-start',
            marginTop: 6,
          }}>
          <AppTextBold style={{fontSize: 14, color: colors.white}}>
            {product.rating || '4.1'}
          </AppTextBold>
          <AntDesign
            name="star"
            size={10}
            color={colors.white}
            style={{padding: 1}}
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 6,
          borderWidth: 1,
          borderColor: colors.silver,
          borderStyle: 'dashed',
          borderRadius: 12,
          overflow: 'hidden',
          height: 50,
        }}>
        <LottieView
          source={Sale}
          style={{height: 60, width: 60, borderRadius: 12}}
          resizeMode="cover"
          autoPlay
          loop
        />
        <View style={{flex: 1}}>
          <AppTextBold
            style={{
              flexWrap: 'wrap',
              textAlign: 'left',
              color: colors.grayColor,
            }}>
            Get upto 50% OFF
          </AppTextBold>
        </View>
      </View>

      <View>
        <Pressable onPress={handleNavigation} style={styles.bagContainer}>
          <Bag color={colors.pink} size={20} />
          <AppTextBold style={styles.bag}>Shop now</AppTextBold>
        </Pressable>
        <View style={{flexDirection: 'row', gap: 8}}>
          <AppTextBold style={styles.freeDelivery}>FREE DELIVERY</AppTextBold>
          <Truck color={colors.pink} size={30} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    position: 'absolute',
    padding: 2,
    paddingHorizontal: 8,
    bottom: 4,
    borderRadius: 8,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'rgba(245, 245, 245, 0.60)',
    gap: 6,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 8,
  },
  activeDot: {backgroundColor: colors.grayColor},
  inactiveDot: {backgroundColor: colors.silver},
  icon: {
    top: 6,
    right: 6,
    padding: 4,
    zIndex: 1000,
    borderRadius: 60,
    position: 'absolute',
    backgroundColor: colors.white,
  },
  flatListContainer: {
    width: width * 0.55,
    aspectRatio: 3 / 4,
    elevation: 1,
    borderRadius: 24,
    alignSelf: 'flex-start',
    position: 'relative',
    backgroundColor: colors.searchBarColor,
  },
  flatList: {
    width: 200,
    height: 250,
    borderRadius: 24,
    // alignSelf: 'center',
    objectFit: 'cover',
  },
  title: {
    fontSize: 14,
    flexWrap: 'wrap',
    color: colors.grayColor,
    fontFamily: 'Metropolis-Medium',
  },
  price: {
    fontSize: 20,
    alignSelf: 'flex-start',
    backgroundColor: colors.gold,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  discountPrice: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    color: colors.grayColor,
    fontFamily: 'Metropolis-Regular',
    textAlignVertical: 'center',
  },
  bag: {
    textAlign: 'center',
    textAlignVertical: 'bottom',
    alignSelf: 'center',
    color: colors.pink,
    fontSize: 12,
  },
  bagContainer: {
    backgroundColor: colors.lightPink,
    // elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderRadius: 8,
    flexDirection: 'row',
    gap: 6,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: colors.pink,
  },
  freeDelivery: {
    color: colors.pink,
    textAlignVertical: 'center',
    fontFamily: 'PassionOne-Regular',
    fontSize: 16,
  },
});

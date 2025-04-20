import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Pressable, ScrollView} from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image';
import AppTextBold from '../text/appTextbold';
import colors from '../../constants/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Truck from '../../assets/icons/fast-delivery';
import LinearGradient from 'react-native-linear-gradient';
import {ShoppingBag} from '../../utils/icons';
import {useLoading} from '../../context/LoadingContext';
import getProductById from '../../hooks/getProductData';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {
  resetProductState,
  setProductId,
} from '../../utils/redux/slice/ProductSlice';

const ProductVariant = ({product}) => {
  const discountPrice = product?.mrp || Math.floor(product?.price * 1.5);
  const [favourite, setFavourites] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleNavigation = async () => {
    dispatch(resetProductState());
    dispatch(setProductId({productId: product._id}));
    navigation.navigate('ProductScreen');
  };

  return (
    <View
      style={{
        paddingVertical: 12,
        backgroundColor: colors.white,
      }}>
      <View
        style={{
          paddingHorizontal: 12,
          flexDirection: 'row',
          gap: 12,
          alignItems: 'center',
        }}>
        <AppTextBold style={styles.heading}>{product?.productName}</AppTextBold>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 4,
            paddingHorizontal: 8,
            paddingVertical: 2,
            backgroundColor: colors.darkGreen,
            borderRadius: 6,
            alignSelf: 'flex-start',
          }}>
          <AppTextBold style={{fontSize: 12, color: colors.white}}>
            {product?.rating || '4.5'}
          </AppTextBold>
          <AntDesign
            name="star"
            size={10}
            color={colors.white}
            style={{padding: 1}}
          />
        </View>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            gap: 12,
            padding: 12,
          }}>
          {product.variants.map((variant, index) => (
            <Pressable onPress={handleNavigation}>
              <FastImage
                key={index}
                source={{uri: variant.image}}
                style={{
                  width: 200,
                  aspectRatio: 3 / 4,
                  borderRadius: 18,
                  elevation: 2,
                }}
                resizeMode={FastImage.resizeMode.cover}
              />
            </Pressable>
          ))}
        </View>
      </ScrollView>
      <View
        style={{
          paddingHorizontal: 12,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 4,
              }}>
              <AppTextBold style={styles.price}>₹{product?.price}</AppTextBold>
              <View>
                <AppTextBold style={styles.discountPrice}>
                  ₹{discountPrice}
                </AppTextBold>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 6,
            borderWidth: 0,
            borderColor: colors.lightGrayColor,
            borderStyle: 'dashed',
            borderRadius: 12,
            overflow: 'hidden',
            // paddingHorizontal: 12,
            //   height: 50,
            alignSelf: 'flex-start',
          }}>
          <LinearGradient
            colors={[colors.white, colors.lightPink]}
            start={{x: 0, y: 0}}
            end={{x: 0.5, y: 0}}
            style={{
              borderRadius: 14,
              backgroundColor: colors.white,
              flexDirection: 'row',
              gap: 6,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 0,
              paddingHorizontal: 12,
            }}>
            <AppTextBold style={styles.freeDelivery}>FREE DELIVERY</AppTextBold>
            <Truck color={colors.pink} size={30} />
          </LinearGradient>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: 12,
          paddingVertical: 4,
          flexDirection: 'row',
          gap: 12,
          alignItems: 'center',
        }}>
        <LinearGradient
          colors={[colors.darkPink, colors.orange]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{
            flex: 1,
            borderRadius: 12,
            backgroundColor: colors.white,
            flexDirection: 'row',
            gap: 6,
            elevation: 2,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 0,
            padding: 6,
          }}>
          <ShoppingBag strokeWidth={1.5} color={colors.white} size={25} />
          <AppTextBold style={styles.bag}>Buy now</AppTextBold>
        </LinearGradient>

        <Ionicons
          onPress={() => setFavourites(prev => !prev)}
          name={favourite ? 'heart' : 'heart-outline'}
          size={30}
          color={colors.pink}
          style={styles.icon}
        />
      </View>
    </View>
  );
};

export default ProductVariant;

const styles = StyleSheet.create({
  heading: {
    fontSize: 14,
    flex: 1,
    flexWrap: 'wrap',
  },
  price: {
    fontSize: 20,
    backgroundColor: colors.gold,
    padding: 4,
  },
  discountPrice: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    color: colors.silver,
    fontFamily: 'Metropolis-Medium',
  },
  freeDelivery: {
    color: colors.pink,
    textAlignVertical: 'center',
    fontFamily: 'PassionOne-Regular',
    fontSize: 16,
  },
  bag: {
    textAlign: 'center',
    textAlignVertical: 'bottom',
    alignSelf: 'center',
    color: colors.white,
    fontSize: 16,
    // fontFamily: 'PassionOne-Regular',
  },
  bagContainer: {
    backgroundColor: colors.lightPink,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    borderRadius: 8,
    flexDirection: 'row',
    gap: 6,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: colors.pink,
    elevation: 2,
  },
  icon: {
    borderRadius: 12,
    borderWidth: 0,
    borderColor: colors.pink,
  },
});

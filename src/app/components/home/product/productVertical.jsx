import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AppTextBold from '../../text/appTextbold';
import {ShoppingBag} from '@/src/app/utils/icons';
import colors from '@/src/app/constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Pressable} from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image';
import {useLoading} from '@/src/app/context/LoadingContext';
import getProductById from '@/src/app/hooks/getProductData';
import {useNavigation} from '@react-navigation/native';
import {resetProductState, setProductId} from '@/src/app/utils/redux/slice/ProductSlice';
import { useDispatch } from 'react-redux';

const ProductVertical = ({productData}) => {
  const [favourite, setFavourite] = useState(false);
  const discountPrice =
    productData?.mrp || Math.floor(productData?.price * 1.5);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  

  const handleNavigation = async () => {

    dispatch(resetProductState());   
    dispatch(setProductId({productId: productData?._id}))
    navigation.navigate('ProductScreen');

  };

  return (
    <View
      style={{
        width: 120,
        marginHorizontal: 6,
      }}>
      <View>
        <Pressable onPress={handleNavigation}>
          <FastImage
            source={{
              uri: productData?.image,
              priority: FastImage.priority.high,
            }}
            style={{
              width: 120,
              aspectRatio: 9 / 15,
              borderRadius: 16,
              objectFit: 'cover',
            }}
          />
        </Pressable>
        <Pressable
          onPress={() => setFavourite(prev => !prev)}
          style={styles.icon}>
          {favourite ? (
            <Ionicons
              name="heart"
              size={15}
              color={colors.pink}
              style={{
                backgroundColor: colors.white,
                borderRadius: 50,
                padding: 2,
              }}
            />
          ) : (
            <Ionicons
              name="heart-outline"
              size={15}
              color={colors.pink}
              style={{
                backgroundColor: colors.white,
                borderRadius: 50,
                padding: 2,
              }}
            />
          )}
        </Pressable>
      </View>
      <View style={{flex: 1, paddingVertical: 6, gap: 4}}>
        <Text numberOfLines={1} style={styles.productName}>
          {productData?.productName}
        </Text>
        <View style={{gap: 4}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 2,
              paddingHorizontal: 6,
              backgroundColor: colors.darkGreen,
              borderRadius: 4,
              alignSelf: 'flex-start',
            }}>
            <AppTextBold style={{fontSize: 10, color: colors.white}}>
              {productData?.rating || '4.5'}
            </AppTextBold>
            <AntDesign
              name="star"
              size={10}
              color={colors.white}
              style={{padding: 1}}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <AppTextBold style={styles.price}>
              ₹{productData?.price}
            </AppTextBold>
            <AppTextBold style={styles.discountPrice}>
              ₹{discountPrice}
            </AppTextBold>
          </View>
        </View>

        <Pressable
          onPress={handleNavigation}
          style={{
            backgroundColor: colors.lightPink,
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 6,
            flexDirection: 'row',
            paddingVertical: 4,
            borderColor: colors.pink,
            borderWidth: 1,
          }}>
          <ShoppingBag color={colors.pink} size={20} strokeWidth={1.5} />
          <AppTextBold style={{color: colors.pink}}>Shop now</AppTextBold>
        </Pressable>
      </View>
    </View>
  );
};

export default ProductVertical;

const styles = StyleSheet.create({
  productName: {
    flexWrap: 'wrap',
    fontFamily: 'Metropolis-SemiBold',
    fontSize: 12,
    color: colors.darkGrayColor,
  },
  icon: {
    position: 'absolute',
    top: 5,
    right: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  price: {
    fontSize: 16,
    backgroundColor: colors.gold,
    padding: 4,
  },
  discountPrice: {
    fontSize: 12,
    textDecorationLine: 'line-through',
    color: colors.lightGrayColor,
    fontFamily: 'Metropolis-Medium',
  },
});

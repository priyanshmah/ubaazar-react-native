import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../constants/colors';
import AppTextBold from '../text/appTextbold';
import {Pressable} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useLoading } from '../../context/LoadingContext';
import getProductById from '../../hooks/getProductData';
import { resetProductState, setProductId, setVariantId } from '../../utils/redux/slice/ProductSlice';
import { useDispatch } from 'react-redux';

const ProductCard = ({image, productName, mrp, price, productId, variantId}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleNavigation = async() => {
   
    dispatch(resetProductState());
    dispatch(setProductId({productId}))
    dispatch(setVariantId({variantId}))
    navigation.navigate('ProductScreen');
  };

  return (
    <Pressable
    onPress={handleNavigation}
      style={{
        paddingVertical: 6,
      }}>
      <View
        style={{
          borderRadius: 16,
          borderWidth: 1,
          borderColor: colors.darkGrayColor,
          alignSelf: 'flex-start',
          width: 100,
          overflow: 'hidden',
          backgroundColor: colors.white,
          elevation: 5,
        }}>
        <Image
          source={{uri: image}}
          style={{
            height: 120,
            width: 100,
            objectFit: 'cover',
          }}
        />
        <Text numberOfLines={1} style={styles.productName}>
          {productName}
        </Text>
        <View style={{flexDirection: 'row', gap: 4, alignItems: 'center'}}>
          <AppTextBold style={styles.price}>₹{price}</AppTextBold>
          <AppTextBold style={styles.discountPrice}>₹{mrp}</AppTextBold>
        </View>
      </View>
    </Pressable>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  productName: {
    flexWrap: 'wrap',
    fontFamily: 'Metropolis-SemiBold',
    fontSize: 12,
    color: colors.darkGrayColor,
    padding: 4,
  },
  price: {
    fontSize: 14,
    backgroundColor: colors.gold,
    padding: 4,
    maxWidth: '60%',
  },
  discountPrice: {
    fontSize: 12,
    textDecorationLine: 'line-through',
    color: colors.lightGrayColor,
    fontFamily: 'Metropolis-Medium',
  },
});

import {
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Linking,
  Modal,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import AppTextBold from '../text/appTextbold';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../../constants/colors';
import Scale from '../../assets/icons/scale.js';
import CheckDelivery from './checkDelivery.jsx';
import Saree from './category/saree.jsx';
import Suit from './category/suit.jsx';
import CustomerReview from './customerReview.jsx';
import CarouselImages from './carousel.jsx';
import {useDispatch, useSelector} from 'react-redux';
import {
  setSelectedSize,
  setVariantData,
  setVariantId,
} from '../../utils/redux/slice/ProductSlice.js';

const ProductInfo = () => {
  const productData = useSelector(state => state.product.productData);
  const variantData = useSelector(state => state.product.variantData);
  const selectedSize = useSelector(state => state.product.selectedSize);
  const variantId = useSelector(state => state.product.selectedVariantId);
  const dispatch = useDispatch();

  const discountPrice =
    productData?.mrp ||
    Math.floor(productData?.price + 0.5 * productData?.price);

  const handleSelectSize = size => {
    dispatch(setSelectedSize({selectedSize: size}));
  };

  const handleSelectVariant = (variant) => {
    dispatch(setVariantId({variantId: variant._id}))
    dispatch(setVariantData({data: variant}));
  };

  console.log(variantData);

  useEffect(() => {
    if (!variantId) {
      dispatch(setVariantId({variantId: productData?.variants[0]?._id}));
      dispatch(setVariantData({data: productData?.variants[0]}));
    } else {
      const targetedVariant = productData?.variants?.find(
        variant => variant._id === variantId,
      );
      dispatch(setVariantData({data: targetedVariant}))
    }

  }, []);

  return productData ? (
    <ScrollView
      style={{backgroundColor: colors.white}}
      showsVerticalScrollIndicator={false}>
      <View style={{flex: 1, gap: 30}}>
        <CarouselImages
          product={variantData?.images || productData?.images}
        />

        <View style={{padding: 12, gap: 24}}>
          <View>
            <Text
              style={{
                fontSize: 18,
                color: colors.grayColor,
                fontFamily: 'Metropolis-Medium',
              }}>
              {productData.productName}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignContent: 'center',
                marginVertical: 6,
              }}>
              <View style={{flexDirection: 'row', gap: 8}}>
                <AppTextBold style={styles.price}>
                  ₹{productData.price}
                </AppTextBold>
                <AppTextBold style={styles.discountPrice}>
                  ₹{discountPrice}
                </AppTextBold>
              </View>
              <Pressable
                onPress={() => Linking.openURL('https://wa.me/+918218174830')}
                style={{
                  flexDirection: 'row',
                  gap: 12,
                  backgroundColor: colors.white,
                  borderRadius: 12,
                  paddingHorizontal: 12,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: colors.green,
                }}>
                <FontAwesome name="whatsapp" size={25} color={colors.green} />
                <AppTextBold style={{color: colors.green, fontSize: 14}}>
                  Chat with us
                </AppTextBold>
              </Pressable>
            </View>
          </View>

          {productData.variants?.length > 0 && (
            <View>
              <AppTextBold style={{padding: 6, fontSize: 14}}>
                Colour options
              </AppTextBold>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {productData?.variants?.map((value, index) => {
                  const isSelected = value._id === variantId;

                  return (
                    <Pressable
                      onPress={() => handleSelectVariant(value) }
                      key={index}
                      style={{
                        padding: 6,
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 6,
                      }}>
                      <Image
                        source={{uri: value.images[0]}}
                        style={{
                          width: 100,
                          aspectRatio: 3 / 4,
                          objectFit: 'cover',
                          borderRadius: 18,
                          borderWidth: isSelected ? 2 : 0,
                          borderColor: colors.darkBlue,
                        }}
                      />
                      <AppTextBold>{value.color}</AppTextBold>
                    </Pressable>
                  );
                })}
              </ScrollView>
            </View>
          )}

          {variantData?.sizes?.length > 0 && (
            <View style={{paddingVertical: 24}}>
              <View
                style={{
                  flexDirection: 'row',
                  gap: 12,
                  alignItems: 'center',
                }}>
                <Scale size={30} color={colors.darkGrayColor} />
                <AppTextBold style={{color: colors.brightOrange, fontSize: 16}}>
                  Available sizes
                </AppTextBold>
              </View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {variantData?.sizes?.map((value, index) => {
                  const selected = value.size === selectedSize;
                  return (
                    <Pressable
                      onPress={() => handleSelectSize(value.size)}
                      key={index}
                      style={{
                        borderWidth: 1,
                        borderRadius: 18,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderColor: selected
                          ? colors.brightOrange
                          : colors.lightGrayColor,
                        backgroundColor: selected
                          ? colors.brightOrange
                          : colors.white,
                        height: 50,
                        width: 50,
                        marginHorizontal: 6,
                      }}>
                      <Text
                        style={{
                          color: selected ? colors.white : colors.darkGrayColor,
                          fontSize: 14,
                          fontWeight: '600',
                          textAlign: 'center',
                        }}>
                        {value.size}
                      </Text>
                    </Pressable>
                  );
                })}
              </ScrollView>
            </View>
          )}
        </View>

        <CheckDelivery />

        {productData?.category === 'sarees' && (
          <Saree productData={productData} />
        )}
        {productData?.category === 'suits' && (
          <Suit productData={productData} />
        )}
        {productData?.category === 'cordset' && (
          <Suit productData={productData} />
        )}
        <CustomerReview rating={productData?.rating} />
      </View>
    </ScrollView>
  ) : (
    <></>
  );
};

export default ProductInfo;

const styles = StyleSheet.create({
  addToBagButton: {
    flexDirection: 'row',
    gap: 12,
    width: '45%',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 6,
    borderWidth: 1,
    borderColor: colors.lightGrayColor,
    backgroundColor: colors.white,
    fontWeight: 'ultralight',
  },
  shopNowButton: {
    flexDirection: 'row',
    gap: 12,
    width: '50%',
    backgroundColor: colors.darkBlue,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 6,
    borderWidth: 1,
    borderColor: colors.darkBlue,
  },
  price: {
    fontSize: 24,
    backgroundColor: colors.gold,
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 4,
  },
  discountPrice: {
    fontSize: 18,
    textDecorationLine: 'line-through',
    color: colors.grayColor,
    fontFamily: 'Metropolis-Regular',
    textAlignVertical: 'center',
  },
});

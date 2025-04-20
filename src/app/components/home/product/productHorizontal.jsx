import {Image, StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '@/src/app/constants/colors';
import AppTextBold from '../../text/appTextbold';
import {Bag, ShoppingBag} from '@/src/app/utils/icons';
import Truck from '@/src/app/assets/icons/fast-delivery';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Dimensions} from 'react-native';
import { Pressable } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

const ProductHorizontal = ({product}) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const mrp = product.mrp || Math.floor(product.price * 1.5);
  return (
    <View style={styles.favContainer}>
      <View>
        <Image
          source={{uri: product?.image}}
          style={{
            width: width * 0.5,
            aspectRatio: 3/4,
            objectFit: 'cover',
            borderRadius: 18,
            backgroundColor: colors.white,
            elevation: 2,
          }}
        />
        <Pressable 
        onPress={() => setIsFavourite(prev => !prev)}
        android_ripple={{color: colors.lightPink, radius: 8}}
        style={styles.icon}>
          <Ionicons name="heart" size={25} color={isFavourite ? colors.pink : 'transparent'} />
          <Ionicons name="heart-outline" size={25} color={colors.white} style={{
            position: 'absolute'
          }}/>
        </Pressable>
      </View>

      <View style={{flex: 1, paddingHorizontal: 12, gap: 6}}>
        <Text numberOfLines={3} style={styles.productName}>
          {product.productName}
        </Text>
        <View style={{flexDirection: 'row', gap: 6, alignItems: 'center'}}>
          <AppTextBold style={styles.price}>₹{product.price}</AppTextBold>
          <AppTextBold style={styles.discountPrice}>₹{mrp}</AppTextBold>
        </View>

        {product.rating && (
          <View
            style={{
              paddingHorizontal: 6,
              gap: 6,
              borderRadius: 4,
              flexDirection: 'row',
              backgroundColor: colors.darkGreen,
              alignSelf: 'flex-start',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 6,
            }}>
            <AppTextBold style={{color: colors.white, fontSize: 14}}>
              {product.rating}
            </AppTextBold>
            <AntDesign name="star" color={colors.white} size={10} />
          </View>
        )}

        <View
          style={{
            width: '100%',
            borderRadius: 6,
            borderWidth: 1,
            borderColor: colors.pink,
            paddingVertical: 6,
            backgroundColor: colors.lightPink,
            flexDirection: 'row',
            gap: 6,
            alignItems: 'center',
            alignSelf: 'flex-start',
            justifyContent: 'center',
            elevation: 2,
          }}>
          <Bag color={colors.pink} size={20}/>
          <AppTextBold style={{color: colors.pink, fontSize: 12}}>
            Add to Bag
          </AppTextBold>
        </View>

        <View
          style={{
            flexDirection: 'row',
            gap: 8,
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <Truck size={25} color={colors.pink} strokeWidth={1.2} />
          <Text
            style={{
              color: colors.pink,
              fontFamily: 'PassionOne-Regular',
              fontSize: 16
            }}>
            FREE DELIVERY
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProductHorizontal;

const styles = StyleSheet.create({
  favContainer: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 6,
  },
  productName: {
    flexWrap: 'wrap',
    fontFamily: 'Metropolis-SemiBold',
    fontSize: 14,
    color: colors.darkGrayColor,
  },
  icon: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'rgba(255, 255, 255, 0)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
    borderRadius: 100,
  },
  price: {
    fontSize: 20,
    backgroundColor: colors.gold,
    padding: 4,
    maxWidth: '60%',
  },
  discountPrice: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    color: colors.lightGrayColor,
    fontFamily: 'Metropolis-Medium',
  },
});

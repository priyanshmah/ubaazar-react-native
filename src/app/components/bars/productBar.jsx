import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ubaazar from '../text/ubaazar';
import colors from '../../constants/colors';
import {ShoppingBag} from '../../utils/icons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import { Share } from 'react-native';

const ProductBar = ({product}) => {
  const navigation = useNavigation();

  // const shareProduct = async (product) => {
  //   try {
  //     const result = await Share.share({
  //       message: `Check out this product: ${product.productName} for ₹${product.price}!\nBuy now: ${product.url}`,
  //     });
  
  //     if (result.action === Share.sharedAction) {
  //       if (result.activityType) {
  //         console.log('Shared via:', result.activityType);
  //       } else {
  //         console.log('Shared successfully');
  //       }
  //     } else if (result.action === Share.dismissedAction) {
  //       console.log('Share dismissed');
  //     }
  //   } catch (error) {
  //     console.error('Error sharing product:', error);
  //   }
  // };
  
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.white,
      }}>
      <View style={{flexDirection: 'row', gap: 12}}>
        <Pressable onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={25} color={colors.darkGrayColor} />
        </Pressable>
        <Ubaazar size={25} />
      </View>
      <View style={{flexDirection: 'row', gap: 12}}>
        {/* <Pressable onPress={() => shareProduct(product)}>
          <Ionicons
            name="share-social-outline"
            size={25}
            color={colors.darkBlue}
          />
        </Pressable> */}
        <Pressable onPress={() => navigation.navigate('FavouriteScreen')}>
          <Ionicons 
          name="heart" 
          size={25} 
          color={colors.darkPink}
         />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('BagScreen')}>
          <ShoppingBag 
          size={25} 
          color={colors.darkBlue} 
          strokeWidth={1.5} 
          />
        </Pressable>
      </View>
    </View>
  );
};

export default ProductBar;

const styles = StyleSheet.create({
  elevatedContainer: {
    borderRadius: 12,
    elevation: 4,
    backgroundColor: colors.white,
    padding: 6,
    shadowColor: colors.darkBlue,
  },
});

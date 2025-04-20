import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
const {width} = Dimensions.get('screen');
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../constants/colors';
import AppTextBold from '../text/appTextbold';
import {useSelector} from 'react-redux';
import ProductData from './productData';


const ProductList = () => {
  const productList = useSelector(state => state.bag.products);
  

  return (
    <View style={{backgroundColor: colors.white, margin: 8, borderRadius: 16}}>
      <View
        style={{
          padding: 12,
          flexDirection: 'row',
          borderBottomWidth: 1,
          borderBottomColor: colors.searchBarColor,
        }}>
        <View
          style={{
            backgroundColor: '',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            alignItems: 'center',
          }}>
          <AppTextBold style={styles.heading}>Product</AppTextBold>
          <AppTextBold style={styles.heading}>Price</AppTextBold>
        </View>
      </View>

      <View style={{padding: 12, gap: 18, paddingBottom: 28}}>
        {productList?.map((value, index) => {
          return <ProductData product={value} key={index} />;
        })}
      </View>

      <View
        style={{
          padding: 12,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTopWidth: 1,
          borderTopColor: colors.lightGrayColor,
          borderStyle: 'dashed',
        }}>
        <AppTextBold style={{padding: 1}}>Missed Something ?</AppTextBold>
        <Pressable>
          <AppTextBold style={{color: colors.brightOrange}}>
            + Add items
          </AppTextBold>
        </Pressable>
      </View>
    </View>
  );
};

export default ProductList;



const styles = StyleSheet.create({
  heading: {
    fontSize: 14,
    fontFamily: 'Metropolis-Medium',
  },
  
});

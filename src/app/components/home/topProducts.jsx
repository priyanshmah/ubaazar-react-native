import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import CapitalHeading from '../ui/CapitalHeading';
import ProductVertical from './product/productVertical';
import { useSelector } from 'react-redux';

const TopProducts = () => {

  const trendingProducts = useSelector(state => state.feed.trendingProducts);
  
  return (
    <View>
       <CapitalHeading text={'TRENDING NOW'}/>
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={
        { paddingHorizontal: 6 }
      }>
        {
          trendingProducts?.map((product, index) => {
            return (
              <ProductVertical key={index} productData={product}/>
            )
          })
        }

    </ScrollView>
    </View>
  );
};

export default TopProducts;

const styles = StyleSheet.create({
 
});

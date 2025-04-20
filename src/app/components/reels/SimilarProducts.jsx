import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import ProductCard from './ProductCard';

const SimilarProducts = ({products}) => {
  return (
    <View style={{position: 'relative', width: '80%'}}>
      <ScrollView
        scrollEventThrottle={16}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={[
          {
            width: '100%',
          },
        ]}>
        <View style={[{flexDirection: 'row'}]}>
          {products.map((product, index) => {
            return (
              <View key={index} style={{flexDirection: 'row', gap: 6}}>
                {product?.variants?.map((variant, vIndex) => {
                  return (
                    <ProductCard
                      key={vIndex}
                      image={variant.images[0]}
                      productName={product.productName}
                      price={product.price}
                      mrp={product.mrp || Math.floor(product.price * 1.5)}
                      productId={product._id}
                      variantId={variant._id}
                    />
                  );
                })}
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default SimilarProducts;

const styles = StyleSheet.create({});

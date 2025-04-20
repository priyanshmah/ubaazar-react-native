import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppTextBold from '../text/appTextbold';
import colors from '../../constants/colors';

const ProductSummary = ({products}) => {

  
  return (
    <View style={{gap: 12, paddingVertical: 12}}>
      {products?.map((value, index) => {

        console.log("product is: ", value);
        
              
        const discountPrice =
          value.product.mrp || Math.round(value.product.price * 1.5);
        return (
          <View
            key={index}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                width: '80%',
                flexDirection: 'row',
                gap: 12,
                overflow: 'hidden',
                alignItems: 'center',
              }}>
              <Image
                src={value.product.image}
                style={{height: 120, width: 100, borderRadius: 12}}
              />
              <View style={{flex: 1, gap: 12}}>
                <View>
                  <Text
                    numberOfLines={2}
                    style={{
                      flexWrap: 'wrap',
                      color: colors.darkGrayColor,
                    }}>
                    {value.product.productName}
                  </Text>
                  <Text style={{color: colors.silver, fontSize: 12}}>
                    {value.size || 'Free size'}
                  </Text>
                </View>

                <AppTextBold style={styles.quantity}>
                  Qty: {value.quantity}
                </AppTextBold>
              </View>
            </View>

            <View style={{width: '20%'}}>
              <AppTextBold style={{textAlign: 'center'}}>
                ₹{value.product.price}
              </AppTextBold>
              <AppTextBold style={styles.discountPrice}>
                ₹{discountPrice}
              </AppTextBold>
            </View>
          </View>
        );
      })}
    </View>
  );
};




export default ProductSummary;

const styles = StyleSheet.create({
  discountPrice: {
    color: colors.silver,
    textDecorationLine: 'line-through',
    fontFamily: 'Metropolis-Medium',
    textAlign: 'center',
  },
  quantity: {
    backgroundColor: colors.lightPink,
    borderRadius: 4,
    paddingHorizontal: 12,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderWidth: 1,
    borderColor: colors.pink,
    color: colors.pink,
    alignSelf: 'flex-start',
  },
});

import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GradientBar from '@/src/app/components/bars/gradientBar';
import colors from '@/src/app/constants/colors';
import TrackingComponent from '@/src/app/components/bag/order-tracking/TrackingComponent';
import BillSummary from '@/src/app/components/bag/billSummary';
import AppTextBold from '@/src/app/components/text/appTextbold';
import AddressDetails from '@/src/app/components/bag/addressDetails';
import ProductSummary from '@/src/app/components/bag/productSummary';
import ReviewOffer from '@/src/app/components/bag/order-tracking/ReviewOffer';
import FashionStar from '@/src/app/components/home/banner/FashionStar';

const OrderTracking = () => {
  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <GradientBar name={'Order details'} />
      <ScrollView>
      <TrackingComponent />
      <View style={{padding: 6, gap: 12}}>
        {/* <ReviewOffer /> */}
        <FashionStar />
        <AppTextBold style={styles.capital}>ORDERED ITEMS</AppTextBold>
        <ProductSummary />
        <View
          style={{
            borderRadius: 24,
            elevation: 2,
            backgroundColor: colors.white,
          }}>
          <BillSummary totalMRP={2175 + 2399} totalPrice={1450 + 1599} />
        </View>
        <AppTextBold style={styles.capital}>DELIVERY ADDRESS</AppTextBold>

        {/* <AddressDetails /> */}
      </View>
      </ScrollView>
    </View>
  );
};

export default OrderTracking;

const styles = StyleSheet.create({
  capital: {
    color: colors.silver,
    fontSize: 14,
    letterSpacing: 2,
    textAlign: 'center',
  },
});

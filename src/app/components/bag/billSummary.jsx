import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../constants/colors';
import AppTextBold from '../text/appTextbold';
import {Cash, ShoppingBag} from '../../utils/icons';
import {Discount} from '../../assets/icons/discount';
import Ionicons from 'react-native-vector-icons/Ionicons';


const BillSummary = ({mrp, subTotal, couponDiscount, paymentMode}) => {
  return (
    <View
      style={{
        margin: 8,
        backgroundColor: colors.white,
        borderRadius: 16,
      }}>
      <AppTextBold style={{fontSize: 18, padding: 12}}>
        Bill Summary
      </AppTextBold>

      <View style={{gap: 4, padding: 12}}>
        <View style={styles.row}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
            <View style={styles.icon}>
              <ShoppingBag
                color={colors.grayColor}
                size={20}
                strokeWidth={1.6}
              />
            </View>
            <Text style={styles.text}>Total MRP</Text>
          </View>
          <Text style={styles.text}>₹{mrp}</Text>
        </View>

        <View style={styles.row}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
            <View style={styles.icon}>
              <Discount color={colors.grayColor} size={20} strokeWidth={1.6} />
            </View>
            <Text style={styles.text}>Discount on MRP</Text>
          </View>
          <Text style={[styles.text, {color: colors.green}]}>
            - ₹{mrp - subTotal}
          </Text>
        </View>

        <View style={styles.row}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
            <View style={styles.icon}>
              <Ionicons
                name="ticket-outline"
                color={colors.grayColor}
                size={20}
              />
            </View>
            <Text style={styles.text}>Coupon Discount</Text>
          </View>
          <Text style={[styles.text, {color: colors.green}]}>
            - ₹{couponDiscount}
          </Text>
        </View>

        <View style={styles.row}>
          <View
            style={{flexDirection: 'row', alignItems: 'flex-start', gap: 8}}>
            <View style={[styles.icon, {padding: 6.5}]}>
              <Cash color={colors.grayColor} size={15} />
            </View>
            <View style={{paddingVertical: 4}}>
              <Text style={styles.text}>COD Charges</Text>
              <Text style={{fontSize: 12, color: colors.grayColor}}>
                Applicable only on COD orders
              </Text>
            </View>
          </View>
          {paymentMode === 'COD' ? (
            <Text style={styles.text}>₹79</Text>
          ) : (
            <View style={{flexDirection: 'row', gap: 4, alignItems: 'center'}}>
              <Text style={styles.discountText}>₹79</Text>
              <Text style={styles.text}>₹0</Text>
            </View>
          )}
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTopWidth: 1,
          borderColor: colors.silver,
          borderStyle: 'dashed',
          padding: 12,
        }}>
        <Text style={[styles.text, {padding: 1}]}>Grand total</Text>
        <AppTextBold style={styles.total}>
          ₹
          {(subTotal || 0) +
            (paymentMode === 'COD' ? 79 : 0) -
            (couponDiscount || 0)}
        </AppTextBold>
      </View>
    </View>
  );
};

export default BillSummary;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Metropolis-Medium',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  total: {
    padding: 4,
    fontSize: 18,
  },
  icon: {
    padding: 4,
    borderRadius: 100,
    backgroundColor: colors.searchBarColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  discountText: {
    fontSize: 12,
    textDecorationLine: 'line-through',
    color: colors.grayColor,
    fontFamily: 'Metropolis-Medium',
  },
});

import {
  ActivityIndicator,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import AppTextBold from '../text/appTextbold';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import colors from '../../constants/colors';
import axiosInstance from '../../utils/axios/axiosClient';
import {useDispatch, useSelector} from 'react-redux';
import {setPaymentMode} from '../../utils/redux/slice/BagSlice';
import { useRealm } from '../../utils/realm';
import axios from 'axios';

const OrderBottomBar = () => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const paymentMode = useSelector(state => state.bag?.paymentMode);
  const paymentDetails = useSelector(state => state.bag?.priceDetails);
  const products = useSelector(state => state.bag?.products);
  const addressId = useSelector(state => state.bag?.selectedAddress);
  const couponCode = useSelector(state => state.bag?.appliedCoupon);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const realm = useRealm();
  const user = realm.objects('UserData')?.at(0);
  const cachedBag = realm.objectForPrimaryKey('Bag', user?.id || '');


  const [yoffset, setYoffset] = useState(0);
  const [xoffset, setXoffset] = useState(0);

  const handleLayout = event => {
    const {height, width} = event.nativeEvent.layout;
    setYoffset(height);
    setXoffset(width);
  };

  const toggleVisible = () => {
    setVisible(prev => !prev);
  };

  const handleCheckout = async () => {
    if (!addressId) return;

    setLoading(true);
    try {
      const response = await axiosInstance.post(
        '/checkout/order',
        JSON.stringify({
          products,
          addressId,
          paymentMode,
          couponCode,
        }),
      );

      if (response.data?.success && response.data?.url) 
        navigation.navigate('PaymentScreen', {
          uri: response.data?.url,
        });
      
      else if (response.data?.success && response.data?.order) {
        // empty the bag once order is placed
        realm.write(() => {
          if (cachedBag) {
            cachedBag.products = []
          }
        })
        // navigate user to order confirmation screen
        navigation.replace('OrderConfirmationScreen', {
          order: response.data?.order || '',
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.bottomBar}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'space-around',
          width: '100%',
        }}>
        <View>
          <AppTextBold style={{color: colors.grayColor}}>
            Total amount
          </AppTextBold>
          <AppTextBold style={{fontSize: 18, color: colors.darkGrayColor}}>
            ₹
            {(paymentDetails?.subTotal || 0) +
              (paymentDetails?.codCharges || 0) -
              (paymentDetails?.couponDiscount || 0)}
          </AppTextBold>
        </View>

        <View style={{flexDirection: 'row', gap: 12}}>
          <View style={{gap: 2}}>
            <AppTextBold style={{color: colors.grayColor}}>
              Payment options
            </AppTextBold>

            <Pressable
              onPress={toggleVisible}
              onLayout={handleLayout}
              style={{
                flexDirection: 'row',
                gap: 6,
                alignItems: 'center',
                borderRadius: 8,
                borderWidth: 1,
                borderColor: colors.brightOrange,
                paddingHorizontal: 12,
                paddingVertical: 4,
                backgroundColor: 'rgb(255, 241, 242)',
                position: 'relative',
              }}>
              {visible && (
                <Pressable
                  onBlur={toggleVisible}
                  style={{
                    gap: 6,
                    borderRadius: 8,
                    // borderWidth: 1,
                    borderColor: colors.searchBarColor,
                    backgroundColor: colors.white,
                    width: xoffset || 200,
                    position: 'absolute',
                    bottom: yoffset,
                    padding: 12,
                    elevation: 4,
                  }}>
                  <Text
                    onPress={() => {
                      dispatch(setPaymentMode({paymentMode: 'ONLINE'}));
                      toggleVisible();
                    }}
                    style={[
                      styles.option,
                      paymentMode === 'ONLINE' && {
                        color: colors.brightOrange,
                        backgroundColor: 'rgb(255, 241, 242)',
                      },
                    ]}>
                    Online Payment
                  </Text>

                  <Text
                    onPress={() => {
                      dispatch(setPaymentMode({paymentMode: 'COD'}));
                      toggleVisible();
                    }}
                    style={[
                      styles.option,
                      paymentMode === 'COD' && {
                        color: colors.brightOrange,
                        backgroundColor: 'rgb(255, 241, 242)',
                      },
                    ]}>
                    <Text>Cash on Delivery</Text>
                  </Text>
                </Pressable>
              )}
              <Text
                style={{
                  color: colors.brightOrange,
                  fontSize: 16,
                  paddingHorizontal: 12,
                  fontFamily: 'Metropolis-SemiBold',
                }}>
                {paymentMode === 'ONLINE'
                  ? 'Online Payment'
                  : 'Cash on Delivery'}
              </Text>
              <Feather
                name={visible ? 'chevron-up' : 'chevron-down'}
                size={20}
                color={colors.brightOrange}
              />
            </Pressable>
          </View>
        </View>
      </View>
      <Pressable
        onPress={handleCheckout}
        style={[
          styles.btn,
          {
            backgroundColor: addressId ? colors.darkBlue : colors.silver,
          },
        ]}>
        {loading ? (
          <ActivityIndicator size={'small'} color={colors.white} />
        ) : (
          <AppTextBold
            style={{
              fontSize: 18,
              textAlign: 'center',
              textAlignVertical: 'center',
              color: colors.white,
            }}>
            {paymentMode === 'ONLINE' ? 'Pay Online' : 'Place Order'}
          </AppTextBold>
        )}
      </Pressable>
    </View>
  );
};

export default OrderBottomBar;

const styles = StyleSheet.create({
  bottomBar: {
    // position: 'absolute',
    // bottom: 0,
    backgroundColor: colors.white,
    minHeight: 50,
    width: '100%',
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  btn: {
    borderRadius: 8,
    paddingVertical: 12,
    width: '100%',
  },
  icon: {
    backgroundColor: colors.searchBarColor,
    borderRadius: 100,
    padding: 8,
    alignSelf: 'flex-start',
  },
  option: {
    fontSize: 14,
    color: colors.grayColor,
    fontFamily: 'Metropolis-SemiBold',
    padding: 8,
    borderRadius: 8,
  },
});

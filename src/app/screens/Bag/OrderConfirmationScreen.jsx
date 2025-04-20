import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomBar from '../../components/bars/customBar';
import LottieView from 'lottie-react-native';
import Success from '../../assets/animations/success.lottie';
import Error from '../../assets/animations/fail.json';
import colors from '../../constants/colors';
import AppTextBold from '../../components/text/appTextbold';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BillSummary from '../../components/bag/billSummary';
import img from '../../assets/images/thanks/1.png';
import ProductSummary from '../../components/bag/productSummary';
import AddressDetails from '../../components/bag/addressDetails';
import axiosInstance from '../../utils/axios/axiosClient';
import { useNavigation } from '@react-navigation/native';

function getEstimatedDeliveryDate(timestamp) {
  const date = new Date(timestamp);
  date.setDate(date.getDate() + 7);

  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const dayOfWeek = dayNames[date.getDay()];

  return `${dayOfWeek}, ${month} ${day}`;
}

const OrderConfirmationScreen = ({route}) => {
  const success = true;
  
  const {order} = route.params;
  console.log("orders dat ais: ", order);
  const [orderNumber, setOrderNumber] = useState('');

  const navigation = useNavigation();
  

  const [paymentDetails, setPaymentDetails] = useState({});
  const [paymentMode, setPaymentMode] = useState('');
  const [address, setAddress] = useState({});
  const [orderedItems, setOrderedItems] = useState([]);
  const [estimatedDelivery, setEstimatedDelivery] = useState('');

 

  useEffect(() => {
    if (order) {
      setOrderNumber(order?.orderNumber)
      setPaymentDetails(order?.priceDetails);
      setPaymentMode(order?.paymentInfo?.method)
      setAddress(order?.address)
      setOrderedItems(order?.products)
      setEstimatedDelivery(getEstimatedDeliveryDate(order?.createdAt))
    }
  }, []);

  console.log('Payment details is: ', paymentMode);

  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <CustomBar name={'Order Details'} />
      <ScrollView style={{padding: 18}}>
        <View style={{gap: 18, paddingBottom: 50}}>
          <View style={{alignItems: 'center', paddingBottom: 28}}>
            <Image
              source={img}
              style={{height: 150, width: 200, objectFit: 'cover'}}
            />
            <AppTextBold
              style={{
                color: colors.pink,
                fontSize: 18,
              }}>
              Thank you for Shopping!!!
            </AppTextBold>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              gap: 12,
            }}>
            <LottieView
              style={{height: 50, width: 50}}
              loop={false}
              source={success ? Success : Error}
              autoPlay
            />
            <AppTextBold
              style={{
                color: success ? colors.green : colors.red,
                fontSize: 18,
              }}>
              {success
                ? 'Order placed successfully!!!'
                : 'Failed to place order'}
            </AppTextBold>
          </View>

          <View style={{gap: 18}}>
            <View>
              <AppTextBold style={styles.h1}>Order Details</AppTextBold>
              <AppTextBold style={styles.light}># {orderNumber}</AppTextBold>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 12,
                backgroundColor: colors.lightPink,
                padding: 8,
                borderRadius: 12,
              }}>
              <Ionicons
                name="gift-outline"
                color={colors.brightOrange}
                size={25}
                strokeWidth={2}
              />
              <AppTextBold style={styles.delivery}>
                Estimated Delivery : {estimatedDelivery}
              </AppTextBold>
            </View>

            <AppTextBold style={styles.capital}>DELIVERY ADDRESS</AppTextBold>

            <AddressDetails address={address} />

            <View>
              <AppTextBold style={styles.capital}>ORDERED ITEMS</AppTextBold>
              <ProductSummary products={orderedItems} />
            </View>
          </View>

          <View
            style={{
              borderRadius: 24,
              backgroundColor: 'white',
              elevation: 1,
            }}>
            <BillSummary
              mrp={Math.floor(paymentDetails.subTotal * 1.5)}
              subTotal={paymentDetails.subTotal}
              couponDiscount={paymentDetails.discount}
              paymentMode={paymentMode}
            />
          </View>

          <Pressable 
          onPress={() => navigation.goBack()}
          style={styles.btn}>
            <AppTextBold style={styles.btnText}>
              Missed something ? Shop more
            </AppTextBold>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderConfirmationScreen;

const styles = StyleSheet.create({
  h1: {
    fontSize: 20,
    textAlignVertical: 'bottom',
    padding: 1,
  },
  light: {
    fontSize: 14,
    color: colors.silver,
    padding: 1,
    fontFamily: 'Metropolis-Medium',
  },
  delivery: {
    color: colors.brightOrange,
    fontSize: 14,
    fontFamily: 'Metropolis-SemiBold',
  },

  capital: {
    color: colors.silver,
    fontSize: 14,
    letterSpacing: 2,
    padding: 8,
    textAlign: 'center',
  },

  btnText: {
    fontSize: 14,
    color: colors.white,
    textAlign: 'center',
  },
  btn: {
    padding: 12,
    backgroundColor: colors.darkBlue,
    width: '100%',
    borderRadius: 12,
  },
  line: {
    height: 1,
    width: '50%',
    backgroundColor: colors.silver,
    borderRadius: 12,
    opacity: 0.5,
  },
});

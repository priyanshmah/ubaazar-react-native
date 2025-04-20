import {
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import colors from '@/src/app/constants/colors';
import AppTextBold from '@/src/app/components/text/appTextbold';
import AppText from '@/src/app/components/text/appText';
import ProductSummary from '@/src/app/components/bag/productSummary';
import GradientBar from '@/src/app/components/bars/gradientBar';
import {useNavigation} from '@react-navigation/native';
import getOrders from '@/src/app/hooks/getOrders';
import Orders from '@/src/app/assets/images/illustrations/orders.jsx'

const OrdersScreen = () => {
  const [orderTab, setOrderTab] = useState('all');
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const navigation = useNavigation();

  const fetchOrders = async () => {
    const response = await getOrders();
    if (response) {
      setOrders(response);
    }
  };
  useEffect(() => {
    fetchOrders();
  }, []);



  useEffect(() => {
    if (orderTab === 'all') {
      setFilteredOrders(orders);
    } else {
      setFilteredOrders(
        orders.filter(order => order.status.toLowerCase() === orderTab),
      );
    }
  }, [orderTab, orders]);

  return (
    <View
      style={{
        flex: 1,
        gap: 24,
        backgroundColor: colors.white,
        paddingBottom: 100,
      }}>
      <GradientBar name={'My Orders'} />
      <ScrollView>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{alignSelf: 'flex-start', padding: 1, flexGrow: 0}}>
          <Pressable onPress={() => setOrderTab('all')}>
            <AppTextBold
              style={orderTab === 'all' ? styles.active : styles.inactive}>
              All orders
            </AppTextBold>
            {orderTab === 'all' && <View style={styles.bottomBar} />}
          </Pressable>
          <Pressable onPress={() => setOrderTab('confirmed')}>
            <AppTextBold
              style={
                orderTab === 'confirmed' ? styles.active : styles.inactive
              }>
              Confirmed
            </AppTextBold>
            {orderTab === 'confirmed' && <View style={styles.bottomBar} />}
          </Pressable>
          <Pressable onPress={() => setOrderTab('pending')}>
            <AppTextBold
              style={orderTab === 'pending' ? styles.active : styles.inactive}>
              Pending
            </AppTextBold>
            {orderTab === 'pending' && <View style={styles.bottomBar} />}
          </Pressable>
          <Pressable onPress={() => setOrderTab('shipped')}>
            <AppTextBold
              style={orderTab === 'shipped' ? styles.active : styles.inactive}>
              Shipped
            </AppTextBold>
            {orderTab === 'shipped' && <View style={styles.bottomBar} />}
          </Pressable>

          <Pressable onPress={() => setOrderTab('delivered')}>
            <AppTextBold
              style={
                orderTab === 'delivered' ? styles.active : styles.inactive
              }>
              Delivered
            </AppTextBold>
            {orderTab === 'delivered' && <View style={styles.bottomBar} />}
          </Pressable>
          <Pressable onPress={() => setOrderTab('cancelled')}>
            <AppTextBold
              style={
                orderTab === 'cancelled' ? styles.active : styles.inactive
              }>
              Cancelled
            </AppTextBold>
            {orderTab === 'cancelled' && <View style={styles.bottomBar} />}
          </Pressable>
          <Pressable onPress={() => setOrderTab('returned')}>
            <AppTextBold
              style={orderTab === 'returned' ? styles.active : styles.inactive}>
              Returned
            </AppTextBold>
            {orderTab === 'returned' && <View style={styles.bottomBar} />}
          </Pressable>
        </ScrollView>

        <View
          style={{
            flex: 1,
            backgroundColor: colors.lightBackground,
            gap: 12,
          }}>
          {filteredOrders.length ? (
            filteredOrders?.map((order, index) => {
              console.log("orders is: ", order);
              
              return (
                <Pressable
                  key={index}
                  onPress={() => navigation.navigate('OrderTrackingScreen')}
                  style={{
                    padding: 12,
                    backgroundColor: colors.white,
                  }}>
                  <View style={styles.orderIdContainer}>
                    <View style={styles.orderId}>
                      <AppTextBold style={{fontSize: 16}}>Order Id</AppTextBold>
                      <AppText style={styles.light}>
                        #{order?.orderNumber}
                      </AppText>
                    </View>
                    <AppTextBold
                      style={
                        order?.status === 'DELIVERED'
                          ? styles.delivered
                          : order?.status === 'CANCELLED'
                          ? styles.cancelled
                          : styles.shipped
                      }>
                      {order?.status}
                    </AppTextBold>
                  </View>

                  <AppTextBold style={{color: colors.brightOrange, padding: 1}}>
                    Order placed on {formatTimestamp(order?.createdAt)}
                  </AppTextBold>

                  <ProductSummary products={order?.products} />
                </Pressable>
              );
            })
          ) : (
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                paddingVertical: 98,
                backgroundColor: colors.white,
                justifyContent: 'center',
              }}>
              <Orders size={200} />
              <View style={{gap: 6, alignItems: 'center', padding: 24}}>


              <AppTextBold
                style={{fontSize: 20, fontFamily: 'Metropolis-Bold'}}>
                No orders found !
              </AppTextBold>
              <AppText
                style={{
                  fontFamily: 'Metropolis-Medium',
                  fontSize: 14,
                  color: colors.lightGrayColor,
                  textAlign: 'center'
                }}>
                Your order history is on a diet. It currently have zero items. Let's feed it!
              </AppText>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

function formatTimestamp(timestampString) {
  const date = new Date(timestampString);

  if (isNaN(date)) {
    return '';
  }

  const options = {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  };

  return date.toLocaleDateString(undefined, options);
}

export default OrdersScreen;

const styles = StyleSheet.create({
  active: {
    fontSize: 14,
    paddingHorizontal: 12,
    paddingVertical: 6,
    color: colors.brightOrange,
  },
  inactive: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    fontSize: 14,
    color: colors.lightGrayColor,
  },
  bottomBar: {
    height: 3,
    width: '80%',
    backgroundColor: colors.brightOrange,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignSelf: 'center',
  },
  light: {
    color: colors.silver,
    fontFamily: 'Metropolis-Medium',
    fontSize: 12,
  },
  delivered: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: colors.lightGreen,
    color: colors.green,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.green,
  },
  shipped: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: colors.yellowBackground,
    color: colors.yellowColor,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.yellowColor,
  },
  cancelled: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: colors.lightPink,
    color: colors.pink,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.pink,
  },
  capital: {
    color: colors.silver,
    fontSize: 14,
    letterSpacing: 2,
    textAlign: 'center',
  },
  total: {
    padding: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 6,
  },
  orderId: {
    padding: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orderIdContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
});

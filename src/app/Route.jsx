import {StyleSheet, View} from 'react-native';
import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/Explore/HomeScreen';
import Reels from './screens/Watch&Buy/ReelsScreen';
import ProfileScreen from './screens/Profile/ProfileScreen';
import NewArrivalScreen from './screens/NewArrival/NewArrivalScreen';
import AntDesign from 'react-native-vector-icons/AntDesign.js';

import colors from './constants/colors';
import bagScreen from './screens/Bag/BagScreen';
import ProductInfo from './components/product/productInfo';
import OrdersScreen from './screens/Profile/Orders/OrdersScreen';
import FavouriteScreen from './screens/Profile/Favourites/FavouriteScreen';
import ExchangeScreen from './screens/Profile/Exchange/ExchangeScreen';
import AddressScreen from './screens/Profile/Address/AddressScreen';
import NotifyScreen from './screens/Profile/Notifications/NotifyScreen';
import CouponScreen from './screens/Profile/Coupons/CouponScreen';
import ComplaintScreen from './screens/Profile/Complaint/ComplaintScreen';
import AboutScreen from './screens/Profile/About/AboutScreen';
import TermsScreen from './screens/Profile/Terms/TermsScreen';
import PrivacyScreen from './screens/Profile/Privacy/PrivacyScreen';
import SettingScreen from './screens/Profile/Setting/SettingScreen';
import OtpVerify from './screens/OtpVerification/OtpVerify';
import PersonalDetails from './screens/OtpVerification/PersonalDetails';
import EditProfile from './screens/Profile/Edit/EditProfile';
import ProductScreen from './screens/Product/ProductScreen';
import ApplyCouponScreen from './screens/Bag/ApplyCouponScreen';
import OrderConfirmationScreen from './screens/Bag/OrderConfirmationScreen';
import House from './assets/icons/tabicons/home';
import Video from './assets/icons/tabicons/video';
import Blossom from './assets/icons/tabicons/blossom';
import Profile from './assets/icons/tabicons/profile';
import VideoInactive from './assets/icons/tabicons/video-inactive';
import {Flower, Home, ReelsIcon} from './utils/icons';
import {Pressable} from 'react-native-gesture-handler';
import OrderTracking from './screens/Profile/Orders/OrderTracking';
import LoadingScreen from './screens/loading/LoadingScreen';
import SearchScreen from './screens/Search/SearchScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import BottomBar from './components/bars/bottomBar';
import FilterScreen from './screens/Explore/FilterScreen';
import PaymentScreen from './screens/Bag/PaymentScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FilterScreen"
        component={FilterScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const WatchNBuyStack = () => {
  return (
    <Stack.Navigator initialRouteName="ReelScreen">
      <Stack.Screen
        name="ReelScreen"
        component={Reels}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const NewArrivalStack = () => {
  return (
    <Stack.Navigator initialRouteName="NewArrivalScreen">
      <Stack.Screen
        name="NewArrivalScreen"
        component={NewArrivalScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator initialRouteName="ProfileScreen">
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OrderScreen"
        component={OrdersScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FavouriteScreen"
        component={FavouriteScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ExchangeScreen"
        component={ExchangeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddressScreen"
        component={AddressScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NotificationScreen"
        component={NotifyScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CouponScreen"
        component={CouponScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ComplaintScreen"
        component={ComplaintScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TermsScreen"
        component={TermsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PrivacyScreen"
        component={PrivacyScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditScreen"
        component={EditProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OrderTrackingScreen"
        component={OrderTracking}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
    tabBar={(props) => <BottomBar {...props}/>}
    screenOptions={{ headerShown: false, tabBarStyle: { display: 'none' } }}
       >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="WatchNBuy"
        component={WatchNBuyStack}
        options={{headerShown: false, title: 'Watch & Buy'}}
      />
      <Tab.Screen
        name="NewArrival"
        component={NewArrivalStack}
        options={{headerShown: false, title: 'New arrival'}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const Route = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BagScreen"
        component={bagScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PaymentScreen"
        component={PaymentScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OtpVerificationScreen"
        component={OtpVerify}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PersonalDetailScreen"
        component={PersonalDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FavouriteScreen"
        component={FavouriteScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ApplyCouponScreen"
        component={ApplyCouponScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OrderConfirmationScreen"
        component={OrderConfirmationScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoadingScreen"
        component={LoadingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NotificationScreen"
        component={NotifyScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 3,
    width: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: colors.white,
    marginBottom: 5,
  },
  iconContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});
export default Route;

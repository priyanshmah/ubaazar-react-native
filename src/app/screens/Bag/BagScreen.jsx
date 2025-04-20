import {
  Dimensions,
  Image,
  Linking,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import colors from '../../constants/colors';
import Empty from '../../assets/images/illustrations/empty.webp';
import AppTextBold from '../../components/text/appTextbold';
import AppText from '../../components/text/appText';
import BagBar from '../../components/bars/customBar';
import CustomBar from '../../components/bars/customBar';
import AddressComp from '../../components/bag/addressComp';
import ProductList from '../../components/bag/productList';
import BillSummary from '../../components/bag/billSummary';
import getUserBag from '../../hooks/getUserBag';
import Coupon from '../../components/bag/coupon';
import OrderBottomBar from '../../components/bag/orderBottomBar';
import {Context} from '../../context/context';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  setProducts,
  setSelectedAddress,
} from '../../utils/redux/slice/BagSlice';
import {useRealm} from '../../utils/realm';
import getAddresses from '../../hooks/getAddresses';

const {width, height} = Dimensions.get('window');

const BagScreen = () => {
  const {isLoggedIn} = useContext(Context);
  const dispatch = useDispatch();
  const selectedAddress = useSelector(state => state.bag.selectedAddress);
  const paymentMode = useSelector(state => state.bag?.paymentMode);
  const paymentDetails = useSelector(state => state.bag?.priceDetails);
  const bagItems = useSelector(state => state.bag?.products);
  const realm = useRealm();
  const user = realm.objects('UserData')?.at(0);
  const cachedBag = realm.objectForPrimaryKey('Bag', user?.id || '');
  const cachedAddress = realm.objectForPrimaryKey('Address', selectedAddress);
  const userCachedAddress = realm.objects("Address")
  ?.filtered(`userId == "${user?.id || ''}"`);

  
  // useEffect(() => {
  //   const testDeepLinking = async () => {
  //     try {
  //       const url = 'ubaazar://payment-status';
  //       const canOpen = await Linking.canOpenURL(url);
  //       console.log('Can open URL:', canOpen);

  //       // Get initial URL if app was opened via deep link
  //       const initialURL = await Linking.getInitialURL();
  //       console.log('Initial URL:', initialURL);

  //       // Test URL listener
  //       Linking.addEventListener('url', event => {
  //         console.log('Received URL event:', event);
  //       });
  //     } catch (error) {
  //       console.error('Deep linking test failed:', error);
  //     }
  //   };
  //   testDeepLinking();
  // }, []);

  // const handleDeepLink = ({url}) => {
  //   // Parse the URL and handle payment response
  //   // Example URL: yourapp://payment?status=success&transaction_id=123

  //   navigation.navigate('OrderConfirmationScreen');
  // };

  const getBag = async () => {
   
    const response = await getUserBag(realm, user.id);
    if (response) {
      const allProducts = realm.objects('Product');
      const filteredProducts = allProducts.filter(product =>
        cachedBag.products?.includes(product.id),
      );
      const plainProducts = filteredProducts.map(product =>
        JSON.parse(JSON.stringify(product)),
      );      
      dispatch(setProducts({products: plainProducts}));
    }
  };

  const fetchAddresses = async() => {
   
    const addresses = await getAddresses(realm, user.id);
    const defaultAddress = addresses.find(address => address.isDefault);

    dispatch(setSelectedAddress({address: defaultAddress._id}))
  }

  useEffect(() => {
    
    if (cachedBag) {
      const allProducts = realm.objects('Product');
      const filteredProducts = allProducts.filter(product =>
        cachedBag.products?.includes(product.id),
      );
      const plainProducts = filteredProducts.map(product =>
        JSON.parse(JSON.stringify(product)),
      );      
      dispatch(setProducts({products: plainProducts}));
    } 
     else getBag();

    const defaultAddress = userCachedAddress.find(addr => addr.isDefault)
    dispatch(setSelectedAddress({address: defaultAddress?.id}))

    if (!defaultAddress) fetchAddresses();
    
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: colors.lightBackground}}>
      <CustomBar name={'Shopping Bag'} />
      {!isLoggedIn || !bagItems.length ? (
        <EmptyBag />
      ) : (
        <View style={{flex: 1}}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
              flex: 1,
              backgroundColor: colors.lightBackground,
              paddingBottom: 500,
              paddingTop: 0,
            }}>
            {cachedAddress && <AddressComp address={cachedAddress} />}
            <ProductList />
            <Coupon />
            <BillSummary
              mrp={paymentDetails.totalMrp}
              couponDiscount={paymentDetails.couponDiscount}
              subTotal={paymentDetails.subTotal}
              paymentMode={paymentMode}
            />
          </ScrollView>
          <OrderBottomBar />
        </View>
      )}
    </View>
  );
};

export default BagScreen;

const EmptyBag = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={Empty}
        style={{height: 0.25 * height, aspectRatio: 1, objectFit: 'contain'}}
      />
      <View style={{gap: 18, padding: 30}}>
        <AppTextBold style={styles.heading}>
          Your Shopping bag is lonely
        </AppTextBold>
        <AppText style={styles.normalText}>
          Looks like your bag is on diet… Time to fill it up with some fabulous
          finds
        </AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    textAlign: 'center',
  },
  normalText: {
    color: colors.silver,
    textAlign: 'center',
    fontFamily: 'Metropolis-Medium'
  },
});

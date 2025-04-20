import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {Pressable} from 'react-native-gesture-handler';
import colors from '../../constants/colors';
import {ShoppingBag} from '../../utils/icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Context} from '../../context/context';
import {useNavigation} from '@react-navigation/native';
import addToBag from '../../hooks/useAddToBag';
import addToFavourites from '../../hooks/useAddToFavourites';
import {ErrorToast} from '../../utils/toast/Toast';
import {useRealm} from '../../utils/realm';
import LoginBottomSheet from '../login/Login';
import { useSelector } from 'react-redux';

const ProductBottombar = ({setLoading}) => {
  const [loginSheetVisible, setLoginSheetVisible] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const {isLoggedIn} = useContext(Context);
  const productData = useSelector(state => state.product.productData);
  const selectedSize = useSelector(state => state.product.selectedSize);
  const selectedVariantId = useSelector(state => state.product.selectedVariantId);

  const navigation = useNavigation();
  const realm = useRealm();
  const user = realm.objects('UserData')?.at(0);

  const handleShopNow = async () => {
    if (isLoggedIn) {
      if (
        (productData?.category === 'suits' ||
          productData?.category === 'cordset') &&
        !selectedSize
      ) {
        setToastVisible(true);
        return;
      }

      try {
        setLoading(true);

        const response = await addToBag(
          productData?._id,
          selectedVariantId || '',
          1,
          selectedSize || '',
          realm,
          user.id,
        );
        if (response) navigation.navigate('BagScreen');
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    } else setLoginSheetVisible(true);
  };

  const handleFavourite = async () => {
    if (isLoggedIn) {
      try {
        setLoading(true);
        const response = await addToFavourites(
          productData?._id,
          realm,
          user.id,
        );
        if (response) navigation.navigate('FavouriteScreen');
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    } else setLoginSheetVisible(true);
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        gap: 12,
        backgroundColor: colors.white,
        width: '100%',
        padding: 12,
      }}>
      <Pressable onPress={handleFavourite} style={styles.favButton}>
        <Ionicons name="heart-circle" size={25} color={colors.red} />
        <Text
          style={{
            fontSize: 16,
            color: colors.darkBlue,
            fontFamily: 'Fontspring-DEMO-cerapro-medium',
          }}>
          Favourite
        </Text>
      </Pressable>

      <Pressable onPress={handleShopNow} style={styles.shopNowButton}>
        <ShoppingBag size={25} color={colors.white} strokeWidth={1.2} />
        <Text
          style={{
            fontSize: 16,
            color: colors.white,
            fontFamily: 'Fontspring-DEMO-cerapro-medium',
          }}>
          Shop now
        </Text>
      </Pressable>
      <ErrorToast
        visible={toastVisible}
        message={'Select your size to continue'}
        onClose={() => setToastVisible(false)}
      />
      <LoginBottomSheet
        visible={loginSheetVisible}
        setVisible={setLoginSheetVisible}
      />
    </View>
  );
};

export default ProductBottombar;

const styles = StyleSheet.create({
  favButton: {
    flexDirection: 'row',
    gap: 6,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 6,
    borderWidth: 1,
    borderColor: colors.lightGrayColor,
    backgroundColor: colors.white,
    fontWeight: 'ultralight',
    width: '45%',
  },
  shopNowButton: {
    width: '50%',
    flexDirection: 'row',
    gap: 6,
    backgroundColor: colors.darkBlue,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 6,
    borderWidth: 1,
    borderColor: colors.darkBlue,
  },
});

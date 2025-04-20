import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  setProductQuantity,
  setProducts,
} from '../../utils/redux/slice/BagSlice';
import axiosInstance from '../../utils/axios/axiosClient';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../constants/colors';
import AppTextBold from '../text/appTextbold';
import DialogBox from '../ui/DialogBox';
import {useLoading} from '../../context/LoadingContext';
import {useRealm} from '../../utils/realm';
import Realm from 'realm';

const ProductData = ({product}) => {
  const [quantity, setQuantity] = useState(product.quantity);
  const productList = useSelector(state => state.bag.products);
  const [showDialogBox, setShowDialogBox] = useState(false);
  const mrp = product.mrp || Math.round(product.price * 1.5);
  const dispatch = useDispatch();
  const {setLoading} = useLoading();
  const realm = useRealm();
  const user = realm.objects('UserData')?.at(0);
   

  const handleIncrease = () => {
    setQuantity(prev => {
      const newQuantity = prev + 1;
      dispatch(
        setProductQuantity({productId: product.id, quantity: newQuantity}),
      );
      return newQuantity;
    });
  };

  const removeProduct = async () => {
    try {
      setShowDialogBox(false);
      setLoading(true);
      const response = await axiosInstance.post(
        '/product/remove-bag',
        JSON.stringify({
          productId: product?.id,
        }),
      );


      if (response.data?.success && response.data?.bag) {
        const newBag = productList?.filter(
          value => value.id.toString() !== product.id,
        );
        dispatch(setProducts({products: newBag}));
        let bag = response.data?.bag?.items;

        realm.write(() => {
          const productReferences = bag?.map(product => {
            const existingProduct = realm.create(
              'Product',
              {
                id: product?.product?._id,
                image: product?.product?.variant?.image || '',
                productName: product?.product?.productName,
                mrp: Number(
                  product?.product?.mrp ||
                    Math.floor(product?.product?.price * 1.5),
                ),
                price: Number(product?.product?.price),
                quantity: product?.quantity,
                size: product?.size,
                variantId: product?.variantId,
              },
              Realm.UpdateMode.Modified,
            );

            return existingProduct.id;
          });

          let cachedBag = realm.objectForPrimaryKey('Bag', user.id);

          if (!cachedBag) {
            cachedBag = realm.create('Bag', {
              userId: user.id,
              products: productReferences,
            });
          } else {
            cachedBag.products.splice(
              0,
              cachedBag.products.length,
              ...productReferences,
            );
          }
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDecrease = () => {
    setQuantity(prev => {
      if (prev === 1) {
        setShowDialogBox(true);
        return 1;
      } else {
        const newQuantity = prev - 1;
        dispatch(
          setProductQuantity({productId: product.id, quantity: newQuantity}),
        );
        return newQuantity;
      }
    });
  };

  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            gap: 12,
            width: '80%',
            alignItems: 'center',
          }}>
          <Image
            source={{uri: product?.image}}
            style={{
              width: 100,
              height: 120,
              // aspectRatio: 1,
              objectFit: 'cover',
              borderRadius: 14,
            }}
          />
          <View style={{flex: 1, gap: 4}}>
            <Text
              numberOfLines={2}
              style={{flexWrap: 'wrap', color: colors.darkGrayColor}}>
              {product?.productName}
            </Text>

            <Text style={{fontSize: 12, color: colors.lightGrayColor}}>
              {product.size ? `Size - ${product.size}` : 'Free size'}
            </Text>

            <View style={styles.quantity}>
              <Feather
                name="minus"
                size={15}
                color={colors.pink}
                onPress={handleDecrease}
              />
              <AppTextBold style={{fontSize: 14}}>{quantity}</AppTextBold>
              <Feather
                name="plus"
                size={15}
                color={colors.pink}
                onPress={handleIncrease}
              />
            </View>
          </View>
        </View>
        <View>
          <AppTextBold style={{fontSize: 14}}>₹{product.price}</AppTextBold>
          <Text style={styles.discountPrice}>₹{mrp}</Text>
        </View>
      </View>
      <DialogBox
        heading={'Goodbye, or just a temporary pause?'}
        message={
          'We’re ready to remove it, but don’t forget—you can always add it back later'
        }
        isVisible={showDialogBox}
        onCancel={() => setShowDialogBox(false)}
        onConfirm={removeProduct}
      />
    </View>
  );
};

export default ProductData;

const styles = StyleSheet.create({
  discountPrice: {
    fontSize: 12,
    textAlign: 'center',
    justifyContent: 'center',
    textDecorationLine: 'line-through',
    color: colors.lightGrayColor,
  },
  quantity: {
    backgroundColor: 'rgb(255, 241, 242)',
    flexDirection: 'row',
    width: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 4,
    padding: 2,
    borderWidth: 1,
    borderColor: colors.pink,
    alignSelf: 'flex-start',
  },
});

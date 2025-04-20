import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import ProductBar from '../../components/bars/productBar';
import ProductInfo from '../../components/product/productInfo';
import getProductData from '../../hooks/getProductData.js';
import colors from '../../constants/colors.js';
import {useFocusEffect} from '@react-navigation/native';
import ProductScreenLoading from '../../components/ui/loading/ProductScreenLoading.jsx';
import ProductBottombar from '../../components/product/productBottombar.jsx';
import {useDispatch, useSelector} from 'react-redux';
import getProductById from '../../hooks/getProductData.js';
import {setProductData} from '../../utils/redux/slice/ProductSlice.js';

const ProductScreen = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const selectedProductId = useSelector(
    state => state.product.selectedProductId,
  );  
  const productData = useSelector(
    state => state.product.productData,
  );  

  useFocusEffect(
    useCallback(() => {
      // Store previous styles manually
      const prevBackgroundColor = colors.white;
      const prevBarStyle = 'dark-content';
      const prevTranslucent = false;

      // Apply new styles
      StatusBar.setBackgroundColor(colors.white);
      StatusBar.setBarStyle('dark-content');

      return () => {
        // Reset styles to previous state
        StatusBar.setBackgroundColor(prevBackgroundColor);
        StatusBar.setBarStyle(prevBarStyle);
        StatusBar.setTranslucent(prevTranslucent);
      };
    }, []),
  );

  const fetchProductData = async () => {
    setLoading(true);
    try {      

      const response = await getProductById(selectedProductId);      
      if (response) dispatch(setProductData({data: response}));

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <View style={{flex: 1}}>
      <ProductBar />
      {loading ? <ProductScreenLoading /> : <ProductInfo />}
      <ProductBottombar setLoading={setLoading}/>
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({});

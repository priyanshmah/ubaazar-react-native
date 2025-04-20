import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import colors from '../../constants/colors';
import axios from 'axios';
import {API_ENDPOINT} from '@env';
import ProductVariant from '../../components/newArrival/ProductVariant';
import { ScrollView } from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image';
import Banner from '@/src/app/assets/images/new-arrival/newArrival.webp'
import Flowers from '@/src/app/assets/images/new-arrival/flowers.webp'
import LinearGradient from 'react-native-linear-gradient';
import CapitalHeading from '../../components/ui/CapitalHeading';

const NewArrivalScreen = () => {
  const [products, setProducts] = useState([]);

  const fetchNewProducts = async () => {
    try {
      console.log('Fetching new products...', API_ENDPOINT);
      
      const response = await axios.get(`${API_ENDPOINT}/feed/new-arrival`);
      if (response.data?.success && response.data?.feed) {
        setProducts(response.data.feed);
      }
    } catch (error) {
      console.log('Error while fetching new products...', error);
    }
  };

  useEffect(() => {
    // fetch data
    fetchNewProducts();
  }, []);

  return (
    <ScrollView
    showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}>
        <LinearGradient
        colors={[colors.white, colors.lightPink]}
                  start={{x: 0, y: 0}}
                  end={{x: 0, y: 0.5}}
        style={{
          padding: 12,
          backgroundColor: colors.white,
          borderBottomLeftRadius: 32,
          borderBottomRightRadius: 32,
          elevation: 2,
          overflow: 'hidden'
        }}>
        <FastImage 
        source={Banner}
        style={{
          height: 150,
          width: '100%',
          marginLeft: 24
        }}
        resizeMode='contain'
        />
        <FastImage 
        source={Flowers}
        style={{
          height: 180,
          width: 180,
          position: 'absolute',
          bottom: 0,
          left: 0
        }}
        resizeMode='cover'
        />
        </LinearGradient>
        <CapitalHeading text={"Fresh Drops!"}/>
        <View style={{gap: 12, backgroundColor: colors.lightBackground, paddingBottom: 75}}>
      {products.map((product, index) => (
        <ProductVariant product={product} key={index}/>
      ))}
      </View>
    </ScrollView>
  );
};

export default NewArrivalScreen;

const styles = StyleSheet.create({});

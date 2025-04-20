import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import GradientBar from '@/src/app/components/bars/gradientBar';
import colors from '@/src/app/constants/colors';
import AppTextBold from '@/src/app/components/text/appTextbold';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ShoppingBag} from '@/src/app/utils/icons';
import Truck from '@/src/app/assets/icons/fast-delivery';
import getFavourites from '@/src/app/hooks/getFavourites';
import {useQuery, useRealm} from '@/src/app/utils/realm';
import ProductHorizontal from '@/src/app/components/home/product/productHorizontal';
import Favourite from '@/src/app/assets/icons/favourites/favourites';
import { ScrollView } from 'react-native-gesture-handler';

const FavouriteScreen = () => {
  const [favourites, setFavourites] = useState([]);
  const realm = useRealm();
  const user = realm.objects('UserData').at(0);
  const cachedFavourites = realm.objectForPrimaryKey('Favourites', user.id);

  useEffect(() => {
    const fetchFavourites = async () => {
      const response = await getFavourites(realm, user.id);
      if (response) {
        setFavourites(response);
      }
    };

    if (cachedFavourites?.products) {
      const allProducts = realm.objects('Product');
      const filteredProducts = allProducts.filter(product =>
        cachedFavourites.products?.includes(product.id),
      );

      setFavourites(filteredProducts);
    } else fetchFavourites();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <GradientBar name={'Favourites'} />
      {favourites.length > 0  ? (
        <ScrollView 
        showsVerticalScrollIndicator={false}
        style={{paddingVertical: 12}}>
          <AppTextBold style={styles.fav}>
            Your favourites ! Inki shopping toh banti hai 😊💖
          </AppTextBold>

          <View
          style={{backgroundColor: colors.white, gap: 12, paddingBottom: 32}}>
            {favourites?.map((value, index) => {
              return <ProductHorizontal product={value} key={index} />;
            })}
          </View>
        </ScrollView>
      ) : (
        <View
          style={{
            paddingVertical: 250,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Favourite size={100} />
          <View style={{gap: 6, padding: 24}}>
            <Text style={styles.heading}>
              Favourites: Currently on vacation!
            </Text>
            <Text style={styles.text}>
              Your favorites list is whispering 'Add something!'
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default FavouriteScreen;

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontFamily: 'Metropolis-Bold',
    color: colors.pink,
    textAlign: 'center',
  },
  text: {
    fontFamily: 'Metropolis-Medium',
    color: colors.lightGrayColor,
    textAlign: 'center',
    fontSize: 14,
  },
  fav: {
    fontSize: 14,
    color: colors.pink,
    textAlign: 'center',
  },
});

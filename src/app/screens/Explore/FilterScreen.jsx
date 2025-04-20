import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import WeddingWear from '@/src/app/assets/images/home/cards/Landscape/Wedding.png';
import EthnicWear from '@/src/app/assets/images/home/cards/Landscape/Ethnic.png';
import DailyWear from '@/src/app/assets/images/home/cards/Landscape/Daily.png';
import PartyWear from '@/src/app/assets/images/home/cards/Landscape/Party.png';
import colors from '../../constants/colors';
import FastImage from 'react-native-fast-image';
import {useFocusEffect} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {FlatList, Pressable, ScrollView} from 'react-native-gesture-handler';
import ColouredHeading from '../../components/ui/ColouredHeading';
import {useDispatch, useSelector} from 'react-redux';
import {setIsBottomTabsVisible} from '../../utils/redux/slice/AppDataSlice';
import ProductImages from '../../components/product/product-images';
import LoginBottomSheet from '../../components/login/Login';
import BasicLoadingScreen from '../../components/ui/loading/BasicLoadingScreen';

const FilterScreen = ({route}) => {
  const navigation = useNavigation();
  const {screen} = route.params;
  const dispatch = useDispatch();

  const allProducts = useSelector(state => state.feed.allProducts);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  useFocusEffect(
    useCallback(() => {
      // Hide bottom tabs when the screen is focused
      dispatch(setIsBottomTabsVisible({visible: false}));

      return () => {
        // Show bottom tabs when the screen loses focus
        dispatch(setIsBottomTabsVisible({visible: true}));
      };
    }, [dispatch]),
  );

  useEffect(() => {
    setLoading(true);

    const filterProducts = () => {
      let sortedProducts = [];

      if (screen === 'Ethnic') {
        sortedProducts = allProducts.filter(
          p =>
            p.category === 'sarees' ||
            p.category === 'suits' ||
            p.category === 'lehangas'
        );
      } else if (screen === 'Party') {
        sortedProducts = allProducts.filter(p => p.type === 'Party Wear');
      } else if (screen === 'Daily') {
        sortedProducts = allProducts.filter(p => p.type === 'Daily Wear');
      } else if (screen === 'Wedding') {
        sortedProducts = allProducts.filter(p => p.type === 'Traditional');
      }

      setFilteredProducts(sortedProducts);
      setLoading(false);
    };

    // Async-like behavior to allow loading indicator to appear
    const timer = setTimeout(filterProducts, 100); // Give React time to render loader

    return () => clearTimeout(timer);
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}>
      <Ionicons
        name="arrow-back"
        size={25}
        color={colors.white}
        onPress={() => navigation.goBack()}
        style={styles.backIcon}
      />

      <FastImage
        source={
          screen === 'Party'
            ? PartyWear
            : screen === 'Ethnic'
            ? EthnicWear
            : screen === 'Daily'
            ? DailyWear
            : WeddingWear
        }
        style={{
          width: '100%',
          aspectRatio: 16 / 9,
          elevation: 2,
          borderBottomLeftRadius: 24,
          borderBottomRightRadius: 24,
        }}
        resizeMode="contain"
      />

      <ColouredHeading primaryText={screen} secondaryText="Wear" />
        {loading ? <BasicLoadingScreen height={0.5}/> : <FlatList
          keyExtractor={(_, index) => index.toString()}
          data={filteredProducts}
          renderItem={({item}) => (
            <ProductImages product={item} />
          )}
          scrollEnabled={false}
          initialNumToRender={30}
          maxToRenderPerBatch={20}
          windowSize={10}
          removeClippedSubviews={true}
          style={{
            paddingVertical: 12,
          }}
        />}
        <LoginBottomSheet visible={visible} setVisible={setVisible}/>
      </ScrollView>
  );
};

export default FilterScreen;

const styles = StyleSheet.create({
  backIcon: {
    position: 'absolute',
    top: 0,
    left: 10,
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 6,
    borderRadius: 50,
    zIndex: 100,
  },
});

import {Pressable, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import colors from '../../constants/colors';
import NavBar from '../../components/bars/navBar';
import SearchBar from '../../components/bars/searchBar';
import Categories from '../../components/home/categories';
import CategoryVertical from '../../components/home/categoryVertical';
import Feed from '../../components/home/feed';
import ProductImages from '../../components/product/product-images';
import Animated, {
  Extrapolation,
  interpolate,
  runOnJS,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import getFeed from '../../hooks/getFeed';
import Welcome from '../../components/home/welcome';
import TopProducts from '../../components/home/topProducts';
import Greeting from '../../components/home/greeting';
import {useLoading} from '../../context/LoadingContext';
import {RefreshControl} from 'react-native-gesture-handler';
import {useRealm} from '../../utils/realm';
import FeedScreenLoading from '../../components/ui/loading/FeedScreenLoading';
import BasicLoadingScreen from '../../components/ui/loading/BasicLoadingScreen';
import {useDispatch, useSelector} from 'react-redux';
import {
  setAllProducts,
  setCategorisedProducts,
  setProducts,
  setTrendingProducts,
} from '../../utils/redux/slice/FeedSlice';
import Options from '../../components/home/options/Options';
import DailyWearCard from '../../components/home/banner/FilterCards/DailyWearCard';
import FilterCards from '../../components/home/banner/FilterCards/FilterCards';
import {setIsBottomTabsVisible} from '../../utils/redux/slice/AppDataSlice';

const HomeScreen = ({navigation}) => {
  const selectedCategory = useSelector(state => state.feed.selectedCategory);
  const categorisedProducts = useSelector(
    state => state.feed.categorisedProducts,
  );
  const allProducts = useSelector(state => state.feed.allProducts);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [productArray, setProductArray] = useState([]);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [paddingOffset, setPaddingOffset] = useState(0);
  const scrollY = useSharedValue(0);
  const scrollRef = useRef(null);
  const dispatch = useDispatch();
  const feedRef = useRef(null);

  const scrollToFeed = () => {
    if (feedRef.current && scrollRef.current) {
      feedRef.current.measureLayout(
        scrollRef.current.getNativeScrollRef(),
        (x, y) => {
          scrollRef.current.scrollTo({y: y - headerHeight - 0, animated: true});
        },
      );
    }
  };

  const visible = useSelector(state => state.appData.isBottomTabsVisible);

  useEffect(() => {
    scrollToFeed();

    dispatch(
      setProducts({
        products:
          selectedCategory === 'all'
            ? allProducts
            : categorisedProducts[selectedCategory],
      }),
    );
  }, [selectedCategory]);

  const getProductArray = async () => {
    try {
      setLoading(true);
      const products = await getFeed(selectedCategory);

      if (products?.feed?.length) {
        const categorized = {};

        products?.feed?.forEach(product => {
          const category = product.category || 'others';
          if (!categorized[category]) {
            categorized[category] = [];
          }
          categorized[category].push(product);
        });

        // Optionally store in Redux
        dispatch(setProducts({products: products.feed}));
        dispatch(setAllProducts({products: products.feed}));
        dispatch(setCategorisedProducts({products: categorized}));
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductArray();
  }, []);

  useEffect(() => {
    console.log(scrollY?.value, visible);

    if (scrollY?.value > 80) {
      dispatch(setIsBottomTabsVisible(false));
    } else dispatch(setIsBottomTabsVisible(true));
  }, [scrollY]);

  const onRefreshing = async () => {
    setRefreshing(true);
    getProductArray();
    setRefreshing(false);
  };

  const showTabs = () => dispatch(setIsBottomTabsVisible({visible: true}));
  const hideTabs = () => dispatch(setIsBottomTabsVisible({visible: false}));

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      const prevValue = scrollY.value;
      scrollY.value = event.contentOffset.y;
    },
  });

  const animatedHeaderStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      scrollY.value,
      [0, headerHeight],
      [0, -headerHeight],
      Extrapolation.CLAMP,
    );
    return {
      transform: [{translateY}],
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10,
      elevation: scrollY.value > headerHeight ? 2 : 0,
    };
  });

  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <StatusBar
        translucent={false}
        backgroundColor={colors.white}
        barStyle={'dark-content'}
      />

      {/* Animated Header */}
      <Animated.View
        style={[animatedHeaderStyle, {backgroundColor: colors.white}]}
        onLayout={event => setPaddingOffset(event.nativeEvent.layout.height)}>
        <View
          onLayout={event => {
            setHeaderHeight(event.nativeEvent.layout.height);
          }}>
          <NavBar navigation={navigation} />
          <SearchBar />
        </View>
        <Categories />
      </Animated.View>

      {/* Scrollable Content */}
      <Animated.ScrollView
        ref={scrollRef}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefreshing}
            style={{zIndex: 1000}}
            colors={[colors.darkGreen]}
            progressViewOffset={paddingOffset}
          />
        }
        style={[{flex: 1, paddingTop: paddingOffset}]}
        onScroll={scrollHandler}
        showsVerticalScrollIndicator={false}>
        {loading ? (
          // <FeedScreenLoading />
          <BasicLoadingScreen height={0.5} />
        ) : (
          <View
            style={{
              gap: 12,
            }}>
            <Welcome />
            <FilterCards />
            <View ref={feedRef}>
              <Feed productArray={productArray} navigation={navigation} />
            </View>
          </View>
        )}
      </Animated.ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

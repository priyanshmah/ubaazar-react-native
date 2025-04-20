import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useState} from 'react';
import ProductImages from '../product/product-images';
import Animated from 'react-native-reanimated';
import ProductHorizontal from './product/productHorizontal';
import CapitalHeading from '../ui/CapitalHeading';
import LoginBottomSheet from '../login/Login';
import {Context} from '../../context/context';
import {useSelector} from 'react-redux';
import ColouredHeading from '../ui/ColouredHeading';

const Feed = () => {
  const products = useSelector(state => state.feed.products);
  const [visible, setVisible] = useState(false);  

  return (
    <View style={{paddingVertical: 12, paddingBottom: 500}}>
      <ColouredHeading primaryText="All" secondaryText="Products" />
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={products}
        renderItem={({item}) => (
          <ProductImages product={item} setVisible={setVisible} />
        )}
        scrollEnabled={false}
        initialNumToRender={30}
        maxToRenderPerBatch={20}
        windowSize={10}
        removeClippedSubviews={true}
        style={{
          paddingVertical: 12,
        }}
      />
      <LoginBottomSheet visible={visible} setVisible={setVisible} />
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({});

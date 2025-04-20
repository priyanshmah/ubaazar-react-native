import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { ScrollView } from 'react-native-gesture-handler';
import PlaceHolder from './PlaceHolder';

const {height, width} = Dimensions.get('screen');

const ProductScreenLoading = () => {
  return (
    <ScrollView>
    <View style={{padding: 12, gap: 12}}>
      <PlaceHolder height={0.4 * height} width={'100%'} borderRadius={24} />

      <View style={{gap: 12}}>
        
        <PlaceHolder height={50} width={'100%'} />

        <SkeletonPlaceholder.Item flexDirection="row" gap={12}>
          <PlaceHolder
            height={width * 0.2}
            width={width * 0.2}
            borderRadius={75}
          />
          <View
            style={{
              flex: 1,
              height: width * 0.2,
              overflow: 'hidden',
              justifyContent: 'space-between',
            }}>
            <PlaceHolder height={18} width={'100%'} borderRadius={6} />
            <PlaceHolder height={18} width={'80%'} borderRadius={6} />
            <PlaceHolder height={18} width={'60%'} borderRadius={6} />
          </View>
        </SkeletonPlaceholder.Item>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <PlaceHolder height={width * 0.28} width={width * 0.28} />
        <PlaceHolder height={width * 0.28} width={width * 0.28} />
        <PlaceHolder height={width * 0.28} width={width * 0.28} />
      </View>
      <PlaceHolder height={50} width={'100%'} />
    </View>

    </ScrollView>
  );
};

export default ProductScreenLoading;

const styles = StyleSheet.create({});



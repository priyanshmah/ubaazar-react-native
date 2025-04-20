import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const PlaceHolder = ({borderRadius = 12, height = 10, width = 10}) => {
    return (
      <View
        style={{
          height,
          width,
          borderRadius,
          overflow: 'hidden',
        }}>
        <SkeletonPlaceholder>
          <SkeletonPlaceholder.Item height={'100%'} width={'100%'} />
        </SkeletonPlaceholder>
      </View>
    );
  };

export default PlaceHolder

const styles = StyleSheet.create({})
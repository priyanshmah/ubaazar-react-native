import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../constants/colors';

const CapitalHeading = ({ text }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        overflow: 'hidden',
      }}>
      <View
        style={{
          height: 1,
          width: '50%',
          backgroundColor: colors.searchBarColor,
          borderRadius: 12,
        }}
      />
      <Text
        style={{
          fontFamily: 'Metropolis-Medium',
          color: colors.silver,
          paddingHorizontal: 12,
          letterSpacing: 2,
          fontSize: 14,
        }}>
        {text}
      </Text>
      <View
        style={{
          height: 1,
          width: '50%',
          backgroundColor: colors.searchBarColor,
          borderRadius: 12,
        }}
      />
    </View>
  );
};

export default CapitalHeading;

const styles = StyleSheet.create({});

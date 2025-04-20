import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../constants/colors';

const Ubaazar = ({size, style}) => {
  return (
    <View style={[{flexDirection: 'row'}, style]}>
      <Text style={[styles.text, {color: colors.brightOrange, fontSize: size}]}>
        U
      </Text>
      <Text style={[styles.text, {color: colors.darkBlue, fontSize: size}]}>
        BAAZAR
      </Text>
    </View>
  );
};

export default Ubaazar;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'PassionOne-Regular',
    textAlignVertical: 'center'
  },
});

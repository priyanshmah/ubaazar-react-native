import React from 'react';
import { Text, StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const AppTextBold = ({ style, children, ...props }) => {
  return (
    <Text style={[styles.defaultText, style]} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  defaultText: {
    fontFamily: 'Metropolis-SemiBold',
    color: colors.darkGrayColor,
    fontSize: 12,
  },
});

export default AppTextBold;

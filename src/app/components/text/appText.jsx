import React from 'react';
import { Text, StyleSheet } from 'react-native';

const AppText = ({ style, children, ...props }) => {
  return (
    <Text style={[styles.defaultText, style]} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  defaultText: {
    fontFamily: 'Metropolis-Regular',
  },
});

export default AppText;

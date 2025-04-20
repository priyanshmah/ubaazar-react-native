import {Pressable, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../constants/colors';
import AppTextBold from '../text/appTextbold';
import {useNavigation} from '@react-navigation/native';

const CustomBar = ({ name }) => {
  const navigation = useNavigation();

  return (
    <>
    <StatusBar backgroundColor={colors.white} barStyle={'dark-content'}/>
    <View
      style={{
        flexDirection: 'row',   
        gap: 12,
        alignItems: 'center',
        padding: 12,
        backgroundColor: colors.white,
        borderBottomRightRadius: 24,
        borderBottomLeftRadius: 24
      }}>
      <Pressable onPress={() => navigation.goBack()}>
        <Feather name="chevron-left" size={25} color={colors.darkGrayColor} />
      </Pressable>
      <AppTextBold style={styles.heading}>{name}</AppTextBold>
    </View>
    </>
  );
};

export default CustomBar;

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
  },
});

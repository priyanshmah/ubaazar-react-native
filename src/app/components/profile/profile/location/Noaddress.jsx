import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AddressBottomSheet from '../../../bag/addressBottomSheet';
import AppTextBold from '../../../text/appTextbold';
import colors from '@/src/app/constants/colors';
import Feather from 'react-native-vector-icons/Feather';
import Location from '@/src/app/assets/icons/location/savedAddress';

const Noaddress = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={{padding: 12}}>
      <AddressBottomSheet isVisible={isVisible} setIsVisible={setIsVisible} />
      <View style={{alignItems: 'center', justifyContent: 'center', gap: 8, paddingHorizontal: 24}}>
        <Location size={300} />
        <AppTextBold style={styles.heading}>No address?</AppTextBold>
        <AppTextBold
          style={styles.text}>
          Guess we’ll have to show up at your door and surprise you instead !!!
        </AppTextBold>
      </View>

      <Pressable
        onPress={() => setIsVisible(true)}
        style={{padding: 24, alignItems: 'center', justifyContent: 'center'}}>
        <View style={styles.btn}>
          <Feather name="plus" size={20} color={colors.brightOrange} />
          <AppTextBold style={{fontSize: 16, color: colors.brightOrange}}>
            Add new address
          </AppTextBold>
        </View>
      </Pressable>
    </View>
  );
};

export default Noaddress;

const styles = StyleSheet.create({
  add: {
    fontSize: 14,
    color: colors.grayColor,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    borderWidth: 1,
    borderColor: colors.brightOrange,
    borderStyle: 'dotted',
    width: '100%',
    padding: 8,
    borderRadius: 12,
  },
  heading: {
      fontSize: 20,
      fontFamily: 'Metropolis-Bold',
      color: colors.darkGrayColor,
      textAlign: 'center',
    },
    text: {
      fontFamily: 'Metropolis-Medium',
      color: colors.lightGrayColor,
      textAlign: 'center',
      fontSize: 14,
    },
});

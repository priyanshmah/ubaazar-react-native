import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AppTextBold from '../text/appTextbold';
import colors from '../../constants/colors';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AppText from '../text/appText';
import {Home, PhoneCall} from '../../utils/icons';
import AddressBottomSheet from './addressBottomSheet';
import ChangeAddressSheet from './changeAddressSheet';
import {useSelector} from 'react-redux';
import Location from '../../assets/icons/location/where';

const AddressComp = ({address}) => {
  const [newAddressVisible, setNewAddressVisible] = useState(false);
  const [changeAddressVisible, setChangeAddressVisible] = useState(false);

  return (
    <View
      style={{
        padding: 12,
        backgroundColor: colors.white,
        margin: 8,
        borderRadius: 16,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <AppTextBold style={{fontSize: 14}}>Delivery Address</AppTextBold>
        <Pressable onPress={() => setChangeAddressVisible(true)}>
          <AppTextBold style={{color: colors.brightOrange}}>
            Change address
          </AppTextBold>
        </Pressable>
      </View>

      {(address.name) ? (
        <View
          style={{
            paddingVertical: 12,
            borderRadius: 18,
            borderWidth: 0,
            borderColor: colors.brightOrange,
            gap: 12,
          }}>
          <View
            style={{
              flexDirection: 'row',
              gap: 12,
              alignItems: 'flex-start',
            }}>
            <View style={styles.icon}>
              <Home color={colors.grayColor} size={15} />
            </View>
            <View style={{justifyContent: 'center'}}>
              <AppTextBold>{address?.name}</AppTextBold>
              <AppText style={styles.text}>
                {address?.area}, {address?.address}
              </AppText>
              <AppText style={styles.text}>
                {address?.city}, {address?.state} - {address?.pincode}
              </AppText>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              gap: 12,
              alignItems: 'center',
            }}>
            <View style={styles.icon}>
              <PhoneCall color={colors.grayColor} size={15} />
            </View>
            <AppTextBold>+91 {address?.mobileNumber}</AppTextBold>
          </View>
        </View>
      ) : (
        <View
          style={{
            paddingVertical: 12,
            alignItems: 'center',
            gap: 6
          }}>
          <Location size={50} />
          <View style={{alignItems: 'center', paddingHorizontal: 24}}>
          <AppTextBold style={{fontSize: 14}}>No address found !!!</AppTextBold>
          <Text style={{
            fontFamily: 'Metropolis-Medium',
            fontSize: 12,
            color: colors.silver,
            textAlign: 'center'
          }}>Your address is playing hide and seek. Help us find it! </Text>
          </View>
        </View>
      )}

      <Pressable
        onPress={() => setNewAddressVisible(true)}
        style={{
          width: '100%',
          paddingVertical: 10,
          borderWidth: 1,
          borderColor: colors.brightOrange,
          borderStyle: 'dotted',
          borderRadius: 12,
        }}>
        <AppTextBold
          style={{
            color: colors.brightOrange,
            fontSize: 14,
            textAlign: 'center',
          }}>
          + Add new address
        </AppTextBold>
      </Pressable>

      <AddressBottomSheet
        isVisible={newAddressVisible}
        setIsVisible={setNewAddressVisible}
      />

      <ChangeAddressSheet
        isVisible={changeAddressVisible}
        setIsVisible={setChangeAddressVisible}
        setAddAddress={setNewAddressVisible}
      />
    </View>
  );
};

export default AddressComp;

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    color: colors.lightGrayColor,
    fontFamily: 'Metropolis-Medium',
  },
  icon: {
    padding: 8,
    borderRadius: 100,
    backgroundColor: colors.searchBarColor,
    height: 30,
    width: 30,
  },
});

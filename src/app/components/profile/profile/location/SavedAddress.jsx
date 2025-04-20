import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import colors from '@/src/app/constants/colors';
import AppTextBold from '../../../text/appTextbold';
import AddressDetails from '../../../bag/addressDetails';
import ChangeAddressSheet from '../../../bag/changeAddressSheet';
import AddressBottomSheet from '../../../bag/addressBottomSheet';

const SavedAddress = ({addresses}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [targetedAddress, setTargetedAddress] = useState({});
  return (
    <View style={{gap: 12}}>
      <AddressBottomSheet isVisible={isVisible} setIsVisible={setIsVisible} editable={true} editableAddress={targetedAddress}/>
      {/* <ChangeAddressSheet isVisible={isVisible} setIsVisible={setIsVisible} /> */}
      <View style={{paddingHorizontal: 12}}>
        <Pressable onPress={() => setIsVisible(true)} style={styles.addressBtn}>
          <View
            style={{
              flexDirection: 'row',
              gap: 8,
              alignItems: 'center',
            }}>
            <Feather name="plus" size={20} color={colors.brightOrange} />
            <AppTextBold style={{color: colors.brightOrange, fontSize: 14}}>
              Add new address
            </AppTextBold>
          </View>
          <Feather name="chevron-right" size={20} color={colors.grayColor} />
        </Pressable>
      </View>

      <View
        style={{
          flexDirection: 'row',
          gap: 12,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            height: 1,
            width: '50%',
            backgroundColor: colors.silver,
            opacity: 0.25,
            borderRadius: 12,
          }}
        />

        <AppTextBold style={styles.capital}>SAVED ADDRESSES</AppTextBold>
        <View
          style={{
            height: 1,
            width: '50%',
            backgroundColor: colors.silver,
            opacity: 0.25,
            borderRadius: 12,
          }}
        />
      </View>

      <View
        style={{
          backgroundColor: colors.lightBackground,
          gap: 8,
          paddingHorizontal: 12,
        }}>
        {addresses.map((address, index) => {
          return (
            <View
              key={index}
              style={{
                padding: 12,
                borderRadius: 16,
                backgroundColor: colors.white,
              }}>
              <AddressDetails address={address} />
              <View style={{flexDirection: 'row', gap: 12}}>
                <Pressable 
                onPress={() => {
                  setTargetedAddress(address)
                  setIsVisible(true)
                }}
                style={styles.option}>
                  <Feather
                    name="edit-2"
                    color={colors.pink}
                    size={12}
                    style={{padding: 1}}
                  />
                  <Text
                    style={{
                      color: colors.pink,
                      fontWeight: '500',
                      fontSize: 12,
                    }}>
                    Edit
                  </Text>
                </Pressable>
                <Pressable style={styles.option}>
                  <Feather
                    name="trash-2"
                    color={colors.pink}
                    size={12}
                    style={{padding: 1}}
                  />
                  <Text
                    style={{
                      color: colors.pink,
                      fontWeight: '500',
                      fontSize: 12,
                    }}>
                    Delete
                  </Text>
                </Pressable>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default SavedAddress;

const styles = StyleSheet.create({
  addressBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    borderRadius: 12,
    elevation: 1,
    padding: 12,
  },
  capital: {
    fontSize: 14,
    color: colors.silver,
    textAlign: 'center',
    padding: 1,
    fontFamily: 'Metropolis-Medium',
    letterSpacing: 1,
  },
  option: {
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: colors.pink,
    alignSelf: 'flex-start',
    backgroundColor: colors.lightPink,
  },
});

import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomActionSheet from '../ui/CustomBottomSheet';
import AppTextBold from '../text/appTextbold';
import colors from '../../constants/colors';
import Feather from 'react-native-vector-icons/Feather';
import {Home, PhoneCall} from '../../utils/icons';
import AppText from '../text/appText';
import {useRealm} from '../../utils/realm';
import Location from '../../assets/icons/location/savedAddress';
import {useDispatch} from 'react-redux';
import {setSelectedAddress} from '../../utils/redux/slice/BagSlice';
import { ScrollView } from 'react-native-gesture-handler';

const ChangeAddressSheet = ({isVisible, setIsVisible, setAddAddress}) => {
  const realm = useRealm();
  const user = realm.objects('UserData').at(0);
  const addresses = realm.objects('Address').filtered(`userId == "${user.id}"`);
  const dispatch = useDispatch();

  const CloseHandler = () => {
    setIsVisible(false);
  };
  return (
    <CustomActionSheet isOpen={isVisible} onClose={CloseHandler}>
      <View style={{gap: 12, paddingVertical: 12}}>
        <AppTextBold style={{fontSize: 20}}>Select an address</AppTextBold>
        <Pressable
          onPress={() => {
            setIsVisible(false);
            setAddAddress(true);
          }}
          style={{
            backgroundColor: colors.white,
            padding: 12,
            borderRadius: 12,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            // elevation: 2,
            borderWidth: 1,
            borderColor: colors.brightOrange,
            borderStyle: 'dotted',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              gap: 6,
            }}>
            <Feather name="plus" size={20} color={colors.brightOrange} />
            <AppTextBold style={{fontSize: 16, color: colors.brightOrange}}>
              Add new address
            </AppTextBold>
          </View>
        </Pressable>

        {addresses.length ? (
          <ScrollView style={{
            padding: 6,
          }}>
            <View style={styles.loginContainer}>
              <View style={styles.line} />
              <AppTextBold
                style={{fontSize: 14, color: colors.silver, letterSpacing: 2}}>
                SAVED ADDRESSES
              </AppTextBold>
              <View style={styles.line} />
            </View>
            <View style={{gap: 12, backgroundColor: colors.white, paddingBottom: 100}}>
             
              {addresses.map((value, index) => {                
                return (
                  <Pressable
                    onPress={() => {
                      dispatch(setSelectedAddress({address: value.id}));
                      setIsVisible(false);
                    }}
                    key={index}
                    style={{
                      backgroundColor: colors.white,
                      gap: 12,
                      padding: 12,
                      elevation: 2,
                      borderRadius: 18
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        gap: 12,
                        alignItems: 'flex-start',
                      }}>
                      <View style={styles.icon}>
                        <Home color={colors.brightOrange} size={15} />
                      </View>
                      <View style={{justifyContent: 'center'}}>
                        <AppTextBold>{value.name}</AppTextBold>
                        <AppText style={styles.text}>
                          {value.area}, {value.street}
                        </AppText>
                        <AppText style={styles.text}>
                          {value.city}, {value.state} - {value.pincode}
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
                        <PhoneCall color={colors.brightOrange} size={15} />
                      </View>
                      <AppTextBold>+91 {value.mobileNumber}</AppTextBold>
                    </View>
                  </Pressable>
                );
              })}
              
            </View>
          </ScrollView>
        ) : (
          <View
            style={{
              paddingVertical: 12,
              alignItems: 'center',
              gap: 6,
            }}>
            <Location size={100} />
            <View style={{alignItems: 'center', paddingHorizontal: 24}}>
              <AppTextBold style={{fontSize: 14}}>
                No address found !!!
              </AppTextBold>
              <Text
                style={{
                  fontFamily: 'Metropolis-Medium',
                  fontSize: 12,
                  color: colors.silver,
                  textAlign: 'center',
                }}>
                Your address is playing hide and seek. Help us find it!{' '}
              </Text>
            </View>
          </View>
        )}
      </View>
    </CustomActionSheet>
  );
};

export default ChangeAddressSheet;

const styles = StyleSheet.create({
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    padding: 12
  },
  line: {
    height: 1.5,
    borderRadius: 50,
    width: '30%',
    backgroundColor: colors.silver,
    opacity: 0.2,
  },
  icon: {
    padding: 8,
    borderRadius: 100,
    backgroundColor: colors.lightPink,
    height: 30,
    width: 30,
  },
  text: {
    fontSize: 12,
    color: colors.lightGrayColor,
    fontFamily: 'Metropolis-Medium',
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
    backgroundColor: 'rgb(255, 241, 242)',
  },
});

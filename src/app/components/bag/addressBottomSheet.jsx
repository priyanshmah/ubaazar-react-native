import {
  ActivityIndicator,
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomActionSheet from '../ui/CustomBottomSheet';
import AppTextBold from '../text/appTextbold';
import colors from '../../constants/colors';
import FloatingLabelInput from '../ui/FloatingLabels';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Home, Location, PhoneCall, Work} from '../../utils/icons';
import AppText from '../text/appText';
import useAddAddress from '../../hooks/useAddAddress';
import { useRealm } from '../../utils/realm';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedAddress } from '../../utils/redux/slice/BagSlice';
const {width} = Dimensions.get('screen');

const AddressBottomSheet = ({
  isVisible,
  setIsVisible,
  editable,
  editableAddress,
}) => {
  const [receiverName, setReceiverName] = useState('');
  const [receiverContact, setReceiverContact] = useState('');
  const [addressType, setAddressType] = useState('home');
  const [address, setAddress] = useState('');
  const [sector, setSector] = useState('');
  const [pincode, setPincode] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isDefault, setIsDefault] = useState(true);
  const realm = useRealm();
  const user = realm.objects('UserData').at(0);
  const selectedAddress = useSelector(state => state.bag?.selectedAddress)
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      receiverName &&
      receiverContact.length === 10 &&
      addressType &&
      address &&
      sector &&
      pincode.length === 6
    ) {
      setIsValid(true);
    } else setIsValid(false);
  }, [receiverName, receiverContact, addressType, address, sector, pincode]);

  useEffect(() => {
    if (editable && editableAddress) {
      setReceiverName(editableAddress.name);
      setReceiverContact(editableAddress.mobileNumber);
      setAddressType(editableAddress.addressType);
      setAddress(editableAddress.address);
      setPincode(editableAddress.pincode);
      setSector(editableAddress.area);
    }
  }, []);

  const CloseHandler = () => {
    setIsVisible(false);
  };

  const submitHandler = async () => {
    if (!isValid) return;
    setLoading(true);

    const response = await useAddAddress({
      name: receiverName,
      mobileNumber: receiverContact,
      addressType,
      address,
      area: sector,
      pincode,
      isDefault,
    }, realm, user.id);

    if (response.success && response.address) {
      dispatch(setSelectedAddress({address: response.address?._id}))
      CloseHandler();
    }
    setLoading(false);
  };
  return (
    <CustomActionSheet isOpen={isVisible} onClose={CloseHandler}>
      <View style={{padding: 12, position: 'relative'}}>
        <AppTextBold
          style={{
            fontSize: 18,
            paddingBottom: 18,
          }}>
          Enter complete address
        </AppTextBold>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{marginBottom: 80}}>
            <View
              style={{
                backgroundColor: colors.white,
                borderRadius: 18,
                gap: 12,
                paddingVertical: 18,
              }}>
              <FloatingLabelInput
                label={"Receiver's name "}
                value={receiverName}
                setValue={setReceiverName}
                children={
                  <AntDesign
                    name="user"
                    size={20}
                    color={colors.lightGrayColor}
                  />
                }
                isCompulsory={true}
              />
              <FloatingLabelInput
                label={"Receiver's contact "}
                value={receiverContact}
                setValue={setReceiverContact}
                children={<AppTextBold style={{fontSize: 14}}>+91</AppTextBold>}
                maxLength={10}
                inputMode="tel"
                isCompulsory={true}
              />
            </View>

            <View
              style={{
                backgroundColor: colors.white,
                borderRadius: 18,
                gap: 12,
                paddingVertical: 24,
              }}>
              <View style={{gap: 6}}>
                <AppText
                  style={{
                    color: colors.grayColor,
                    fontSize: 14,
                    fontFamily: 'Metropolis-Medium',
                  }}>
                  Save address as{' '}
                  <Text
                    style={{
                      fontSize: 16,
                      baselineShift: 'super',
                      fontFamily: 'Metropolis-SemiBold',
                    }}>
                    *
                  </Text>
                </AppText>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Pressable
                    onPress={() => setAddressType('home')}
                    style={[
                      styles.btn,
                      addressType === 'home' && styles.activeBtn,
                    ]}>
                    <Home
                      color={
                        addressType === 'home' ? colors.pink : colors.grayColor
                      }
                      size={15}
                    />
                    <AppTextBold
                      style={[
                        styles.text,
                        addressType === 'home' && {color: colors.pink},
                      ]}>
                      Home
                    </AppTextBold>
                  </Pressable>
                  <Pressable
                    onPress={() => setAddressType('work')}
                    style={[
                      styles.btn,
                      addressType === 'work' && styles.activeBtn,
                    ]}>
                    <Work
                      color={
                        addressType === 'work' ? colors.pink : colors.grayColor
                      }
                      size={15}
                    />
                    <AppTextBold
                      style={[
                        styles.text,
                        addressType === 'work' && {color: colors.pink},
                      ]}>
                      Work
                    </AppTextBold>
                  </Pressable>
                  <Pressable
                    onPress={() => setAddressType('other')}
                    style={[
                      styles.btn,
                      addressType === 'other' && styles.activeBtn,
                    ]}>
                    <Location
                      color={
                        addressType === 'other' ? colors.pink : colors.grayColor
                      }
                      size={15}
                    />
                    <AppTextBold
                      style={[
                        styles.text,
                        addressType === 'other' && {color: colors.pink},
                      ]}>
                      Other
                    </AppTextBold>
                  </Pressable>
                </View>
              </View>
              <FloatingLabelInput
                label={'Address (House No, Building, Street)'}
                value={address}
                setValue={setAddress}
                isCompulsory={true}
              />
              <FloatingLabelInput
                label={'Sector / Colony '}
                value={sector}
                setValue={setSector}
                isCompulsory={true}
              />
              <FloatingLabelInput
                label={'Pincode '}
                value={pincode}
                setValue={setPincode}
                isCompulsory={true}
                maxLength={6}
                inputMode="tel"
              />
            </View>
            <View style={{flexDirection: 'row', gap: 6, alignItems: 'center'}}>
              <Ionicons
                name={isDefault ? 'checkbox' : 'square-outline'}
                color={colors.pink}
                size={20}
                style={{padding: 1}}
                onPress={() => setIsDefault(prev => !prev)}
              />
              <Text style={[styles.text, {fontSize: 14, color: colors.pink}]}>
                Set as default address
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.bottom}>
        <Pressable
          onPress={submitHandler}
          style={[
            styles.addressButton,
            {backgroundColor: isValid ? colors.darkBlue : colors.silver},
          ]}>
          {loading ? (
            <ActivityIndicator color={colors.white} size={'small'} />
          ) : (
            <AppTextBold style={{color: colors.white, fontSize: 16}}>
              {editable ? 'Confirm address' : 'Save address'}
            </AppTextBold>
          )}
        </Pressable>
      </View>
    </CustomActionSheet>
  );
};

export default AddressBottomSheet;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.lightGrayColor,
    borderRadius: 8,
    color: colors.lightGrayColor,
    paddingHorizontal: 12,
  },
  text: {
    color: colors.grayColor,
    fontSize: 12,
    fontFamily: 'Metropolis-Medium',
  },
  btn: {
    flexDirection: 'row',
    gap: 6,
    padding: 6,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.silver,
    alignSelf: 'flex-start',
  },
  activeBtn: {
    flexDirection: 'row',
    gap: 6,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.pink,
    alignSelf: 'flex-start',
    backgroundColor: 'rgb(255, 241, 242)',
  },
  addressButton: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    borderRadius: 12,
    alignSelf: 'center',
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 12,
    backgroundColor: colors.white,
    width,
  },
});

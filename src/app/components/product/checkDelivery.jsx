import {
  ActivityIndicator,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppTextBold from '../text/appTextbold';
import colors from '../../constants/colors';
import Cash from '../../assets/icons/cash';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {TbStars} from '../../utils/icons';
import cod from '@/src/app/assets/images/delivery/cod1.png';
import shipping from '@/src/app/assets/images/delivery/freeshipping1.png';
import quality from '@/src/app/assets/images/delivery/return1.png';
import tech from '@/src/app/assets/images/delivery/technology_14342005.png';
import quality1 from '@/src/app/assets/images/delivery/delivery_14341817.png';
import checkDelivery from '../../hooks/useCheckDelivery';
import {ErrorToast} from '../../utils/toast/Toast';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CheckDelivery = () => {
  const [pincode, setPincode] = useState('');
  const [isCodAvailable, setIsCodAvailable] = useState(null);
  const [isServicable, setIsServicable] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCheckPincode = async () => {
    setLoading(true);
    const response = await checkDelivery(pincode);

    if (response) {
      setIsCodAvailable(response.cod);
      setIsServicable(response.servicable);
    }
    setLoading(false);
  };

  useEffect(() => {
    setIsCodAvailable(null);
    setIsServicable(null);
  }, [pincode]);

  return (
    <View style={{gap: 18}}>
      <View style={{paddingHorizontal: 12}}>
        <AppTextBold style={{fontSize: 18}}>Check Delivery</AppTextBold>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter PIN code"
            inputMode="numeric"
            maxLength={6}
            placeholderTextColor={colors.brightOrange}
            onChangeText={text => setPincode(text)}
            onSubmitEditing={() => handleCheckPincode(pincode)}
          />
          {pincode && !loading && (
            <Pressable onPress={() => handleCheckPincode(pincode)}>
              <AppTextBold style={{color: colors.brightOrange}}>
                CHECK
              </AppTextBold>
            </Pressable>
          )}
          {
            pincode && loading && <ActivityIndicator size={"small"} color={colors.brightOrange}/>
          }
        </View>
        {isServicable === true && (
          <View style={styles.resultContainer}>
            <Feather name="check-circle" color={colors.green} size={15} />
            <AppTextBold style={{color: colors.green}}>
              This pincode is servicable
            </AppTextBold>
          </View>
        )}
        {isServicable === false && (
          <View style={styles.resultContainer}>
            <AntDesign name="closecircle" color={colors.red} size={15} />
            <AppTextBold style={{color: colors.red}}>
              This pincode is not servicable
            </AppTextBold>
          </View>
        )}
        {isCodAvailable === true && (
          <View style={styles.resultContainer}>
            <Feather name="check-circle" color={colors.green} size={15} />
            <AppTextBold style={{color: colors.green}}>
              Cash on delivery available
            </AppTextBold>
          </View>
        )}
        {isCodAvailable === false && (
          <View style={styles.resultContainer}>
            <AntDesign name="closecircle" color={colors.red} size={15} />
            <AppTextBold style={{color: colors.red}}>
              Cash on delivery not available
            </AppTextBold>
          </View>
        )}
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          // backgroundColor: 'red'
        }}>
        <View style={styles.icon}>
          <Image source={cod} style={{height: 50, width: 50}} />
          <AppTextBold style={{textAlign: 'center'}}>
            Cash on Delivery
          </AppTextBold>
        </View>
        <View style={styles.icon}>
          <Image source={quality1} style={{height: 50, width: 50}} />
          <AppTextBold style={{textAlign: 'center'}}>
            Premium Quality
          </AppTextBold>
        </View>
        <View style={styles.icon}>
          <Image source={quality} style={{height: 50, width: 50}} />
          <AppTextBold style={{textAlign: 'center'}}>
            36 hrs Exchange
          </AppTextBold>
        </View>

        <View style={styles.icon}>
          <Image source={tech} style={{height: 50, width: 50}} />
          <AppTextBold style={{textAlign: 'center'}}>
            Exclusive Products
          </AppTextBold>
        </View>
      </View>
    </View>
  );
};

export default CheckDelivery;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: colors.white,
    borderColor: colors.silver,
    borderWidth: 1,
    paddingHorizontal: 12,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 6,
  },
  input: {
    color: colors.darkGrayColor,
    width: '80%',
    fontFamily: 'Metropolis-SemiBold',
  },
  item: {
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '25%',
    gap: 12,
  },
  resultContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 8,
    paddingHorizontal: 12,
    paddingBottom: 2,
  },
});

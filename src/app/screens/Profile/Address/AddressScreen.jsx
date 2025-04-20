import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import GradientBar from '@/src/app/components/bars/gradientBar';
import colors from '@/src/app/constants/colors';
import Noaddress from '@/src/app/components/profile/profile/location/Noaddress';
import SavedAddress from '@/src/app/components/profile/profile/location/SavedAddress';
import {useRealm} from '@/src/app/utils/realm';
import getAddresses from '@/src/app/hooks/getAddresses';

const AddressScreen = () => {
  const [addresses, setAddresses] = useState([]);
  const realm = useRealm();
  const cachedAddresses = realm.objects('Address');
  const user = realm.objects('UserData').at(0);

  useEffect(() => {
    const fetchAddresses = async () => {
      const response = await getAddresses(realm, user?.id);
      if (response) {
        setAddresses(response);
      }
    };

    if (cachedAddresses.length > 0) setAddresses(cachedAddresses);
    else fetchAddresses();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: colors.lightBackground}}>
      <GradientBar name={'Saved Addresses'} />
      {addresses.length ? <SavedAddress addresses={addresses} /> : <Noaddress />}
    </View>
  );
};

export default AddressScreen;

const styles = StyleSheet.create({});

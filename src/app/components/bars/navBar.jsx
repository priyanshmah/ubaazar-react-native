import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ubaazar from '../text/ubaazar';
import {Bag, Menu, Notification, ShoppingBag} from '../../utils/icons';
import colors from '../../constants/colors';
import UbaazarImage from '@/src/app/assets/tab.png'
import Image from 'react-native-fast-image';

const NavBar = ({navigation}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 12,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
      }}>

      {/* <Pressable
      onPress={() => navigation.navigate('NotificationScreen')}
      style={{
        elevation: 2,
        backgroundColor: colors.white,
        borderRadius: 12,
        padding: 8,
      }}
        >
       <Notification color={colors.darkBlue} size={20} strokeWidth={1}/>

      </Pressable> */}

      {/* <View>
        <Ubaazar size={30} />
      </View> */}

      <Image 
      source={UbaazarImage}
      style={{
        width: '80%',
        aspectRatio: 4
     }}
      resizeMode='contain'
      />

      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>


      <View
      style={{
        elevation: 0,
        backgroundColor: colors.white,
        borderRadius: 12,
        padding: 6
      }}>
      <Pressable
        onPress={() => navigation.navigate('FavouriteScreen')}>
        <Ionicons name='heart-outline' size={25} color={colors.darkBlue} />
      </Pressable>
      </View>

      <View
      style={{
        elevation: 0,
        backgroundColor: colors.white,
        borderRadius: 12,
        padding: 6
      }}>
      <Pressable
        onPress={() => navigation.navigate('BagScreen')}>
        <Bag size={25} color={colors.darkBlue} />
      </Pressable>
      </View>
          </View>

    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  elevatedContainer: {
    borderRadius: 12,
    backgroundColor: colors.white,
    padding: 6,
    shadowColor: colors.darkBlue,
  },
});

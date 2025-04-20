import {StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useContext, useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../constants/colors';
import AppTextBold from '../text/appTextbold';
import LoginBottomSheet from '../login/Login';
import {Context} from '../../context/context';

const Options = ({navigation}) => {
  const [visible, setVisible] = useState(false);
  const {isLoggedIn} = useContext(Context);

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <AppTextBold style={{fontSize: 18}}>My Orders</AppTextBold>
      </View>
      <View style={{paddingHorizontal: 12}}>
        <Pressable
          onPress={() => {
            if (isLoggedIn) navigation.navigate('OrderScreen');
            else setVisible(true);
          }}
          style={styles.optionContainer}>
          <Ionicons
            name="cube-outline"
            size={25}
            color={colors.grayColor}
            style={styles.icon}
          />
          <View style={styles.iconContainer}>
            <AppTextBold style={{fontSize: 14}}>Orders</AppTextBold>
            <Feather name="chevron-right" size={25} color={colors.grayColor} />
          </View>
        </Pressable>

        <Pressable
          onPress={() => {
            if (isLoggedIn) navigation.navigate('FavouriteScreen');
            else setVisible(true);
          }}
          style={styles.optionContainer}>
          <Ionicons
            name="heart-outline"
            size={25}
            color={colors.grayColor}
            strokeWidth={1}
            style={styles.icon}
          />
          <View style={styles.iconContainer}>
            <AppTextBold style={{fontSize: 14}}>Favourites</AppTextBold>
            <Feather name="chevron-right" size={25} color={colors.grayColor} />
          </View>
        </Pressable>

        <Pressable
          onPress={() => {
            if (isLoggedIn) navigation.navigate('ExchangeScreen')
            else setVisible(true)
          }}
          style={styles.optionContainer}>
          <Ionicons
            name="cash-outline"
            size={25}
            color={colors.grayColor}
            strokeWidth={1}
            style={styles.icon}
          />
          <View style={styles.iconContainer}>
            <AppTextBold style={{fontSize: 14}}>Exhange & Refunds</AppTextBold>
            <Feather name="chevron-right" size={25} color={colors.grayColor} />
          </View>
        </Pressable>

        <Pressable
          onPress={() => {
            if (isLoggedIn) navigation.navigate('AddressScreen')
            else setVisible(true)
          }}
          style={styles.optionContainer}>
          <Ionicons
            name="location-outline"
            size={25}
            color={colors.grayColor}
            style={styles.icon}
          />
          <View style={styles.iconContainer}>
            <AppTextBold style={{fontSize: 14}}>Saved Addresses</AppTextBold>
            <Feather name="chevron-right" size={25} color={colors.grayColor} />
          </View>
        </Pressable>

        {/* <Pressable
          onPress={() => navigation.navigate('NotificationScreen')}
          style={styles.optionContainer}>
          <Ionicons
            name="notifications-outline"
            size={25}
            color={colors.grayColor}
            style={styles.icon}

          />
          <View style={styles.iconContainer}>
            <AppTextBold style={{fontSize: 14}}>Notifications</AppTextBold>
            <Feather
              name="chevron-right"
              size={25}
              color={colors.darkGrayColor}
              
            />
          </View>
        </Pressable> */}

        <Pressable
          onPress={() => {
            if (isLoggedIn) navigation.navigate('CouponScreen')
            else setVisible(true)
          }}
          style={styles.optionContainer}>
          <Ionicons
            name="ticket-outline"
            size={25}
            color={colors.grayColor}
            style={styles.icon}
          />
          <View style={styles.iconContainer}>
            <AppTextBold style={{fontSize: 14}}>Discount Coupons</AppTextBold>
            <Feather name="chevron-right" size={25} color={colors.grayColor} />
          </View>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate('ComplaintScreen')}
          style={styles.optionContainer}>
          <AntDesign
            name="customerservice"
            size={25}
            color={colors.grayColor}
            style={styles.icon}
          />
          <View style={[styles.iconContainer, { borderBottomWidth: 0}]}>
            <AppTextBold style={{fontSize: 14}}>Raise Complaint</AppTextBold>
            <Feather name="chevron-right" size={25} color={colors.grayColor} />
          </View>
        </Pressable>
      </View>
      <LoginBottomSheet visible={visible} setVisible={setVisible} />
    </View>
  );
};

export default Options;

const styles = StyleSheet.create({
  container: {
    paddingTop: 18,
    borderRadius: 18,
    // elevation: 4,
    backgroundColor: 'white',
    gap: 18,
  },
  heading: {
    paddingHorizontal: 18,
    borderLeftColor: colors.brightOrange,
    borderLeftWidth: 3,
    borderRadius: 2,
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '85%',
    borderBottomColor: colors.searchBarColor,
    borderBottomWidth: 1,
    paddingVertical: 12,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 12,
  },
  icon: {
    backgroundColor: colors.searchBarColor,
    padding: 6,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

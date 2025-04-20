import {StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useContext, useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/AntDesign';
import colors from '../../constants/colors';
import AppTextBold from '../text/appTextbold';
import {Context} from '../../context/context';
import DialogBox from '../ui/DialogBox';
import {useRealm} from '../../utils/realm';
import {clearTokens} from '../../utils/axios/TokenMethods';

const Options = ({navigation}) => {
  const {isLoggedIn, setIsLoggedIn} = useContext(Context);
  const [visible, setVisible] = useState(false);
  const realm = useRealm();
  const userData = realm.objects('UserData');

  const handleLogout = async () => {
    const isTokenCleared = await clearTokens();
    if (isTokenCleared) {
      realm.write(() => {
        if (userData) {
          realm.delete(userData);
        }
      });
      setIsLoggedIn(false);
    }
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <AppTextBold style={{fontSize: 18}}>More</AppTextBold>
      </View>
      <View style={{paddingHorizontal: 12}}>
        <Pressable
          onPress={() => navigation.navigate('AboutScreen')}
          style={styles.optionContainer}>
          <Ionicons
            name="information-circle-outline"
            size={25}
            color={colors.grayColor}
            style={styles.icon}
          />
          <View style={styles.iconContainer}>
            <AppTextBold style={{fontSize: 14}}>About us</AppTextBold>
            <Feather name="chevron-right" size={25} color={colors.grayColor} />
          </View>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate('TermsScreen')}
          style={styles.optionContainer}>
          <Ionicons
            name="document-text-outline"
            size={25}
            color={colors.grayColor}
            strokeWidth={1}
            style={styles.icon}
          />
          <View style={styles.iconContainer}>
            <AppTextBold style={{fontSize: 14}}>Terms of use</AppTextBold>
            <Feather name="chevron-right" size={25} color={colors.grayColor} />
          </View>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate('PrivacyScreen')}
          style={styles.optionContainer}>
          <Ionicons
            name="shield-checkmark-outline"
            size={25}
            color={colors.grayColor}
            strokeWidth={1}
            style={styles.icon}
          />
          <View style={styles.iconContainer}>
            <AppTextBold style={{fontSize: 14}}>Privacy policy</AppTextBold>
            <Feather name="chevron-right" size={25} color={colors.grayColor} />
          </View>
        </Pressable>

        {isLoggedIn && (
          <Pressable
            onPress={() => setVisible(true)}
            style={styles.optionContainer}>
            <FontAwesome
              name="logout"
              size={25}
              color={colors.grayColor}
              strokeWidth={1}
              style={styles.icon}
            />
            <View style={[styles.iconContainer, {borderBottomWidth: 0}]}>
              <AppTextBold style={{fontSize: 14}}>Logout</AppTextBold>
              <Feather
                name="chevron-right"
                size={25}
                color={colors.grayColor}
              />
            </View>
          </Pressable>
        )}
      </View>
      <DialogBox
        heading={'Abhi na jao chhod kar ke dil abhi bhara nahi!!! 💔😭'}
        message={"We'll wait... patiently"}
        isVisible={visible}
        onCancel={() => setVisible(false)}
        onConfirm={handleLogout}
        confirmText="Logout"
      />
    </View>
  );
};

export default Options;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 18,
    borderRadius: 12,
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

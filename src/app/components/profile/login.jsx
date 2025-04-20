import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useState} from 'react';
import colors from '../../constants/colors';
import AppTextBold from '../text/appTextbold';

import LoginBottomSheet from '../login/Login';
import {Context} from '../../context/context';
import {useNavigation} from '@react-navigation/native';
import {useRealm} from '../../utils/realm';
import getUser from '../../hooks/getUser';

const Login = () => {
  const [visible, setVisible] = useState(false);
  const {isLoggedIn} = useContext(Context);
  const navigation = useNavigation();
  const realm = useRealm();
  const userDetails = realm.objects('UserData').at(0);

  const fetchUser = async () => {
    await getUser(realm);
  };
  if (!userDetails) {
    fetchUser();
  }

  const handleLogin = () => {
    setVisible(true);
  };
  console.log("User deatisl: ", userDetails);
  
  return (
    <>
      <View style={styles.container}>
        {isLoggedIn ? (
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 18}}>
            <View style={styles.avatar}>
              <Text style={{
                color: colors.white,
                alignSelf: 'center',
                padding: 1,
                fontSize: 32,
                fontFamily: 'Metropolis-Medium'
              }}>
                {userDetails?.name?.at(0)?.toLocaleUpperCase()}
              </Text>
              </View>
            <View style={{flexWrap: 'wrap', alignSelf: 'flex-start', gap: 5}}>
              <AppTextBold style={{fontSize: 18}}>
                {userDetails.name}
              </AppTextBold>
              <TouchableOpacity
                onPress={() => navigation.navigate('EditScreen')}
                style={{
                  backgroundColor: colors.white,
                  borderRadius: 8,
                  padding: 6,
                  borderColor: colors.brightOrange,
                  borderWidth: 1,
                  minWidth: '80%',
                  maxWidth: '80%',
                }}>
                <AppTextBold
                  style={{
                    fontSize: 14,
                    color: colors.brightOrange,
                    textAlign: 'center',
                  }}>
                  Edit Profile
                </AppTextBold>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View>
            <AppTextBold style={styles.profileText}>My Profile</AppTextBold>
            <AppTextBold style={styles.text}>
              Login or signup to view your complete profile
            </AppTextBold>

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <AppTextBold
                style={{
                  fontSize: 18,
                  color: colors.brightOrange,
                  textAlign: 'center',
                }}>
                Login / Signup
              </AppTextBold>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <LoginBottomSheet visible={visible} setVisible={setVisible} />
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    padding: 12,
    // elevation: 5,
    backgroundColor: 'white',
    borderRadius: 12,
  },
  profileBox: {
    backgroundColor: colors.searchBarColor,
    borderRadius: 1000,
    padding: 12,
    flexShrink: 1,
  },
  button: {
    backgroundColor: colors.white,
    borderRadius: 6,
    paddingHorizontal: 24,
    paddingVertical: 8,
    marginVertical: 20,
    borderWidth: 1.5,
    borderColor: colors.brightOrange,
    width: '100%',
  },
  profileText: {
    fontSize: 24,
    flexWrap: 'wrap',
  },
  text: {
    color: colors.grayColor,
  },
  avatar: {
    height: 60,
    width: 60,
    backgroundColor: colors.brightOrange,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

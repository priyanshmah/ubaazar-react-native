import {Pressable, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import colors from '../../constants/colors';
import ProfileBar from '../../components/bars/profileBar';
import Login from '../../components/profile/login';
import Options from '../../components/profile/options';
import Terms from '../../components/profile/terms';
import {ScrollView} from 'react-native-gesture-handler';
import {useFocusEffect} from '@react-navigation/native';
import DialogBox from '../../components/ui/DialogBox';
import { useRealm } from '../../utils/realm';
import { Context } from '../../context/context';
import { clearTokens } from '../../utils/axios/TokenMethods';

const ProfileScreen = ({navigation}) => {

  const [visible, setVisible] = useState(false);
  const {setIsLoggedIn} = useContext(Context);
  const realm = useRealm();
  const userData = realm.objects('UserData');

  const handleDeleteAccount = async () => {
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

  useFocusEffect(() => {
    StatusBar.setBackgroundColor(colors.lightBackground);
    return () => StatusBar.setBackgroundColor(colors.white);
  });

  

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={{paddingBottom: 100, gap: 12}}>
          <Login navigation={navigation} />
          <Options navigation={navigation} />
          <Terms navigation={navigation} />

          <Pressable onPress={() => setVisible(true)}>
            <Text style={styles.red}>Delete my account</Text>
          </Pressable>
        </View>
        <DialogBox 
        heading={"Delete my account"}
        message={"We understand you want to delete your account. Just to confirm, are you absolutely sure?"}
        isVisible={visible}
        onCancel={() => setVisible(false)}
        onConfirm={handleDeleteAccount}
        />
      </ScrollView>
    </>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightBackground,
    flex: 1,
    padding: 12,
    paddingBottom: 75,
  },
  red: {
    color: colors.red,
    fontSize: 14,
    fontFamily: 'Metropolis-Medium',
    paddingHorizontal: 12
  },
});

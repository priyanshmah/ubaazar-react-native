import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../../constants/colors';
import CustomBar from '../../components/bars/customBar';
import AppTextBold from '../../components/text/appTextbold';
import {useNavigation} from '@react-navigation/native';
import {ErrorToast, SuccessToast} from '../../utils/toast/Toast';
import useUpdateUser from '../../hooks/useUpdateUser';
import {useRealm} from '../../utils/realm';
import Realm from 'realm';

const PersonalDetails = ({route}) => {
  const {id} = route.params; 
  const [name, setName] = useState('');
  const navigation = useNavigation();
  const realm = useRealm();  
  const [loading, setLoading] = useState(false);

  const handleContinue = async () => {
    if (!name) return;

    try {
      setLoading(true);
      await useUpdateUser({username: name});

      realm.write(() => {
        realm.create('UserData', {
          id,
          name
        }, Realm.UpdateMode.Modified)        
      });

      navigation.goBack();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <CustomBar name={'Personal Details'} />
      <View style={{justifyContent: 'space-between', flex: 1}}>
        <View>
          <View style={{padding: 20}}>
            <AppTextBold style={styles.mainText}>
              Let’s get personal ! 💖 What’s the name we’ll remember forever ?
              😊
            </AppTextBold>
          </View>

          <TextInput
            inputMode="text"
            maxLength={35}
            placeholder="Enter your name"
            placeholderTextColor={colors.silver}
            style={styles.input}
            value={name}
            autoFocus
            onChangeText={text => setName(text)}
            onSubmitEditing={handleContinue}
          />
        </View>
        <Pressable
          style={[
            styles.btn,
            {backgroundColor: name ? colors.darkBlue : colors.lightGrayColor},
          ]}
          onPress={handleContinue}>
          {loading ? (
            <ActivityIndicator size={'small'} color={colors.white} />
          ) : (
            <AppTextBold style={styles.btnText}>Done</AppTextBold>
          )}
        </Pressable>
      </View>
    </View>
  );
};

export default PersonalDetails;

const styles = StyleSheet.create({
  mainText: {
    fontSize: 16,
    color: colors.grayColor,
  },
  input: {
    marginHorizontal: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.silver,
    paddingLeft: 20,
    color: colors.darkGrayColor,
    fontFamily: 'Metropolis-Medium',
    fontSize: 16,
  },
  btn: {
    margin: 20,
    borderRadius: 12,
    padding: 12,
  },
  btnText: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 18,
  },
});

import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import CustomBar from '../../../components/bars/customBar';
import colors from '@/src/app/constants/colors';
import AppTextBold from '@/src/app/components/text/appTextbold';

const ComplaintScreen = () => {
  const [complaint, setComplaint] = useState('');

  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <CustomBar name={'Raise Complaints'} />
      <View style={{padding: 18}}>
        <AppTextBold style={{fontSize: 18, color: colors.brightOrange}}>
          Enter your Complaint
        </AppTextBold>
        <AppTextBold style={{fontSize: 12, color: colors.lightGrayColor}}>
          Your feedback helps us grow—tell us what went wrong!
        </AppTextBold>

        <View style={{paddingVertical: 18}}>
          <TextInput
            style={styles.textInput}
            multiline={true}
            numberOfLines={6}
            textAlignVertical="top"
            placeholder="Enter your complaint"
            value={complaint}
            onChangeText={value => setComplaint(value)}
            cursorColor={colors.darkGrayColor}
            placeholderTextColor={colors.grayColor}
            selectionColor={colors.darkGrayColor}
          />
        </View>
      </View>
      <View style={styles.btnContainer}>
        <Pressable style={[styles.btn, { backgroundColor: complaint ? colors.darkBlue : colors.silver }]}>
          <AppTextBold
            style={{color: colors.white, fontSize: 16, textAlign: 'center'}}>
            Raise Complaint
          </AppTextBold>
        </Pressable>
      </View>
    </View>
  );
};

export default ComplaintScreen;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: colors.lightBackground,
    color: colors.darkGrayColor,
    padding: 12,
    borderRadius: 18,
    textAlignVertical: 'top',
    fontFamily: 'Metropolis-Medium',
    minHeight: 100,
  },
  btnContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 12,
  },
  btn: {
    backgroundColor: colors.darkBlue,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

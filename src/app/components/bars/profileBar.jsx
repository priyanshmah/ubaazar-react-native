import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import colors from '../../constants/colors'
import AppTextBold from '../text/appTextbold'

const ProfileBar = ({ navigation }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 18 }}>
      <AppTextBold style={styles.profileText}>My Profile</AppTextBold>
      <Pressable onPress={() => navigation.navigate("SettingScreen")}>
        <Feather name="settings" size={25} color={colors.darkGrayColor}/>
      </Pressable>
    </View>
  )
}

export default ProfileBar

const styles = StyleSheet.create({
  profileText: {
    fontSize: 24
  }
})
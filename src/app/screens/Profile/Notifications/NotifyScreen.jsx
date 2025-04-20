import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomBar from '../../../components/bars/customBar'
import Nonotification from '@/src/app/components/profile/notifications/No-notification'
import colors from '@/src/app/constants/colors'

const NotifyScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <CustomBar name={"Notifications"}/>
      <Nonotification />
    </View>
  )
}

export default NotifyScreen

const styles = StyleSheet.create({})
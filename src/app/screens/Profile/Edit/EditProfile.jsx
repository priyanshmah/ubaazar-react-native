import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import CustomBar from '@/src/app/components/bars/customBar'
import colors from '@/src/app/constants/colors'

const EditProfile = () => {
    
  return (
    <View>
      <CustomBar name={"Edit Profile"}/>
    </View>
  )
}

export default EditProfile

const styles = StyleSheet.create({})
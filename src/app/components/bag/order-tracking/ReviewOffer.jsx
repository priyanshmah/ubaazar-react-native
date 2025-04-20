import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GiftBox from '@/src/app/assets/images/tracking/fashion-star.png'
import AppTextBold from '../../text/appTextbold'
import colors from '@/src/app/constants/colors'


const ReviewOffer = () => {
  return (
    <View style={{gap: 12}}>
        <AppTextBold style={styles.heading}>Ready to be a Fashion Star</AppTextBold>
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between'
    }}>
        <Image source={GiftBox} style={{height: 150, width: 180, objectFit: 'contain'}}/>
          <View style={{padding: 1, flex: 1}}>
            <Text style={styles.text}>Click a pic in your new look and see yourself featured on our app</Text>
          </View>
        </View>
        </View>
  )
}

export default ReviewOffer

const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        color: colors.pink,
        fontFamily: 'PassionOne-Regular',

    },
    text: {
        flexWrap: 'wrap',
        fontFamily: 'Metropolis-Medium',
        color: colors.darkGrayColor,
        fontSize: 12
    }
})
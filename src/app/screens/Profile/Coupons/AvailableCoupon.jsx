import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Coupon from '@/src/app/components/profile/profile/coupon/Coupon'
import AppTextBold from '@/src/app/components/text/appTextbold'
import colors from '@/src/app/constants/colors'

const AvailableCoupon = ({coupons}) => {
  return (
    <View style={{padding: 12, gap: 18}}>
        <View style={{
            flexDirection: 'row',
            gap: 8, alignItems: 'center', justifyContent: 'center'
        }}>
            <View 
            style={{
                height: 1,
                width: '50%',
                backgroundColor: colors.lightBackground,
                borderRadius: 12
            }}
            />
        <AppTextBold style={styles.heading}>AVAILABLE COUPONS</AppTextBold>
        <View 
            style={{
                height: 1,
                width: '50%',
                backgroundColor: colors.lightBackground,
                borderRadius: 12
            }}
            />
        </View>
       {
        coupons?.map((value, index) => {
            return <Coupon coupon={value} key={index}/>
        })
       }
    </View>
  )
}

export default AvailableCoupon

const styles = StyleSheet.create({
    heading: {
        fontSize: 14,
        color: colors.lightGrayColor,
        letterSpacing: 2,
        textAlign: 'center',
        padding: 1,
        opacity: 0.75
      },
})
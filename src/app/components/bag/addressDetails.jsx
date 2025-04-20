import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../constants/colors';
import AppTextBold from '../text/appTextbold';
import { Home, PhoneCall } from '../../utils/icons';
import AppText from '../text/appText';

const AddressDetails = ({address}) => {
    
  return (
    <View
              style={{
                paddingVertical: 12,
                backgroundColor: colors.white,
                borderRadius: 18,
                gap: 12,
              }}>
              <View
                style={{
                  //   paddingVertical: 12,
                  borderRadius: 18,
                  borderWidth: 0,
                  borderColor: colors.brightOrange,
                  gap: 12,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 12,
                    alignItems: 'flex-start',
                  }}>
                  <View style={styles.icon}>
                    <Home color={colors.grayColor} size={15} />
                  </View>
                  <View style={{justifyContent: 'center'}}>
                    <AppTextBold>{address?.name}</AppTextBold>
                    <AppText style={styles.text}>
                      {address?.area}, {address?.address}
                    </AppText>
                    <AppText style={styles.text}>
                      {address?.city}, {address?.state} - {address?.pincode}
                    </AppText>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    gap: 12,
                    alignItems: 'center',
                  }}>
                  <View style={styles.icon}>
                    <PhoneCall color={colors.grayColor} size={15} />
                  </View>
                  <AppTextBold>+91 {address?.mobileNumber}</AppTextBold>
                </View>
              </View>
            </View>
  )
}

export default AddressDetails

const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        color: colors.lightGrayColor,
        fontFamily: 'Metropolis-Medium',
      },
      icon: {
        padding: 8,
        borderRadius: 100,
        backgroundColor: colors.searchBarColor,
        height: 30,
        width: 30,
      },
})
import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import lights from '@/src/app/assets/animations/home/lights.json';
import colors from '../../constants/colors';

const Greeting = () => {
    const msg = 'If shopping was a sport, you’d already be a gold medalist!'
  return (
    <View style={{paddingVertical: 12}}>
            <View style={{flexDirection: 'row', gap: 24, justifyContent: 'space-between', alignItems: 'center'}}>
                <LottieView source={lights} style={{
                    height: 60, width: 60
                }}
                autoPlay
                />
                <Text style={{
                    fontFamily: 'PassionOne-Regular',
                    paddingHorizontal: 12,
                    // width: '80%',
                    textAlign: 'center',
                    color: colors.brightOrange,
                    fontSize: 28
                }}>Namaste ji</Text>
                <LottieView source={lights} style={{
                    height: 60, width: 60
                }}
                autoPlay
                />
                
            </View>
            <Text style={{
                fontFamily: 'Metropolis-SemiBold',
                color: colors.darkGrayColor,
                paddingHorizontal: 12,
                flexWrap: 'wrap',
                fontSize: 16
            }}>If shopping was a sport,<Text style={{color: colors.darkGrayColor}}> you’d already be a gold medalist!😊💖</Text></Text>
            </View>
  )
}

export default Greeting

const styles = StyleSheet.create({})
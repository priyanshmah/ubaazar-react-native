import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import women from '@/src/app/assets/images/home/fashion/model3.png'
import AppTextBold from '../../../text/appTextbold';
import Feather from 'react-native-vector-icons/Feather'

const backgroundColor = '#f4e3c9';
const mainColour = '#791418';

const Card1 = () => {
  return (
    <View>
      <View style={{
        flex: 1,
        backgroundColor,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // borderRadius: 18,
        // borderWidth: 0.5,
        borderColor: mainColour
      }}>
        
        <View style={{ paddingLeft: 12, paddingVertical: 12, flex: 1, justifyContent: 'space-between'}}>
        <Text style={{
            fontFamily: 'Metropolis-Bold',
            fontSize: 24,
            color: mainColour,
            textAlign: 'left'
        }}>
          Eyes on you!
        </Text>
        <Text style={{
            fontFamily: 'Metropolis-SemiBold',
            fontSize: 12,
            color: mainColour,
            textAlign: 'left',
        }}>
            Dress for the cameras, Ready for the world!
        </Text>

        <View style={{gap: 2}}>
        {/* <Text style={{
            fontFamily: 'Metropolis-SemiBold',
            fontSize: 12,
            color: mainColour,
            textAlign: 'left',
        }}>
            Dresses for the cameras, Ready for the world!
        </Text> */}

        <View
            style={{
              backgroundColor: mainColour,
              borderRadius: 10,
              paddingHorizontal: 12,
              paddingVertical: 6,
              alignSelf: 'flex-start',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <AppTextBold style={{color: 'white', padding: 1, fontSize: 14}}>
              Order now
            </AppTextBold>
            <View style={{flexDirection: 'row'}}>
              <Feather name="chevron-right" size={20} color={'white'} />
              <Feather
                name="chevron-right"
                size={20}
                color={'white'}
                style={{
                  position: 'absolute',
                  right: -6,
                }}
              />
            </View>
          </View>

        </View>

        </View>
        <Image 
        source={women}
        style={{
            height: 150,
            width: 150,
            objectFit: 'contain'
        }}
        />
      </View>
    </View>
  )
}

export default Card1

const styles = StyleSheet.create({})
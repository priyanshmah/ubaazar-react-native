import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import model from '@/src/app/assets/images/home/fashion/model04.webp';
import FastImage from 'react-native-fast-image';
import colors from '@/src/app/constants/colors';
import AppTextBold from '../../../text/appTextbold';
import Feather from 'react-native-vector-icons/Feather';

const mainColor = '#c30e0e';

const Card3 = () => {
  return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          borderRadius: 24,
          paddingHorizontal: 12,
        //   elevation: 1,
          backgroundColor: '#fffcf5',
          overflow: 'hidden',
          minHeight: 150
        }}>
        <View
          style={{
            paddingRight: 12,
            paddingVertical: 12,
            justifyContent: 'space-between',
            width: 200
          }}>
            <View>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 6
          }}>
            <Text
              style={{
                fontFamily: 'Metropolis-SemiBold',
                fontSize: 12,
                color: colors.grayColor,
                // textAlign: 'left',
              }}>
              Agar beauty ki koi 
            </Text>
            <Text
              style={{
                fontFamily: 'Metropolis-Bold',
                fontSize: 18,
                color: mainColor,
                // textAlign: 'left',
              }}>
              Definition
            </Text>
            <Text
              style={{
                fontFamily: 'Metropolis-SemiBold',
                fontSize: 12,
                color: colors.grayColor
              }}>
              hoti
            </Text>
          </View>
          <View style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            gap: 6
          }}>
            <Text
              style={{
                fontFamily: 'Metropolis-SemiBold',
                fontSize: 12,
                color: colors.grayColor,
              }}>
              toh aap uski best
            </Text>
            <Text
              style={{
                fontFamily: 'Metropolis-Bold',
                fontSize: 18,
                color: mainColor,
              }}>
              Example
            </Text>
            <Text
              style={{
                fontFamily: 'Metropolis-SemiBold',
                fontSize: 12,
                color: colors.grayColor,
              }}>
              hoti
            </Text>
          </View>
          </View>

          <View style={{gap: 2}}>
          

            <View
              style={{
                backgroundColor: mainColor,
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
        <FastImage
          source={model}
          style={{height: 150, width: 120, position: 'absolute', bottom: -0, right: -10}}
          resizeMode={FastImage.resizeMode.contain}
        />
    </View>
  );
};

export default Card3;

const styles = StyleSheet.create({});

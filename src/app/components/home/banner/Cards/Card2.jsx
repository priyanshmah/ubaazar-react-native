import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import women from '@/src/app/assets/images/home/fashion/model02.jpeg';
import AppTextBold from '../../../text/appTextbold';
import Feather from 'react-native-vector-icons/Feather';

const backgroundColor = '#f4e3c9';
const mainColour = '#791418';

const Card2 = () => {
  return (
    <View>
      <View
        style={{
          flex: 1,
          backgroundColor,
          flexDirection: 'row',
          justifyContent: 'space-between',
          // borderRadius: 24,
          overflow: 'hidden',
          borderColor: mainColour,
          // borderTopWidth: 0.5,
          // borderBottomWidth: 0.5,
        }}>
        <Image
          source={women}
          style={{
            height: 150,
            width: 150,
            objectFit: 'contain',
          }}
        />
        <View
          style={{
            gap: 24,
            paddingVertical: 12,
            justifyContent: 'space-between',
          }}>
          <View>
            <Text
              style={{
                fontFamily: 'Metropolis-Bold',
                fontSize: 20,
                color: mainColour,
                textAlign: 'right',
                paddingRight: 12
              }}>
              Beautiful things
            </Text>
            <Text
              style={{
                fontFamily: 'Metropolis-SemiBold',
                fontSize: 12,
                color: mainColour,
                textAlign: 'right',
                paddingRight: 12
              }}>
              never ask for attention
            </Text>
          </View>

          <View style={{gap: 2}}>
            <Text
              style={{
                fontFamily: 'Metropolis-SemiBold',
                fontSize: 12,
                color: mainColour,
                textAlign: 'left',
              }}>
              Steal the gaze, Effortlesly!
            </Text>

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
      </View>
    </View>
  );
};

export default Card2;

const styles = StyleSheet.create({});

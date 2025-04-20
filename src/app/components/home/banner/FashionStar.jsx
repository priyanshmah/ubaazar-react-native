import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import model from '@/src/app/assets/images/home/fashion/model01.jpeg';
import AppTextBold from '../../text/appTextbold';
import Feather from 'react-native-vector-icons/Feather';

const MainColour = '#4f9772';
const backgroundColor = '#fbfbf1';

const FashionStar = () => {
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
          // borderWidth: 0.5,
          borderColor: MainColour,
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor,
            paddingLeft: 12,
            paddingVertical: 12,
            gap: 12,
          }}>
          <View>
            <Text
              style={{
                color: MainColour,
                fontFamily: 'Metropolis-Medium',
                fontSize: 12,
              }}>
              Millions of people are
            </Text>
            <Text
              style={{
                color: MainColour,
                fontFamily: 'Metropolis-Bold',
                fontSize: 24,
              }}>
              Waiting for you!
            </Text>
          </View>

          <View>
            <Text
              style={{
                color: MainColour,
                fontFamily: 'Metropolis-Medium',
                fontSize: 10,
              }}>
              Buy now. Post your picture in review. Featured on our app
            </Text>
          </View>

          <View
            style={{
              backgroundColor: MainColour,
              borderRadius: 12,
              paddingHorizontal: 12,
              paddingVertical: 6,
              alignSelf: 'flex-start',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 6,
            }}>
            <AppTextBold style={{color: backgroundColor, padding: 1, fontSize: 14}}>
              Order now
            </AppTextBold>
            <View style={{flexDirection: 'row'}}>
              <Feather name="chevron-right" size={20} color={'#fbfbf1'} />
              <Feather
                name="chevron-right"
                size={20}
                color={backgroundColor}
                style={{
                  position: 'absolute',
                  right: -6,
                }}
              />
            </View>
          </View>
        </View>
        <Image
          source={model}
          style={{
            width: 150,
            aspectRatio: 1 / 1,
            objectFit: 'contain',
            alignSelf: 'flex-end',
          }}
        />
      </View>
    </View>
  );
};

export default FashionStar;

const styles = StyleSheet.create({
  step: {
    height: 18,
    width: 18,
    backgroundColor,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

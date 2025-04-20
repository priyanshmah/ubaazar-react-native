import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '@/src/app/constants/colors';
import AppText from '../../text/appText';
import Shipping from '@/src/app/assets/icons/homeicons/shipping';
import Rupee from '@/src/app/assets/icons/homeicons/rupee';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';

const WelcomeOffer = () => {
  return (
    <View style={{paddingHorizontal: 12}}>
      <LinearGradient
        colors={[colors.lightPink, colors.white]}
        start={{x: 0, y: 0}}
        end={{x: 0.5, y: 0}}
        style={{
          width: '100%',
          maxHeight: 150,
          borderRadius: 18,
          backgroundColor: colors.white,
          elevation: 2,
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 0,
          borderColor: colors.brightOrange
        }}>
        <View
          style={{
            width: '10%',
            height: '100%',
            backgroundColor: colors.pink,
            borderTopLeftRadius: 18,
            borderBottomLeftRadius: 18,
            overflow: 'hidden',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={styles.verticalText}>WELCOME</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 12,
            width: '90%',
          }}>
          <View
            style={{
              padding: 1,
              justifyContent: 'center',
              alignItems: 'center',
              gap: 12,
            }}>
            <Rupee size={50} />
            <View>
              <Text
                style={{
                  color: colors.pink,
                  fontFamily: 'Metropolis-SemiBold',
                  fontSize: 18,
                }}>
                Flat ₹100 off
              </Text>
              <AppText
                style={{
                  color: colors.darkGrayColor,
                  fontSize: 12,
                  textAlign: 'center',
                }}>
                On your first order
              </AppText>
            </View>
          </View>

          <View style={{alignItems: 'center', gap: 4}}>
            <View style={{gap: 2}}>
              <View
                style={{
                  height: 4,
                  backgroundColor: colors.silver,
                  width: 1,
                }}
              />
              <View
                style={{
                  height: 4,
                  backgroundColor: colors.silver,
                  width: 1,
                }}
              />
              <View
                style={{
                  height: 4,
                  backgroundColor: colors.silver,
                  width: 1,
                }}
              />
              <View
                style={{
                  height: 4,
                  backgroundColor: colors.silver,
                  width: 1,
                }}
              />
              <View
                style={{
                  height: 4,
                  backgroundColor: colors.silver,
                  width: 1,
                }}
              />
            </View>
            <View
              style={{
                borderWidth: 1,
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
                borderColor: colors.silver,
              }}>
              <Feather name="plus" color={colors.silver} size={15} />
            </View>

            <View style={{gap: 2}}>
              <View
                style={{
                  height: 4,
                  backgroundColor: colors.silver,
                  width: 1,
                }}
              />
              <View
                style={{
                  height: 4,
                  backgroundColor: colors.silver,
                  width: 1,
                }}
              />
              <View
                style={{
                  height: 4,
                  backgroundColor: colors.silver,
                  width: 1,
                }}
              />
              <View
                style={{
                  height: 4,
                  backgroundColor: colors.silver,
                  width: 1,
                }}
              />
              <View
                style={{
                  height: 4,
                  backgroundColor: colors.silver,
                  width: 1,
                }}
              />
            </View>
          </View>

          <View
            style={{gap: 12, justifyContent: 'center', alignItems: 'center'}}>
            <Shipping size={50} />

            <View>
              <Text
                style={{
                  color: colors.pink,
                  fontFamily: 'Metropolis-SemiBold',
                  fontSize: 18,
                }}>
                Free delivery
              </Text>
              <AppText
                style={{
                  color: colors.darkGrayColor,
                  fontSize: 12,
                  textAlign: 'center',
                }}>
                On all orders
              </AppText>
            </View>
          </View>
        </View>
      </LinearGradient>
      <AppText
        style={{
          color: colors.lightGrayColor,
          textAlign: 'center',
          fontSize: 10,
          paddingTop: 6,
        }}>
        Use coupon code WELCOME100 on your first purchase to avail flat ₹100 off
        and free delivery
      </AppText>
    </View>
  );
};

export default WelcomeOffer;

const styles = StyleSheet.create({
  verticalText: {
    transform: [{rotate: '-90deg'}],
    color: colors.white,
    fontFamily: 'PassionOne-Regular',
    fontSize: 18,
    letterSpacing: 2,
    width: '500%',
    textAlign: 'center',
  },
});

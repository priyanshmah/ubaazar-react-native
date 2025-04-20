import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Truck from '../../../assets/images/tracking/truck.png';
import Product from '../../../assets/images/tracking/product.png';
import Gift from '../../../assets/images/tracking/gift.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '@/src/app/constants/colors';
import AppTextBold from '../../text/appTextbold';
import ProductSummary from '../productSummary';
import BillSummary from '../billSummary';
import AddressDetails from '../addressDetails';

const TrackingComponent = () => {
  const [labelWidth, setLabelWidth] = useState('');
  const handleLayout = event => {
    const {width} = event.nativeEvent.layout;
    setLabelWidth(width);
  };
  console.log('width: ', labelWidth);

  return (
    <View style={{gap: 20}}>
      <View>
        <AppTextBold style={{fontSize: 14, padding: 12}}>
          Where is my order ?
        </AppTextBold>
        <View
          style={{
            backgroundColor: colors.lightGreen,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 12,
          }}>
          <AppTextBold
            style={{color: colors.green, fontSize: 16, textAlign: 'center'}}>
            Order has been delivered on
          </AppTextBold>
          <AppTextBold style={{color: colors.green, fontSize: 32}}>
            4
            <AppTextBold style={{color: colors.green, fontSize: 32}}>
              {' '}
              May 2025, Thursday
            </AppTextBold>
          </AppTextBold>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 24,
        }}>
        <View onLayout={handleLayout}>
          <View style={[styles.imgContainer, {borderColor: colors.green}]}>
            <Image
              source={Gift}
              style={{height: '50', width: '50', objectFit: 'contain'}}
            />
          </View>
          <AppTextBold style={[styles.labelContainer, {width: labelWidth}]}>
            Order placed
          </AppTextBold>
        </View>

        <View
          style={{
            height: 2,
            width: '12%',
            backgroundColor: colors.green,
          }}
        />
        <View>
          <View style={[styles.imgContainer, {borderColor: colors.green}]}>
            <Image
              source={Truck}
              style={{height: 50, width: 50, objectFit: 'contain'}}
            />
          </View>
          <AppTextBold style={[styles.labelContainer, {width: labelWidth}]}>
            On the way
          </AppTextBold>
        </View>

        <View
          style={{
            height: 2,
            width: '12%',
            backgroundColor: colors.green,
          }}
        />

        <View>
          <View style={[styles.imgContainer, {borderColor: colors.green}]}>
            <Image
              source={Product}
              style={{height: 50, width: 50, objectFit: 'contain'}}
            />
          </View>
          <AppTextBold style={[styles.labelContainer, {width: labelWidth}]}>
            Delivered
          </AppTextBold>
        </View>
      </View>

      <View style={{padding: 24}}>
        <View style={styles.stepsContainer}>
          <AppTextBold>Order packed!</AppTextBold>
          <View style={styles.tick}>
            <Ionicons name="checkmark" size={20} color={colors.white} />
          </View>
          <View style={{paddingHorizontal: 12, paddingVertical: 24, gap: 4}}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 12}}>
              <AppTextBold style={{color: colors.grayColor}}>
                17 Jan
              </AppTextBold>
              <AppTextBold
                style={{
                  color: colors.grayColor,
                  fontFamily: 'Metropolis-Medium',
                }}>
                You placed this order
              </AppTextBold>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 12}}>
              <AppTextBold style={{color: colors.grayColor}}>
                17 Jan
              </AppTextBold>
              <AppTextBold
                style={{
                  color: colors.grayColor,
                  fontFamily: 'Metropolis-Medium',
                }}>
                Order confirmed!
              </AppTextBold>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 12}}>
              <AppTextBold style={{color: colors.grayColor}}>
                18 Jan
              </AppTextBold>
              <AppTextBold
                style={{
                  color: colors.grayColor,
                  fontFamily: 'Metropolis-Medium',
                }}>
                Order packed and shipped
              </AppTextBold>
            </View>
          </View>
        </View>

        <View style={styles.stepsContainer}>
          <AppTextBold>On the way</AppTextBold>
          <View style={styles.tick}>
            <Ionicons name="checkmark" size={20} color={colors.white} />
          </View>
          <View style={{paddingHorizontal: 12, paddingVertical: 24, gap: 4}}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 12}}>
              <AppTextBold style={{color: colors.grayColor}}>
                19 Jan
              </AppTextBold>
              <AppTextBold
                style={{
                  color: colors.grayColor,
                  fontFamily: 'Metropolis-Medium',
                }}>
                Reached at surat
              </AppTextBold>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 12}}>
              <AppTextBold style={{color: colors.grayColor}}>
                21 Jan
              </AppTextBold>
              <AppTextBold
                style={{
                  color: colors.grayColor,
                  fontFamily: 'Metropolis-Medium',
                }}>
                Shipped from Surat
              </AppTextBold>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 12}}>
              <AppTextBold style={{color: colors.grayColor}}>
                24 Jan
              </AppTextBold>
              <AppTextBold
                style={{
                  color: colors.grayColor,
                  fontFamily: 'Metropolis-Medium',
                }}>
                Soon arrived in Agra
              </AppTextBold>
            </View>
          </View>
        </View>

        <View style={[styles.stepsContainer, {borderLeftColor: colors.white}]}>
          <AppTextBold>Delivered</AppTextBold>
          <View style={styles.tick}>
            <Ionicons name="checkmark" size={20} color={colors.white} />
          </View>
          <View style={{padding: 12, gap: 4}}>
            <View
              style={{flexDirection: 'row', alignItems: 'flex-start', gap: 12}}>
              <AppTextBold style={{color: colors.grayColor}}>
                25 Jan
              </AppTextBold>
              <AppTextBold
                style={{
                  color: colors.grayColor,
                  fontFamily: 'Metropolis-Medium',
                }}>
                Your parcel has been delivered successfully!!!
              </AppTextBold>
            </View>
          </View>
        </View>
      </View>

      
    </View>
  );
};

export default TrackingComponent;

const styles = StyleSheet.create({
  imgContainer: {
    padding: 12,
    backgroundColor: colors.lightBackground,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors.lightBackground,
  },
  labelContainer: {
    position: 'absolute',
    textAlign: 'center',
    bottom: -24,
  },
  stepsContainer: {
    paddingHorizontal: 24,
    borderLeftWidth: 2,
    borderLeftColor: colors.green,
    minHeight: 50,
    position: 'relative',
  },
  tick: {
    position: 'absolute',
    top: -5,
    left: -15,
    zIndex: 10,
    backgroundColor: colors.green,
    margin: 0,
    borderRadius: 50,
    padding: 5,
  },
  
});

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import Offers from '@/src/app/assets/images/home/feed/best-choice.png';
import ForYou from '@/src/app/assets/images/home/feed/girl.jpeg';
import Premium from '@/src/app/assets/images/home/feed/premium3.png';
import Price from '@/src/app/assets/images/home/feed/discount5.png';
import BestSeller from '@/src/app/assets/images/home/feed/trending.webp';
import {ScrollView} from 'react-native-gesture-handler';
import colors from '@/src/app/constants/colors';
import CapitalHeading from '../../ui/CapitalHeading';
import GradientText from '../../text/gradientText';
import LinearGradient from 'react-native-linear-gradient';
import ColouredHeading from '../../ui/ColouredHeading';

const Options = () => {
  return (
    <View
      style={{
      }}>
      <ColouredHeading primaryText='Explore' secondaryText='everything'/>
     

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{gap: 12, flexDirection: 'row', padding: 12}}>
          {/* <View style={styles.container}>
          <FastImage
            source={ForYou}
            resizeMode="contain"
            style={{
              width: 60,
              height: 60,
            }}
          />
          <Text style={styles.heading}>For You</Text>
        </View> */}
          <View style={styles.containerWrapper}>
            <View style={styles.container}>
              <FastImage
                source={Offers}
                resizeMode="contain"
                style={{
                  width: 50,
                  height: 50,
                }}
              />
            </View>
            <Text style={styles.heading}>Best Choice</Text>
          </View>

          

          <View style={styles.containerWrapper}>
            <View style={styles.container}>
              <FastImage
                source={Premium}
                resizeMode="contain"
                style={{
                  width: 50,
                  height: 50,
                }}
              />
            </View>
            <Text style={styles.heading}>Premium</Text>
          </View>

          <View style={styles.containerWrapper}>
            <View style={styles.container}>
              <FastImage
                source={BestSeller}
                resizeMode="contain"
                style={{
                  width: 50,
                  height: 50,
                }}
              />
            </View>
            <Text style={styles.heading}>Best Seller</Text>
          </View>

          <View style={styles.containerWrapper}>
            <View style={styles.container}>
              <FastImage
                source={Price}
                resizeMode="contain"
                style={{
                  width: 50,
                  height: 50,
                }}
              />
            </View>
            <Text style={styles.heading}>Best Price</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Options;

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    elevation: 2,
    backgroundColor: colors.white,
    overflow: 'hidden',
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  heading: {
    fontFamily: 'Metropolis-SemiBold',
    color: colors.lightGrayColor,
    fontSize: 12,
  },
  containerWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  
});

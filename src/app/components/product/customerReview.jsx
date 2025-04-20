import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppTextBold from '../text/appTextbold';
import FontAwesome5 from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import colors from '../../constants/colors';
import {Star, StarHalf} from '../../utils/icons';
import review from '../../assets/reviews/review';
import {ScrollView} from 'react-native-gesture-handler';
import UbaazarWomen from '../../assets/ubaazar-women.png';

const CustomerReview = ({ rating=4.5 }) => {
  const fullStar = Math.floor(rating);
  const halfStar = rating - fullStar;

  return (
    <View style={styles.container}>
      <AppTextBold style={{fontSize: 18}}>Customer reviews</AppTextBold>
      <View style={{gap: 10}}>
        <View style={styles.starContainer}>
          {Array.from({length: fullStar}, (_, key) => (
            <View style={{padding: 1}} key={key}>
              <Star color={colors.gold} size={25} />
            </View>
          ))}
          {halfStar < 1 && (
            <View style={{padding: 1}}>
              <StarHalf color={colors.gold} size={25} />
            </View>
          )}
          <AppTextBold style={{color: colors.white}}>{rating} out of 5</AppTextBold>
        </View>
        <AppTextBold
          style={{fontSize: 12, color: colors.grayColor, textAlign: 'center'}}>
          This rating is calculated based on customer reviews via Whatsapp and
          Instagram Dms
        </AppTextBold>
      </View>

      <AppTextBold style={{fontSize: 18}}>
        What our customers feel about us ?
      </AppTextBold>
      <ScrollView horizontal>
        <View style={{flexDirection: 'row', gap: 12, alignItems: 'center'}}>
          {review.map((value, index) => {
            return (
              <View key={index} style={{gap: 12}}>
                <Image source={value.img} style={styles.img} />
                <View style={styles.customerName}>
                  <AppTextBold style={{color: colors.brightOrange}}>
                    {value.name}
                  </AppTextBold>
                  <AppTextBold style={{color: colors.grayColor}}>
                    from {value.place}
                  </AppTextBold>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Image
          source={UbaazarWomen}
          style={{height: 150, width: 150, objectFit: 'contain'}}
        />
        <View>
          <View style={{flexDirection: 'row', gap: 12}}>
            <Text style={styles.darkText}>Waiting</Text>
            <Text style={styles.lightText}>for</Text>
          </View>
          <View style={{flexDirection: 'row', gap: 12}}>
            <Text style={styles.lightText}>your</Text>
            <Text style={styles.darkText}>review</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CustomerReview;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    gap: 18,
  },
  starContainer: {
    backgroundColor: colors.pink,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
    flexDirection: 'row',
    gap: 6,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  img: {
    objectFit: 'contain',
    height: 300,
    width: 200,
    backgroundColor: '#fefce8',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.grayColor,
  },
  customerName: {
    gap: 4,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  darkText: {
    fontSize: 30,
    fontWeight: '600',
    color: colors.darkGrayColor,
    lineHeight: 35
  },
  lightText: {
    fontSize: 30,
    color: colors.silver,
    fontWeight: '600',
    lineHeight: 35
  },
});

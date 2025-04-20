import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import categories from '../../assets/images/categories/stories.js';
import Sarees from '../../assets/images/categories/1.png';
import Suits from '../../assets/images/categories/2.png';
import Cordset from '../../assets/images/categories/3.png';
import Lehangas from '../../assets/images/categories/4.png';
import Gown from '../../assets/images/categories/5.png';
import All from '../../assets/images/categories/fash.png';
import AppTextBold from '../text/appTextbold.jsx';
import colors from '../../constants/colors.js';
import {Pressable} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {
  setCategorisedProducts,
  setSelectedCategory,
} from '../../utils/redux/slice/FeedSlice.js';
import FastImage from 'react-native-fast-image';

const Categories = () => {
  const [selected, setSelected] = useState('all');
  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(setSelectedCategory({category: selected}));
  }, [selected]);


  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View
        style={[
          {
            flexDirection: 'row',
            gap: 12,
            paddingHorizontal: 12,
            borderBottomWidth: 1,
            borderBottomColor: colors.lightBackground,
          },
        ]}>
        <Pressable
          onPress={() => setSelected('all')}
          style={styles.container}>
          <View
            style={{
              padding: 6,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <FastImage
              source={All}
              style={{
                height: 50,
                width: 50,
              }}
              resizeMode="contain"
            />
          </View>
          <Text
            style={{
              fontFamily: 'Metropolis-SemiBold',
              fontSize: 12,
              color:
                selected === 'all'
                  ? colors.darkGrayColor
                  : colors.silver,
            }}>
            All
          </Text>
          <View
            style={[
              styles.bottomDiv,
              {
                backgroundColor:
                  selected === 'all' ? colors.brightOrange : colors.white,
              },
            ]}
          />
        </Pressable>

        <Pressable
          onPress={() => setSelected('sarees')}
          style={styles.container}>
          <View style={styles.imgContainer} />
          <FastImage source={Sarees} style={styles.image} />
          <Text
            style={{
              fontFamily: 'Metropolis-SemiBold',
              fontSize: 12,
              color:
                selected === 'sarees'
                  ? colors.darkGrayColor
                  : colors.silver,
            }}>
            Sarees
          </Text>
          <View
            style={[
              styles.bottomDiv,
              {
                backgroundColor:
                  selected === 'sarees' ? colors.brightOrange : colors.white,
              },
            ]}
          />
        </Pressable>

        <Pressable
          onPress={() => setSelected('suits')}
          style={styles.container}>
          <View style={styles.imgContainer} />
          <FastImage source={Suits} style={styles.image} />
          <Text
            style={{
              fontFamily: 'Metropolis-SemiBold',
              fontSize: 12,
              color:
                selected === 'suits'
                  ? colors.darkGrayColor
                  : colors.silver,
            }}>
            Suit & Kurtis
          </Text>
          <View
            style={[
              styles.bottomDiv,
              {
                backgroundColor:
                  selected === 'suits' ? colors.brightOrange : colors.white,
              },
            ]}
          />
        </Pressable>

        <Pressable
          onPress={() => setSelected('cordset')}
          style={styles.container}>
          <View style={styles.imgContainer} />
          <FastImage source={Cordset} style={styles.image} />
          <Text
            style={{
              fontFamily: 'Metropolis-SemiBold',
              fontSize: 12,
              color:
                selected === 'cordset'
                  ? colors.darkGrayColor
                  : colors.silver,
            }}>
            Cordset
          </Text>
          <View
            style={[
              styles.bottomDiv,
              {
                backgroundColor:
                  selected === 'cordset' ? colors.brightOrange : colors.white,
              },
            ]}
          />
        </Pressable>

        <Pressable
          onPress={() => setSelected('lehangas')}
          style={styles.container}>
          <View style={styles.imgContainer} />
          <FastImage source={Lehangas} style={styles.image} />
          <Text
            style={{
              fontFamily: 'Metropolis-SemiBold',
              fontSize: 12,
              color:
                selected === 'lehangas'
                  ? colors.darkGrayColor
                  : colors.silver,
            }}>
            Lehangas
          </Text>
          <View
            style={[
              styles.bottomDiv,
              {
                backgroundColor:
                  selected === 'lehangas' ? colors.brightOrange : colors.white,
              },
            ]}
          />
        </Pressable>

        <Pressable
          onPress={() => setSelected('gown')}
          style={styles.container}>
          <View style={styles.imgContainer} />
          <FastImage source={Gown} style={styles.image} />
          <Text
            style={{
              fontFamily: 'Metropolis-SemiBold',
              fontSize: 12,
              color:
                selected === 'gown'
                  ? colors.darkGrayColor
                  : colors.silver,
            }}>
            Gown
          </Text>
          <View
            style={[
              styles.bottomDiv,
              {
                backgroundColor:
                  selected === 'gown' ? colors.brightOrange : colors.white,
              },
            ]}
          />
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    gap: 6,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 6,
    paddingBottom: 0,
    minHeight: 80,
    minWidth: 80,
    backgroundColor: colors.white,
  },
  bottomDiv: {
    height: 3,
    width: '100%',
    // marginTop: 4,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  imgContainer: {
    // backgroundColor: '#FCE7C8',
    // height: 60,
    // width: 60,
    // borderRadius: 50,
    // position: 'absolute',
    // top: 20,
  },
  image: {
    height: 80,
    aspectRatio: 1,
    objectFit: 'cover',
    borderRadius: 100,
    backgroundColor: '#FCE7C8',
  },
});

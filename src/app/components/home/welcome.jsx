import {Dimensions, Image, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import colors from '../../constants/colors';
import {Pressable} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {useLoading} from '../../context/LoadingContext';
import FashionStar from './banner/FashionStar';
import Card1 from './banner/Cards/Card1';
import Card2 from './banner/Cards/Card2';
import WelcomeOffer from './banner/WelcomeOffer';
import updateMessage from '../../hooks/getUpdateMessage';
import FastImage from 'react-native-fast-image';
import {useRealm} from '../../utils/realm';
import Card3 from './banner/Cards/Card3';
import GradientText from '../text/gradientText';


const WelcomeComp = () => {
  const [randomMessage, setRandomMessage] = useState('');
  const navigation = useNavigation();
  const [count, setCount] = useState(0);
  const [time, setTime] = useState('');
  const realm = useRealm();

  useEffect(() => {
    const {appOpenCount, hour} = updateMessage(realm);
    setCount(appOpenCount);

    if (hour > 3 && hour < 10) setTime('morning');
    else if (hour > 21 || hour <= 3) setTime('night');
    else setTime('other');
  }, []);

  useEffect(() => {
    if (time === 'morning') {
      setRandomMessage('good morning');
    } else if (time === 'night') {
      setRandomMessage('good night');
    } else {
      const randomIndex = Math.floor(Math.random() * greetMessage.length);
      setRandomMessage(greetMessage[randomIndex]);
    }
  }, [count, time]);

  return (
    <View
      style={{
        backgroundColor: colors.white,
        paddingVertical: 12
      }}>
      <GradientText text={randomMessage} />

      {count % 2 === 0 ? <WelcomeOffer /> : <FashionStar />}

    </View>
  );
};

const greetMessage = [
  'Swaagatam',
  'namaskar',
  'Pranam',
  'aadaab!',
  'kem choo',
  'Vanakkam',
  'welcome',
  'namaste',
  'hello ji',
  'hola !',
  'hey there',
  'cheers !',
];

export default WelcomeComp;

const styles = StyleSheet.create({
  text: {
    fontSize: 10,
    color: colors.silver,
    paddingHorizontal: 6,
    textAlign: 'center',
  },
});

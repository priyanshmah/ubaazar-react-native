import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useCallback} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import AppTextBold from '../text/appTextbold';
import colors from '../../constants/colors';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

const GradientBar = ({name}) => {
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      // Store previous styles manually
      const prevBackgroundColor = colors.white;
      const prevBarStyle = 'dark-content';
      const prevTranslucent = false;

      // Apply new styles
      StatusBar.setBackgroundColor('transparent', true); // Fully transparent
      StatusBar.setTranslucent(true);
      StatusBar.setBarStyle('light-content');

      return () => {
        // Reset styles to previous state
        StatusBar.setBackgroundColor(prevBackgroundColor, true);
        StatusBar.setBarStyle(prevBarStyle);
        StatusBar.setTranslucent(prevTranslucent);
      };
    }, []),
  );

  return (
    <>
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor={'transparent'}
      />
      <LinearGradient
        colors={[colors.pink, colors.brightOrange]}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        style={{
          width: '100%',
          height: 100,
          borderBottomRightRadius: 75,
          borderBottomLeftRadius: 0,
          backgroundColor: colors.white,
          padding: 18,
          justifyContent: 'flex-end',
          elevation: 2,
        }}>
        <View
          style={{
            flexDirection: 'row',
            gap: 12,
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <Feather
            name="chevron-left"
            size={25}
            color={colors.white}
            onPress={() => navigation.goBack()}
          />
          <AppTextBold style={styles.barText}>{name}</AppTextBold>
        </View>
      </LinearGradient>
    </>
  );
};

export default GradientBar;

const styles = StyleSheet.create({
  barText: {
    fontSize: 18,
    color: colors.white,
  },
});

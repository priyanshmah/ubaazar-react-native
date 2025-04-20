import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Svg, {LinearGradient, Stop, Defs, Text} from 'react-native-svg';
import colors from '../../constants/colors';
const {width} = Dimensions.get('window');

const GradientText = ({text}) => {
  return (
    <View style={{flex: 1, justifyContent: 1, alignItems: 'center'}}>
      <Svg height="60" width={width}>
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="100%" y2="0">
            <Stop offset="0%" stopColor={colors.pink} stopOpacity="1" />
            <Stop
              offset="100%"
              stopColor={colors.brightOrange}
              stopOpacity="1"
            />
          </LinearGradient>
        </Defs>
        <Text
          fill="url(#grad)"
          fontSize="28"
          fontWeight="bold"
          x={width / 2}
          y="30"
          textAnchor="middle"
          alignmentBaseline="middle"
          fontFamily="Pacifico-Regular"
          >
          {text}
        </Text>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({});

export default GradientText;

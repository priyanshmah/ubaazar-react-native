import React, {useState, useRef, useEffect} from 'react';
import {View, TextInput, Animated, StyleSheet, Pressable} from 'react-native';
import colors from '../../constants/colors';

const FloatingLabelInput = ({
  label,
  value,
  setValue,
  children,
  onBlur,
  isCompulsory,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const animatedLabelPosition = useRef(
    new Animated.Value(value ? 1 : 0),
  ).current;
  const inputRef = useRef(null);

  useEffect(() => {
    if (value) {
      handleFocus();
    }
  }, [value])


  useEffect(() => {
    if (isFocused) {
      inputRef.current?.focus();
    }
    Animated.timing(animatedLabelPosition, {
      toValue: isFocused || value ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isFocused]);

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(animatedLabelPosition, {
      toValue: Math.round(1),
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (!value) {
      Animated.timing(animatedLabelPosition, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
    
  };

  const labelWrapperStyle = {
    position: 'absolute',
    top: animatedLabelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [10, -12],
    }),
    left: children ? 36 : 10,
    backgroundColor: colors.white, 
    zIndex: 10,
  };

  const labelStyle = {
    fontSize: animatedLabelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [14, 12],
      // Adjust font size for label movement
    }),
    color: isFocused ? colors.grayColor : colors.lightGrayColor,
    paddingHorizontal: 6,
    fontFamily: 'Metropolis-Medium',
  };

  return (
    <Animated.View
      style={[
        styles.container,
        {borderColor: isFocused ? colors.grayColor : colors.lightGrayColor},
      ]}>
        <Pressable onPress={handleFocus} >
      <Animated.View style={labelWrapperStyle}>
          <Animated.Text  style={labelStyle}>
            {label}
            {isCompulsory && (
              <Animated.Text
                style={{
                  fontSize: 16,
                  baselineShift: 'super',
                  fontFamily: 'Metropolis-SemiBold',
                }}>
                *
              </Animated.Text>
            )}
          </Animated.Text>
      </Animated.View>
        </Pressable>

      {children && (
        <View
          style={{
            borderRightWidth: 0,
            borderColor: colors.lightGrayColor,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            paddingHorizontal: 6,
            // backgroundColor: 'red'
          }}>
          {children}
        </View>
      )}
      <TextInput
        ref={inputRef}
        value={value}
        onChangeText={setValue}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={[styles.input, { paddingHorizontal: !children && 12,     width: children ? '80%': '100%',
        }]}
        cursorColor={colors.darkGrayColor}
        {...props}
      />
      
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.grayColor,
    borderRadius: 8,
    flexDirection: 'row',
    gap: 4,
  },
  input: {
    height: 40,
    fontSize: 14,
    zIndex: 0,
    fontFamily: 'Metropolis-Medium',
    color: colors.darkGrayColor,
    // backgroundColor: 'gray'
  },
});

export default FloatingLabelInput;

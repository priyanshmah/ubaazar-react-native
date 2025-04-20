import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

export const Discount = ({size, color, strokeWidth, props}) => {
  return (
    <Svg
        height={size}
        width={size}
      viewBox="0 0 24 24"
      fill={"none"}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <Path d="M9 15l6 -6" />
      <Circle cx="9.5" cy="9.5" r=".5" fill={color} />
      <Circle cx="14.5" cy="14.5" r=".5" fill={color} />
      <Path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7a2.2 2.2 0 0 0 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1a2.2 2.2 0 0 0 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1" />
    </Svg>
  );
};

export const DiscountFilled = ({ size = 24, color = '#000000', ...props }) => {
    return (
      <Svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        {...props}
      >
        <Path
          d="M12 2L14.4 4.8C15.6 3.6 17.4 3 19.2 3L18 6L21 7.2C20.4 9 20.4 10.8 21 12.6L18 13.8L19.2 16.8C17.4 16.8 15.6 17.4 14.4 18.6L12 21L9.6 18.6C8.4 17.4 6.6 16.8 4.8 16.8L6 13.8L3 12.6C3.6 10.8 3.6 9 3 7.2L6 6L4.8 3C6.6 3 8.4 3.6 9.6 4.8L12 2Z"
          fill={color}
        />
        <Path
          d="M9.5 7.5L14.5 16.5"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <Path
          d="M9.5 15.5C10.3284 15.5 11 14.8284 11 14C11 13.1716 10.3284 12.5 9.5 12.5C8.67157 12.5 8 13.1716 8 14C8 14.8284 8.67157 15.5 9.5 15.5Z"
          fill="white"
        />
        <Path
          d="M14.5 9.5C15.3284 9.5 16 8.82843 16 8C16 7.17157 15.3284 6.5 14.5 6.5C13.6716 6.5 13 7.17157 13 8C13 8.82843 13.6716 9.5 14.5 9.5Z"
          fill="white"
        />
      </Svg>
    );
  };


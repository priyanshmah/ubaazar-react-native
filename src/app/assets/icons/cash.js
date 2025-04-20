import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Cash({size = 24, color = "currentColor", ...props}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-badge-indian-rupee"
      {...props}
    >
      <Path d="M3.85 8.62a4 4 0 014.78-4.77 4 4 0 016.74 0 4 4 0 014.78 4.78 4 4 0 010 6.74 4 4 0 01-4.77 4.78 4 4 0 01-6.75 0 4 4 0 01-4.78-4.77 4 4 0 010-6.76zM8 8h8M8 12h8" />
      <Path d="M13 17l-5-1h1a4 4 0 000-8" />
    </Svg>
  )
}

export default Cash;

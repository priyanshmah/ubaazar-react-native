module.exports = {
  presets: [
    '@react-native/babel-preset',
  ],
  plugins: [
    [
      "module-resolver", 
      {
        root: ["./"],
        extensions: [".js", ".ts", ".tsx", ".jsx"],
        alias: {
          "@": "./",
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
      },
    ],
    'react-native-reanimated/plugin',
  ],
};

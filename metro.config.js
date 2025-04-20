const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const defaultConfig = getDefaultConfig(__dirname);

// Merge configurations in one go
const config = mergeConfig(defaultConfig, {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: [...defaultConfig.resolver.assetExts.filter((ext) => ext !== 'svg'), 'lottie'],
    sourceExts: [...defaultConfig.resolver.sourceExts, 'svg'],
  },
});

// Apply nativewind with the merged config
module.exports = config;

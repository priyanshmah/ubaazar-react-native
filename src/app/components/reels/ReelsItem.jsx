import {Dimensions, View, StyleSheet} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {ShoppingBag} from '../../utils/icons';
import colors from '../../constants/colors';
import AppTextBold from '../text/appTextbold';
import SimilarProducts from './SimilarProducts';
import Actions from './Actions';
import {Pressable} from 'react-native-gesture-handler';
import Video from 'react-native-video';
import {useNavigation} from '@react-navigation/native';
import {useLoading} from '../../context/LoadingContext';
import getProductById from '../../hooks/getProductData';

const {height, width} = Dimensions.get('window');

const ReelsItem = ({reel, isPlaying}) => {
  const available = true;
  const videoRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const navigation = useNavigation();
  const {setLoading} = useLoading();

  const handlePressIn = () => {
    setPaused(true);
  };

  const handlePressOut = () => {
    setPaused(false);
  };

  const handleNavigation = async () => {
    const productId = reel.products?.at(0)?._id;
    if (!productId) {
      return;
    }

    try {
      setLoading(true);
      const productData = await getProductById(productId);
      setLoading(false);

      if (productData)
        navigation.navigate('ProductScreen', {
          data: productData,
        });

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (isPlaying && videoRef.current) {
      videoRef.current.seek(0); // Restart video when user swipes back
    }

  }, [isPlaying]);

  return (
    <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}>
      <View style={styles.container}>
        <Video
          ref={videoRef}
          source={{uri: reel.videoUrl}}
          style={styles.reel}
          paused={!isPlaying || paused}
          resizeMode="cover"
          onEnd={() => videoRef.current.seek(0)}
        />

        {/* Overlay Content */}
        <View style={styles.overlay}>
          <SimilarProducts products={reel.products} />
          <Actions url={reel.videoUrl}/>

          {/* Shop/Notify Button */}
          <Pressable onPress={handleNavigation}>
            <LinearGradient
              colors={[colors.darkPink, colors.orange]}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.button}>
              {available ? (
                <ShoppingBag
                  color={colors.white}
                  size={25}
                  strokeWidth={1.5}
                  style={{padding: 1}}
                />
              ) : (
                <Ionicons
                  name="notifications-outline"
                  size={25}
                  color={colors.white}
                />
              )}
              <AppTextBold style={styles.buttonText}>
                {available ? 'Shop now' : 'Notify me'}
              </AppTextBold>
            </LinearGradient>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

export default ReelsItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    height,
    backgroundColor: '#000000', // ✅ Background should be here
    alignItems: 'center',
    justifyContent: 'center',
  },
  reel: {
    height,
    width,
  },
  overlay: {
    position: 'absolute',
    bottom: 12,
    left: 6,
    width: '100%',
  },
  button: {
    width: '75%',
    padding: 8,
    borderRadius: 12,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: 'Fontspring-DEMO-cerapro-medium',
  },
});

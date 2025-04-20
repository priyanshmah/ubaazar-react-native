import {Dimensions, StatusBar, StyleSheet, View} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import getReels from '../../hooks/getReels';
import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';
import ReelsItem from '../../components/reels/ReelsItem';
import colors from '../../constants/colors';
import AppTextBold from '../../components/text/appTextbold';
import {FlatList} from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { setIsBottomTabsVisible } from '../../utils/redux/slice/AppDataSlice';

const {height, width} = Dimensions.get('window');

const Reels = () => {
  const navigation = useNavigation();
  const [reels, setReels] = useState([]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentReelIndex, setCurrentReelIndex] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {

    const fetchReels = async () => {
      const response = await getReels();
      setReels(response);
    };
    fetchReels();

  }, []);

  useFocusEffect(
    useCallback(() => {
      // Hide bottom tabs when the screen is focused

      return () => {
        // Show bottom tabs when the screen loses focus
      };
    }, [dispatch])
  );

  const onViewableItemsChanged = useCallback(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentReelIndex(viewableItems[0].index);
    }
  }, []);

   useFocusEffect(
      useCallback(() => {
        setIsPlaying(true)
        dispatch(setIsBottomTabsVisible({visible: false}));

        // Store previous styles manually
        const prevBackgroundColor = colors.white;
        const prevBarStyle = 'dark-content';
  
        // Apply new styles
        StatusBar.setBackgroundColor('#000000'); // Fully transparent
        StatusBar.setBarStyle('light-content');
  
        return () => {
          // Reset styles to previous state
          StatusBar.setBackgroundColor(prevBackgroundColor);
          StatusBar.setBarStyle(prevBarStyle);
          setIsPlaying(false)
          dispatch(setIsBottomTabsVisible({visible: true}));
        };
      }, [])
    );
  

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>

      {/* Top Navbar */}
      <View style={styles.navbar}>
        <AntDesign
          name="arrowleft"
          size={25}
          color={colors.white}
          onPress={() => navigation.navigate('Home')}
        />
        <AppTextBold style={{color: colors.white, fontSize: 18}}>
          Watch & Buy
        </AppTextBold>
      </View>

      <FlatList
        data={reels}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item, index}) => (
          <ReelsItem
            key={index}
            reel={item}
            isPlaying={isPlaying && index === currentReelIndex}
          />
        )}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        removeClippedSubviews
        initialNumToRender={3}
        maxToRenderPerBatch={5}
        windowSize={5}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{itemVisiblePercentThreshold: 50}}
      />
    </View>
  );
};

export default Reels;

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    padding: 12,
    gap: 12,
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 10,
    backgroundColor: '#000000',
    width: '100%',
  },
});

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  useNavigation,
  useNavigationState,
  useRoute,
} from '@react-navigation/native';
import House from '../../assets/icons/tabicons/home';
import Video from '../../assets/icons/tabicons/video';
import Blossom from '../../assets/icons/tabicons/blossom';
import Profile from '../../assets/icons/tabicons/profile';
import Animated, {useAnimatedStyle, withClamp, withSpring, withTiming} from 'react-native-reanimated';
import {Pressable} from 'react-native-gesture-handler';
import {ReelsIcon} from '../../utils/icons';
import colors from '../../constants/colors';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';

const BottomBar = () => {
  const visible = useSelector(state => state.appData.isBottomTabsVisible)
  const navigation = useNavigation();

  const activeTabName = useNavigationState(state => {
    const tabState = state.routes.find(r => r.name === 'Tabs')?.state;
    if (!tabState) return 'Home';
    const activeTabIndex = tabState.index;
    return tabState.routes[activeTabIndex].name;
  });

  console.log('active tab is: ', visible);

  const tabs = [
    {name: 'Home', icon: <House color={colors.pink} size={25} />, route: 'Home'},
    {name: 'Watch & Buy', icon: <ReelsIcon color={colors.pink} size={25} />, route: 'WatchNBuy'},
    {name: 'New Arrival', icon: <Blossom size={25} />, route: 'NewArrival'},
    {name: 'Profile', icon: <Profile color={colors.pink} size={25} />, route: 'Profile'},
  ];


  return (
      <Animated.View
        style={[
          {
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            gap: 12,
            width: '100%',
            display: visible === false ? 'none' : 'flex',
            // left: 0,
            // right: 0,
            paddingHorizontal: 12,
            paddingBottom: 12,
            backgroundColor: colors.white,
            alignItems: 'center',
            // borderTopLeftRadius: 24,
            // borderTopRightRadius: 24,
            // borderRadius: 24,
            elevation: 5,
            alignSelf: 'center',
            opacity: 1,
            borderWidth: 1,
            borderColor: colors.searchBarColor
          },
        ]}>
        {tabs.map((tab, index) => (
          <Pressable
            key={index}
            onPress={() => navigation.navigate('Tabs', {screen: tab.route})}
            style={{
              alignItems: 'center',
              gap: 6,
              justifyContent: 'space-around',
              opacity: 1,
              }}>
            <View
              style={[
                styles.topBar,
                {
                  backgroundColor:
                    tab.route === activeTabName ? colors.pink : colors.white,
                },
              ]}
            />
            {tab.icon}
            <Text
              style={{
                fontSize: 10,
                fontFamily:
                  tab.route === activeTabName
                    ? 'Metropolis-Bold'
                    : 'Metropolis-Medium',
                color:
                  tab.route === activeTabName ? colors.pink : colors.grayColor,
              }}>
              {tab.name}
            </Text>
          </Pressable>
        ))}
      </Animated.View>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  topBar: {
    height: 3,
    minWidth: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    marginBottom: 5,
  },
});

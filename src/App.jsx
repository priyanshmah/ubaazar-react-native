import React, {useEffect, useState} from 'react';
import {
  Alert,
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {ContextProvider} from './app/context/context';
import colors from './app/constants/colors';
import Route from './app/Route';
import {RealmContext} from './app/utils/realm';
import {LoadingProvider} from './app/context/LoadingContext';
import {Provider} from 'react-redux';
import store from './app/utils/redux/store';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import PermissionsScreen from './app/components/ui/notifications/NotificationScreen';
import { getMessaging } from '@react-native-firebase/messaging';
import notifee, {
  AndroidImportance
} from '@notifee/react-native';
import { getApp } from '@react-native-firebase/app';

const app = getApp();
const messaging = getMessaging(app);

const POST_NOTIFICATIONS_PERMISSION =
  PERMISSIONS.ANDROID.POST_NOTIFICATIONS ||
  'android.permission.POST_NOTIFICATIONS';

function App() {
  useEffect(() => {
    StatusBar.setBackgroundColor(colors.white);
  }, []);

  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
  }, []);

  const {RealmProvider} = RealmContext;
 
  const checkPermission = async () => {
    try {

     
      const result = await check(POST_NOTIFICATIONS_PERMISSION);
      

      if (result === RESULTS.GRANTED) {

        const token = await messaging.getToken();
        console.log('Notification token:', token);


      } else if (result === RESULTS.DENIED) {
        
        const result = await request(POST_NOTIFICATIONS_PERMISSION);
        
      }
    } catch (error) {
      console.error(error);
    }
  };

 

  useEffect(() => {
    checkPermission();
  }, []);

  useEffect(() => {

    const unsubscribe = messaging.onMessage(async remoteMessage => {
      
      await notifee.displayNotification({
        title: remoteMessage.notification.title,
        body: remoteMessage.notification.body,
        android: {
          channelId: 'default',
          // category: AndroidCategory.CALL,
          importance: AndroidImportance.HIGH,
          // visibility: AndroidVisibility.PUBLIC,
          // fullScreenAction: true,
          pressAction: {
            id: 'default',
          },
        },
      });
    });

    return unsubscribe;
  }, []);

  return (
    <GestureHandlerRootView>
      <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
        <LoadingProvider>
          <Provider store={store}>
            <ContextProvider>
              <RealmProvider>
                <NavigationContainer>
                  <Route />
                </NavigationContainer>
              </RealmProvider>
            </ContextProvider>
          </Provider>
        </LoadingProvider>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

export default App;

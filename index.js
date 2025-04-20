/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from '@/src/App';
import { name as appName } from './app.json';
// import './firebase-messaging';
import messaging from '@react-native-firebase/messaging';

// messaging().setBackgroundMessageHandler(async remoteMessage => {
//   console.log('Message handled in the background!', remoteMessage);
// });


// Define the handler function
const backgroundMessageHandler = async remoteMessage => {
  console.log('📩 Background FCM message:', remoteMessage);
  // You can add local notifications or other logic here
};

// Register the handler as the headless task
AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', () => backgroundMessageHandler);

// Also set it explicitly — this is necessary
messaging().setBackgroundMessageHandler(backgroundMessageHandler);

AppRegistry.registerComponent(appName, () => App);




  
// firebase-messaging.js

import messaging from '@react-native-firebase/messaging';
import { AppRegistry } from 'react-native';

// Define the handler function
const backgroundMessageHandler = async remoteMessage => {
  console.log('📩 Background FCM message:', remoteMessage);
  // You can add local notifications or other logic here
};

// Register the handler as the headless task
AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', () => backgroundMessageHandler);

// Also set it explicitly — this is necessary
messaging().setBackgroundMessageHandler(backgroundMessageHandler);

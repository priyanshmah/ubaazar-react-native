import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview'

const PaymentScreen = ({route}) => {

    const { uri } = route.params || {};
  console.log('Payment URL:', uri)


  return (
      <WebView 
        style={{ height: '100%', width: '100%' }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        renderLoading={() => (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Loading...</Text>
          </View>
        )}
      source={{ uri }}/>
  )
}

export default PaymentScreen

const styles = StyleSheet.create({})
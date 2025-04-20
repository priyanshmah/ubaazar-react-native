const updateMessage = (realm) => {
    const now = new Date();
    const hour = now.getHours();
  
    // Open a Realm instance
    realm.write(() => {
      // Find or create the AppData object
      let appData = realm.objects('AppData')[0];
      if (!appData) {
        appData = realm.create('AppData', { appOpenCount: 0, lastOpenedHour: hour });
      }
  
      // Increment the app open count
      appData.appOpenCount += 1;
      appData.lastOpenedHour = hour;
  
      console.log('open count:', appData.appOpenCount);
    });
  
    // Retrieve the updated data
    const appData = realm.objects('AppData')[0];
    return {
      appOpenCount: appData.appOpenCount,
      hour: appData.lastOpenedHour,
    };
  };
  
  export default updateMessage;
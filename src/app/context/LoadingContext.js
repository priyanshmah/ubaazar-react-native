import React, { createContext, useState, useContext } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import LoadingScreen from '../screens/loading/LoadingScreen';

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
      {loading && <LoadingScreen />}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);


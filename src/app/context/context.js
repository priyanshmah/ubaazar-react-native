import React, { createContext, useEffect, useState } from 'react';
import { getTokens } from '../utils/axios/TokenMethods';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginState = async() => {

      const { accessToken, refreshToken } = await getTokens();

      console.log("accessToken", accessToken);
      

      if (accessToken && refreshToken) setIsLoggedIn(true);
      else setIsLoggedIn(false)

    }
    checkLoginState();
  }, [])

  return (
    <Context.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </Context.Provider>
  );
};

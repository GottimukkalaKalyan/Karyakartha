import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isSubscriptionDone, setSubscriptionDone] = useState(true);

  const login = () => {
    setLoggedIn(true);
  };

  const completeSubscription = () => {
    setSubscriptionDone(true);
  };

  const logout = () => {
    setLoggedIn(false);
    // setSubscriptionDone(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, isSubscriptionDone, login, completeSubscription, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
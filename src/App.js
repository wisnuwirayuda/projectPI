import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Router from './router';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Router></Router>
      </NavigationContainer>
      <FlashMessage position="top"></FlashMessage>
    </>
  );
};

export default App;

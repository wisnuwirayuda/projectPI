import React from 'react';
import {Splash} from './pages';
import {GetStarted} from './pages';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';

const App = () => {
  return (
    <NavigationContainer>
      <Router></Router>
    </NavigationContainer>
  );
};

export default App;

import React from 'react';
import {Splash} from './pages';
import {GetStarted} from './pages';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <GetStarted></GetStarted>
    </NavigationContainer>
  );
};

export default App;

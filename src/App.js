import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Router from './router';
import FlashMessage from 'react-native-flash-message';
import {Provider, useSelector} from 'react-redux';
import store from './redux/store';
import {Loading} from './components';
import {LogBox} from 'react-native';

const MainApp = () => {
  const stateGlobal = useSelector(state => state);
  LogBox.ignoreLogs(['Setting a time'], ['Remote debugger']);
  return (
    <>
      <NavigationContainer>
        <Router></Router>
      </NavigationContainer>
      <FlashMessage position="top"></FlashMessage>
      {stateGlobal.loading && <Loading></Loading>}
    </>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <MainApp></MainApp>
    </Provider>
  );
};

export default App;

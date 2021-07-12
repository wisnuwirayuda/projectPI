import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Router from './router';
import FlashMessage from 'react-native-flash-message';
import {Provider, useSelector} from 'react-redux';
import store from './redux/store';
import {Loading} from './components';

const MainApp = () => {
  const stateGlobal = useSelector(state => state);
  console.log('state global: ', stateGlobal);
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

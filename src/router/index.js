import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  GetStarted,
  Login,
  Splash,
  Register,
  UploadPhoto,
  Doctor,
  Messages,
  News,
  ChooseDoctor,
  Chatting,
} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator
      tabBar={props => <BottomNavigator {...props}></BottomNavigator>}>
      <Tab.Screen name="Doctor" component={Doctor}></Tab.Screen>
      <Tab.Screen name="Messages" component={Messages}></Tab.Screen>
      <Tab.Screen name="News" component={News}></Tab.Screen>
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="MainApp">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="UploadPhoto"
        component={UploadPhoto}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="ChooseDoctor"
        component={ChooseDoctor}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="Chatting"
        component={Chatting}
        options={{headerShown: false}}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default Router;

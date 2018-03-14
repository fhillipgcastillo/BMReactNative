import React from 'react';
import {StackNavigator} from 'react-navigation';
import MainScreen from "../Screens/Main";

export default  RootNavigator = StackNavigator({
  Main: {screen: MainScreen},
  // Login: {screen: SplashScreen, name:"Login"}
},
{
  initialRouteName: 'Main',
});

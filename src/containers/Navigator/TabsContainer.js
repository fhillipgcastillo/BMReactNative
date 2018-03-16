import React, {PropTypes, Component} from 'react';
import {View, Text} from 'react-native';
import {DrawerNavigator} from 'react-navigation';
import DashboardScreen from '~/containers/Screens/Dashboard';
import ProductsScreen from '~/containers/Screens/ProductsScreen';

export default  TabsContainer = DrawerNavigator({
  Dashboard: {screen: DashboardScreen, name:'Dashboard'},
  Products: {screen: ProductsScreen, name:'Products'},
},
{
  initialRouteName: 'Products'
});

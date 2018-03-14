import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {StackNavigator} from 'react-navigation';
import ProductsContainer from '~/containers/Products/ProductsContainer';

export default ProductsScreen = StackNavigator({
  Products: {screen:ProductsContainer}
},
{
  initialRouteName: 'Products',
  title: 'Product Section'
});
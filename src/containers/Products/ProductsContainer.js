import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Products from '~/components/Products';

export default class ProductsContainer extends Component {
  static navigationOptions = {
    title: 'Products Section'
  };
  render(){
    return (
      <Products />
    )
  }
};
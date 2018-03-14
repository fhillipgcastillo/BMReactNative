import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class Sample extends Component{
  static navigationOptions = {
    title: 'Dashboard Sample'
  };
  render(){
    return (
      <View >
        <Text>Sample</Text>
        <Text>Sample</Text>
        <Text>Sample</Text>
        <Text>Sample</Text>
        <Text>Sample</Text>
        <Text>Sample</Text>
        <Text>Sample</Text>
        <Text>Sample</Text>
      </View>
    )
  }
}
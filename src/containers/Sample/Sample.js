import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class Sample extends Component{
  render(){
    console.log("Sample", this.props);
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
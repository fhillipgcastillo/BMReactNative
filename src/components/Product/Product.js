import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class Products extends Component {
  render(){
    return (
      <View style={{flex: 1, display: 'flex', flexDirection: 'row', justifyContent: "space-around"}}>
        <View style={{flex: 1, backgroundColor: 'grey', height: 70, maxWidth: 70, paddingHorizontal: 15, flexBasis: 1}}>
        </View>
        <View style={{flex: 1}}>
          <Text>{this.props.Name}</Text>
          <Text>{this.props.Brand}</Text>
          <Text>{this.props.BoughtPrice}</Text>
          <Text>{this.props.SellingPrice}</Text>
        </View>
      </View>
    )
  }
};
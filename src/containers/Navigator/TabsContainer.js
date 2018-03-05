import React, {PropTypes, Component} from 'react';
// import {View, Text} from 'react-native';
import Tabs from '~/components/Tabs/Tabs';

export default class TabsContainer extends Component {
  render(){
    return (
      <Tabs 
        onTabSelect={this.props.onTabSelect} 
        navigator={this.props.navigator} 
        activeTab={this.props.activeTab} />
    )
  }
}
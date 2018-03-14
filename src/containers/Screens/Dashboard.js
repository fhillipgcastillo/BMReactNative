import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {StackNavigator} from 'react-navigation';
import SampleContainer from '~/containers/Sample/Sample';

export default DashboardScreen = StackNavigator({
  Sample: {screen:SampleContainer}
},
{
  initialRouteName: 'Sample',
  title: 'Sample'
});
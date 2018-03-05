import React, {PropTypes, Component} from 'react';
import {View, Text} from 'react-native';
import Tabs from '~/components/Tabs/Tabs';

export default class TabsContainer extends Component {
  static defaultProps = {
    activeTab: 'home'
  };
  constructor(props){
    super(props);
    this.handleTabSelect = this.handleTabSelect.bind(this);
  }
  handleTabSelect = (navigate, activeTab) => {
    console.log('tab selected',  arguments);
    this.props.activeTab = activeTab;
  };
  render(){
    return (
    <Tabs 
        onSelectTab={this.handleTabSelect} 
        navigate={this.props.navigate} 
        activeTab={this.props.activeTab} />
    )
  }
}
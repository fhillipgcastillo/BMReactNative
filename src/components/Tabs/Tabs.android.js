import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  DrawerLayoutAndroid
} from 'react-native';
import Drawer from './Drawer';
import Sample from '~/containers/Sample/Sample';


export default class Tab extends Component{
  static defaultProps = {
    activeTab: "home"
  };
  render(){
    const closeDrawer = () => this.drawer.closeDrawer();
    const openDrawer = () => this.drawer.openDrawer();
    console.log("Tabs", this.props);
    return (
      <DrawerLayoutAndroid 
        ref={(drawer)=> this.drawer = drawer}
        drawerWidth={290}
        renderNavigationView={()=>(
          <Drawer 
            activeFooterTab={this.props.activeFooterTab}
            onSelectTab={this.props.onSelectTab}
            close={closeDrawer}/>
    	  )}
      >
        {this.props.activeTab === 'home'
    			? <Sample navigate={this.props.navigate} />/*<HomeContainer openDrawer={openDrawer} navigate={props.navigate} />*/
    			: <Text>Another</Text>/*<LeaderboardContainer openDrawer={openDrawer} navigate={props.navigate} />*/ }
      </DrawerLayoutAndroid>
    )
  }
};

Tab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  onSelectTab: PropTypes.func.isRequired
};

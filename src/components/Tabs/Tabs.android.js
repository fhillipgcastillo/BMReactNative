import React, {Component, PropTypes} from 'react';
import {
  View,
  Text,
  DrawerLayoutAndroid
} from 'react-native';
import Drawer from './Drawer';

export default class Tab extends Component{
  static defaultProps = {
    activeTab: "home"
  };
  render(){
    const closeDrawer = () => this.drawer.closeDrawer();
    const openDrawer = () => this.drawer.openDrawer();
    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        renderNavigationView={ () => {
          <Drawer 
            ref={(drawer)=> this.drawer = drawer}
            activeTab={this.props.activeTab}
            onSelectTab={this.props.onTabSelect}
            close={closeDrawer}
          />
        }}
      >
        {this.props.activeTab === 'home'
    			? <Text onPress={openDrawer}>Home</Text>/*<HomeContainer openDrawer={openDrawer} navigator={props.navigator} />*/
    			: <Text>Another</Text>/*<LeaderboardContainer openDrawer={openDrawer} navigator={props.navigator} />*/ }
      </DrawerLayoutAndroid>
    )
  }
};

// Tab.propTypes = {
//   activeTab: PropTypes.string.isRequired,
//   navigator: PropTypes.func.isRequired,
//   onSelectTab: PropTypes.func.isRequired
// };

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  DrawerLayoutAndroid
} from 'react-native';
import Drawer from './Drawer';
import Sample from '~/containers/Sample/Sample';
import {connect} from 'react-redux';
import {setActiveTab} from '~/redux/actions/tabs.dispatcher';

const ActiveDrawer = (activeTab, props) => {
  switch(activeTab){
    case "home":
      return <Sample navigate={props.navigate} />/*<HomeContainer openDrawer={openDrawer} navigate={props.navigate} />*/
    default:
      return <Text>Another</Text>/*<LeaderboardContainer openDrawer={openDrawer} navigate={props.navigate} />*/ 
  };
};

class Tab extends Component{
  componentDidMount(){
    const self = this;
    setTimeout(()=>{console.log("timeout");
      self.props.activeTab = "other";
      console.log(new Date());
    }, 5000);
  };
  render(){
    const closeDrawer = () => this.drawer.closeDrawer();
    const openDrawer = () => this.drawer.openDrawer();
    console.log("Tabs", this.props);
    
    console.log(new Date());
    
    return (
      <DrawerLayoutAndroid 
        ref={(drawer)=> this.drawer = drawer}
        drawerWidth={290}
        renderNavigationView={()=>(
          <Drawer 
            activeTab={this.props.activeTab}
            onSelectTab={this.props.onSelectTab}
            close={closeDrawer} />
    	  )} >
        {ActiveDrawer(this.props.activeTab, this.props)}
      </DrawerLayoutAndroid>
    )
  }
};

Tab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  onSelectTab: PropTypes.func.isRequired
};

const mapStateToProps = (state)=>{console.log("mapper", state.Tabs); return state.Tabs};

// const mapDispatchToProps = (dispatch)=> ({onSelectTab: setActiveTab});

export default connect(mapStateToProps, {onSelectTab: setActiveTab})(Tab);
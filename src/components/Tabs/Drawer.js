import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Text} from 'react-native';
import DrawerTab from "./Drawer.Tab";

const DrawerItem = (props) => {
  return (
    <DrawerTab 
      title={props.title}
      selected={props.activeTab === props.tabName}
      onPress={()=>{
        props.onSelectTab(props.tabName);
        props.close()
      }}
      iconName={props.iconName}
    />
  )
};

export default function Drawer (props){
  /*
    receive a list of Tabs with:
      title,
      tabName,
      onPressExtraCallback (optional)
      iconName,
      Component, (to be rendered when active)
  */
  const DrawerItems = [
    {
      title:"Dashboard",
      tabName:"home",
      iconName:"home",
      Component: undefined
    },
    {
      title:"Inventario",
      tabName:"inventory",
      iconName:"clipboard",
      Component: undefined
    },
    {
      title:"Other",
      tabName:"other",
      iconName:"user",
      Component: undefined
    },
    {
      title:"Config",
      tabName:"config",
      iconName:"cog",
      Component: undefined
    },
  ]
  return (
    <View style={{flex:1}}>
      { DrawerItems.map((item, $index)=>{
        return <DrawerItem key={$index} {...item} {...props} />
      }) }
    </View>
  )
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		
	}
})

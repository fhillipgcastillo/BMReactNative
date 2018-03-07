import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Text} from 'react-native';
import DrawerTab from "./Drawer.Tab";


export default function Drawer (props){
  return (
    <View style={{flex:1}}>
      <DrawerTab 
        title={"Dashboard"}
        selected={props.activeTab === "home"}
        onPress={()=>{
          props.onSelectTab("home");
          props.close()
        }}
        iconName="home"
      />
      <DrawerTab 
        title={"Inventario"}
        selected={props.activeTab === "inventario"}
        onPress={()=>{
          props.onSelectTab("inventario");
          props.close()
        }}
        iconName="rocket"
      />
      <DrawerTab 
        title={"Other"}
        selected={props.activeTab === "other"}
        onPress={()=>{
          props.onSelectTab("other");
          props.close()
        }}
        iconName="rocket"
      />
      <DrawerTab 
        title={"Other"}
        selected={props.activeTab === "other"}
        onPress={()=>{
          props.onSelectTab("other");
          props.close()
        }}
        iconName="rocket"
      />
      <DrawerTab 
        title={"Other"}
        selected={props.activeTab === "other"}
        onPress={()=>{
          props.onSelectTab("other");
          props.close()
        }}
        iconName="rocket"
      />
    </View>
  )
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		
	}
})

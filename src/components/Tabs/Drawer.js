import React, {Component, PropTypes} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import DrawerTab from "./Drawer.Tab";


export default function Drawer (props){
  return (
    <View>
      <DrawerTab 
        title={"Home"}
        selected={props.activeTab === "Home"}
        onPress={()=>{
          props.onSelectTab("home");
          props.close()
        }}
        iconName="home"
      />
      <DrawerTab 
        title={"Other"}
        selected={props.activeTab === "Other"}
        onPress={()=>{
          props.onSelectTab("other");
          props.close()
        }}
        iconName="trophy"
      />
    </View>
  )
};

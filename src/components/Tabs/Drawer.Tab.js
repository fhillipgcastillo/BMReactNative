import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors, fontSizes } from '~/styles';


// const Icon = (props)=>{
//   return (<Text style={{minHeight:props.size, minWidth:props.size, backgroundColor:props.color}}></Text>)
// };

export default function DrawerTab(props){
  const color = props.selected === true ? colors.blue : colors.primary;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={props.onPress} >
      <Icon
        name={props.iconName}
        size={35}
        color={color}
      />
      <Text 
        style={[{color}, styles.titleText]}
      >{props.title}</Text>
    </TouchableOpacity>
  );
};

DrawerTab.propTypes = {
  title: PropTypes.string.isRequired,
  selected:PropTypes.bool.isRequired,
  onPress:PropTypes.func.isRequired,
  iconName:PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container : {
		margin: 10,
		marginLeft: 20,
		flexDirection: 'row',
		alignItems: 'center',
	},
	titleText: {
		fontSize: fontSizes.secondary,
		marginLeft: 10
	}
});

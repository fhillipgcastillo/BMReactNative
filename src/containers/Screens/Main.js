import React from 'react';
// import {StackNavigator} from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import TabsContainer from '~/containers/Navigator/TabsContainer';


export default class MainScreen extends React.Component {
  static navigationOptions = {
    title: 'Administra Tu Negocio'
  };
  
  render() {
    console.log("main screen", this.props);
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TabsContainer navigate={navigate}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'stretch',
    justifyContent: 'center',
  },
});
import React from 'react';
// import {StackNavigator} from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import TabsContainer from '~/containers/Navigator/TabsContainer';


export default class MainScreen extends React.Component {
  static navigationOptions = {
    title: 'Administra Tu Negocio'
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <TabsContainer navigate={navigate} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
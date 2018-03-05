import React from 'react';
// import {StackNavigator} from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import TabsContainer from '~/containers/Navigator/TabsContainer';
import {Provider} from 'react-redux';
import store from '~/redux/store';

export default class MainScreen extends React.Component {
  static navigationOptions = {
    title: 'Administra Tu Negocio'
  };
  
  render() {
    console.log("main screen", this.props);
    const { navigate } = this.props.navigation;
    return (
      <Provider store={store} >
        <View style={styles.container}>
          <TabsContainer navigate={navigate}/>
        </View>
      </Provider>
      
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


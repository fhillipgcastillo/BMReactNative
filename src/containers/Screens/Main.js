import React from 'react';
// import {StackNavigator} from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import TabsContainer from '~/containers/Navigator/TabsContainer';
import {Provider} from 'react-redux';
import store from '~/redux/store';

export default class MainScreen extends React.Component {  
  render() {
    return (
      <Provider store={store} >
        <View style={styles.container}>
          <TabsContainer />
        </View>
      </Provider>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'stretch',
    justifyContent: 'center',
  },
});


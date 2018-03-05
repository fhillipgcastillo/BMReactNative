import React from 'react';
// import {StackNavigator} from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import TabsContainer from '~/containers/Navigator/TabsContainer';


export default class MainScreen extends React.Component {
  static navigationOptions = {
    title: 'Administra Tu Negocio'
  };
  static defaultProps = {
    activeTab: 'home'
  };
  constructor(props){
    super(props);
    this.handleTabSelect = this.handleTabSelect.bind(this);
  }
  handleTabSelect = () => {
    console.log('tab selected');
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TabsContainer 
        styles={{marginTop:50,backgroundColor:'black'}}
          onTabSelect={this.handleTabSelect} 
          navigate={navigate} 
          activeTab={this.props.activeTab}
        />
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
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import RootNavigator from './containers/Navigator/Navigator';
import MainScreen from "~/containers/Screens/Main";

class Splash extends React.Component {
  render(){
    return (
      <View>
        <Button onPress={this.props.handleLogin} title="Login"></Button>
      </View>
    )
  }
};

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      logedIn: true
    };
    this.handleLogin = this.handleLogin.bind(this);
  };
  handleLogin(){
    this.setState(()=>({logedIn: true}));
    console.log('stateChanged', this.state);
  };
  render(){
    console.log(this);
    return (this.state.logedIn 
      ? <MainScreen {...this.props}  />
      : <Splash handleLogin={this.handleLogin} />)
  }
} 
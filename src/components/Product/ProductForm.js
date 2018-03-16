import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

const PRODUCTS_KEY = `PRODUCTS`;
import DB from '~/services/db';

export default class ProductForm extends Component {
  componentWillMount(){
    this.resetInitialState();
    //if(this.props.productId) getById
  };
  resetInitialState = ()=>{
    this.setState({
      Id: 0,
      Name: "",
      Brand:"",
      BoughtPrice: 0,
      SellingPrice: 0
    });
  };
  validateForm = ()=>{
    return true
  };
  onSave = async ()=>{
    if(!this.validateForm()) return;

    let data = this.getConstructedModel();
    let d = DB.setByKeyName(PRODUCTS_KEY, data);
    
    if(d) {
      this.setState({Id: d.Id});
      this.onCancel()
    } else {
      Alert.alert("Info", "Could Not save");
    }
  };
  onCancel = ()=>{
    this.resetInitialState();
  };
  getConstructedModel = ()=>{
    return {
      Id: this.state.Id,
      Name: this.state.Name,
      Brand:this.state.Brand,
      BoughtPrice: this.state.BoughtPrice,
      SellingPrice: this.state.SellingPrice
    }
  };
  render(){
    return (
      <View style={{flex: 1, display: 'flex', justifyContent: "space-around", padding: 20}}>
        <View style={{flex: 1, display:'flex', alignContent:"center"}}>
          <Text>{"Name"}</Text>
            <TextInput value={this.state.Name}></TextInput>
          <Text>{"Brand"}</Text>
            <TextInput value={this.state.Brand}></TextInput>
          <Text>{"BoughtPrice"}</Text>
            <TextInput value={this.state.BoughtPrice}></TextInput>
          <Text>{"SellingPrice"}</Text>
            <TextInput value={this.state.SellingPrice}></TextInput> 
          <View style={{display:'flex', flexDirection:"row",  margin: 20, justifyContent:"center"}}>
            <Button style={{flex:1,  height: 10, marginRight: 20}} title="Cancel" onPress={()=>{}}/>
            <Button style={{flex:1,  height: 60}} title="Save" onPress={()=>{}}/>
          </View>
        </View>
        
      </View>
    )
  }
};
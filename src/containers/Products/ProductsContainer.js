import React, {Component} from 'react';
import {View, Text, Button, Alert, TextInput, AsyncStorage} from 'react-native';
import Product from '~/components/Product';
import ProductForm from '~/components/Product/ProductForm';
import DB from '~/services/db';


const MODES = {
  LIST: "LIST",
  CREATION:"CREATION",
  EDITION: "EDITION"
};
const PRODUCTS_KEY = `PRODUCTS`;

export default class ProductsContainer extends Component {
  state = {
    Products: [
      {
        Id: 1,
        Name:"Pasta Dental Regular",
        Brand:"Glister",
        BoughtPrice: 255,
        SellingPrice: 300,
      }
    ],
    searchValue: "",
    MODE: MODES.LIST,
    extra: ""
  };
  loadList = async ()=>{
    let products = DB.setByKeyName(PRODUCTS_KEY);
    console.log(products);
    this.setState({Products: products});
    
  };
  changeMode = (mode)=>{
    this.setState({MODE:mode});
    if(mode === MODES.LIST){ 
      this.loadList();
    }
  };
  render(){
    return (
      this.state.MODE === MODES.LIST ? 
      <View>
        <Text>{"saved: " + this.state.extra}</Text>
        <Text>{"Search: "}</Text><TextInput onChangeText={(newText)=>{this.setState({searchValue: newText})}} value={this.state.searchValue}></TextInput>
        <Button title="+" onPress={()=>{this.changeMode(`${MODES.CREATION}`)}} style={{width: 10}}>{" Add New"}</Button>
        <View style={{display: 'flex', alignContent: 'center', paddingHorizontal: 10}}>
          {this.state.Products.map((product) => (
            <Product key={product.Id} {...product} />
          ))}
        </View>
      </View>
    : this.state.MODE === MODES.CREATION 
    ? <ProductForm />
    : <View>
        <Button title="Back to list" onPress={()=>{this.changeMode(`${MODES.LIST}`)}} style={{width: 10}}>{" Add New"}</Button>
    </View> 
    )
  }
};
import React, {Component} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import Product from '~/components/Product';

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
    searchValue: ""
  };
  render(){
    return (
      <View>
        <Text>{"Search: "}</Text><TextInput onChangeText={(newText)=>{this.setState({searchValue: newText})}} value={this.state.searchValue}></TextInput>
        <Button title="+" onPress={()=>{}} style={{width: 10}}>{" Add New"}</Button>
        <View style={{display: 'flex', alignContent: 'center', paddingHorizontal: 10, justifyContent: 'space-around'}}>
          {this.state.Products.map((product) => (
            <Product key={product.Id} {...product} />
          ))}
        </View>
      </View>
    )
  }
};
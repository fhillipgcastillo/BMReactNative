import {AsyncStorage, Alert} from 'react-native';
const MainKey = "@BusinessManagement";

const getKey = (key)=>{
  return `${MainKey}:${key}`
};

export default {
  getByKey: async (key) =>{
    try {
      const values = await AsyncStorage.getItem( getKey(key));
      return values.json()
    } catch (error) {
      Alert.alert("Error", `Error while Saving with: ${error}`);
      return []
    }
  },
  setByKeyName: async (key, data)=>{
    try {
      let valuesStr = this.getByKey( getKey(key));
      let valuesObj = valuesStr ? JSON.parse(valuesStr) : [];
      
      if(data.Id > 0) data.Id = valuesObj.length;
      valuesObj.concat(data);

      await AsyncStorage.setItem( getKey(key), JSON.stringify(valuesObj));
      return data;
    } catch (error) {
      Alert.alert("Error", `Error while Saving`);
      return false;
    }
  },
  getByKeyQuery: (key, queryCallback) =>{
    let values = this.getByKey(key).filter(v => queryCallback);
    return value || [];
  }
};

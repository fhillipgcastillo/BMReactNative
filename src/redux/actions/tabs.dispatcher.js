import {SET_ACTIVE_TAB} from "./types";
import {setActiveTab as creators_setActiveTab} from './tabs.creator';

export const setActiveTab = (tab)=>{
  console.log("dispatcher tab", tab);
  return (dispatch)=> {
    dispatch(creators_setActiveTab(tab))
  }
}
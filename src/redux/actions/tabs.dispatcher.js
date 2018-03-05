import {SET_ACTIVE_TAB} from "./types";
import creators from './tabs.creator';

export const setActiveTab = (tab)=>{
  return (dispatch)=> {
    dispatch(creators.setActiveTab(tab))
  }
}
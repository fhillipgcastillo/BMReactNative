import {setActiveTab as creators_setActiveTab} from './tabs.creator';

export const setActiveTab = (tab)=>{
  return (dispatch)=> {
    dispatch(creators_setActiveTab(tab))
  }
}
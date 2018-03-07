import {Tabs} from "../actions/types";

const initialState = {
  activeTab: "home",
}
export default (state=initialState, action) => {
  switch (action.type) {
    case Tabs.SET_ACTIVE_TAB:
      return {...state, activeTab: action.payload};
    default:
      return state;
  }
}
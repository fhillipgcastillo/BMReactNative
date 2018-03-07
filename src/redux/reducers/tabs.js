import {SET_ACTIVE_TAB} from "../actions/types";

const initialState = {
  activeTab: "home",
}
export default (state=initialState, action) => {
  console.log("reducer receibe", action);
  switch (action.type) {
    case SET_ACTIVE_TAB:
      console.log("new state", {...state, activeTab: action.payload});
      return {...state, activeTab: action.payload};
    default:
      return state;
  }
}
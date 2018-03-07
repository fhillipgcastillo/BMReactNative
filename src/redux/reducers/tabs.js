import {SET_ACTIVE_TAB} from "../actions/types";

const initialState = {
  activeTab: "home",
}
export default (state=initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_TAB:
      return {...state, activeTab: action.payload};
    default:
      return state;
  }
}
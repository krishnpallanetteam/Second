import { combineReducers } from "redux";
import modelReducer from "./modelReducer";
import { routerReducer } from "react-router-redux";
import familyReducer from "./familyReducer";
import memberReducer from "./memberReducer";
import dropDownListReducer from "./dropDownListReducer";
import daughterReducer from "./daughterReducer";
// import { INITIAL_STATE } from './initialState';

const allReducers = combineReducers({
  model: modelReducer,
  router: routerReducer,
  family: familyReducer,
  member: memberReducer,
  dropDownList: dropDownListReducer,
  daughter : daughterReducer
});

export default (state, action) => {
  // if (action.type === BUSINESS_CHANGE_FROM_TOP_DROPDOWN) {
  //     state = {
  //         ...state,
  //         contactList: INITIAL_STATE.contactList
  //     };
  // }
  return allReducers(state, action);
};

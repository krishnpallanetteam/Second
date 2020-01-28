import {
  SAVE_DROPDOWN_LIST_DATA_TO_STORE
} from "../action/actionTypes";
import { INITIAL_STATE } from "../initialState";
export default (state = INITIAL_STATE.dropDownListData, action) => {
  console.log("inside", state, action.payload);
  switch (action.type) {
    case SAVE_DROPDOWN_LIST_DATA_TO_STORE: {
      // console.log(action);
      return {
        ...state,
        dropDownListData: {
          nativePlaceList: action.payload.data.nativePlaceList,
          occupationList: action.payload.data.occupationList,
          stateList: action.payload.data.stateList,
          cityList: action.payload.data.cityList,
          countryList: action.payload.data.countryList,
          relationList: action.payload.data.relationList,
          bloodGroupList: action.payload.data.bloodGroupList,
          eventList: action.payload.data.eventList,
          maritalStatusList: action.payload.data.maritalStatusList,
          zodiacList: action.payload.data.zodiacList
        }
      };
    }
    default:
      return state;
  }
};

import {
  ADD_MEMBER_DATA_TO_DAUGHTER_MEMBER_LIST,
  ADD_DAUGHTER_MEMBER_LIST,
  DELETE_DAUGHTER_MEMBER_LIST,
  DELETE_MEMBER_DATA_FROM_DAUGHTER_MEMBER_LIST
} from "../action/actionTypes";
import { INITIAL_STATE } from "../initialState";

export default (state = INITIAL_STATE.daughterForm, action) => {
  console.log("inside reducer", state, action);
  switch (action.type) {
    case ADD_DAUGHTER_MEMBER_LIST: {
      return {
        ...state,
        daughterlist: action.payload.data
      };
    }

    case DELETE_DAUGHTER_MEMBER_LIST: {
      return {
        ...state,
        daughterlist: action.payload.data
      };
    }

    case ADD_MEMBER_DATA_TO_DAUGHTER_MEMBER_LIST: {
      return {
        ...state,
        daughterlist: action.payload.data
      };
    }

    //   case UPDATE_MEMBER_DATA_TO_MEMBER_LIST: {
    //     return {
    //       ...state,
    //       memberList: action.payload.memberList
    //     };
    //   }

    case DELETE_MEMBER_DATA_FROM_DAUGHTER_MEMBER_LIST: {
      return {
        ...state,
        daughterlist: action.payload.data
      };
    }

    default:
      return state;
  }
};

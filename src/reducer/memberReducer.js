import {
  SAVE_MEMBER_DATA_TO_STORE,
  ADD_MEMBER_DATA_TO_MEMBER_LIST,
  UPDATE_MEMBER_DATA_TO_MEMBER_LIST,
  DELETE_MEMBER_DATA_FROM_MEMBER_LIST
  } from "../action/actionTypes";
  import { INITIAL_STATE } from "../initialState";
  
  export default (state = INITIAL_STATE.memberForm, action) => {
  console.log("inside", state, action.payload);
  switch (action.type) {
  case ADD_MEMBER_DATA_TO_MEMBER_LIST: {
  return {
  ...state,
  memberList: [...state.memberList, ...action.payload.data]
  };
  }
  
  case UPDATE_MEMBER_DATA_TO_MEMBER_LIST: {
  return {
  ...state,
  memberList: action.payload.memberList
  };
  }
  
  case DELETE_MEMBER_DATA_FROM_MEMBER_LIST: {
  return {
  ...state,
  memberList: action.payload.memberList
  };
  }
  
  // case SAVE_MEMBER_DATA_TO_STORE: {
  // return {
  // ...state,
  // memberDetail: {
  // firstName: action.payload.data.firstName,
  // middleName: action.payload.memberDetail.middleName,
  // lastName: action.payload.data.lastName,
  // relation: action.payload.data.relation,
  // bloodGroup: action.payload.data.bloodGroup,
  // dateOfBirth: action.payload.data.dateOfBirth,
  // studies: action.payload.data.studies,
  // mobileNo: action.payload.data.mobileNo,
  // gender: action.payload.data.gender,
  // eventMember: action.payload.data.eventMember,
  // anniversary: action.payload.data.anniversary,
  // maritalStatus: action.payload.data.maritalStatus
  // }
  // };
  // }
  
  default:
  return state;
  }
  };
  
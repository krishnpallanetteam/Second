import {
  ADD_MEMBER_DATA_TO_MEMBER_LIST,
  UPDATE_MEMBER_DATA_TO_MEMBER_LIST,
  DELETE_MEMBER_DATA_FROM_MEMBER_LIST
} from "./actionTypes";
import { axiosInstance } from "../api/axiosConfig";
import produce from "immer";

export const addUpdateMemberDataToMemberList = (memberIndex, dataObj) => {
  console.log("action", memberIndex, dataObj);
  let data = [
    {
      firstName: dataObj.firstName,
      middleName: dataObj.middleName,
      lastName: dataObj.lastName,
      relation: dataObj.relation,
      bloodGroup: dataObj.bloodGroup,
      dateOfBirth: dataObj.dateOfBirth,
      studies: dataObj.studies,
      mobileNo: dataObj.mobileNo,
      gender: dataObj.gender,
      eventMember: dataObj.eventMember,
      aadhaarNo: dataObj.aadhaarNo,
      maritalStatus: dataObj.maritalStatus,
      zodiac: dataObj.zodiac,
      anniversaryDate:
        dataObj.maritalStatus.toLowerCase() === "married"
          ? dataObj.anniversaryDate
          : ""
    }
  ];
  return (dispatch, getState) => {
    if (memberIndex === 0) {
      dispatch({
        type: ADD_MEMBER_DATA_TO_MEMBER_LIST,
        payload: { data }
      });
    } else {
      let allstate = getState();
      let memberList = allstate.member.memberList;
      memberList[memberIndex] = data[0];
      dispatch({
        type: UPDATE_MEMBER_DATA_TO_MEMBER_LIST,
        payload: { memberList }
      });
    }
  };
};

export const deleteMemberDataToMemberList = memberIndex => {
  console.log(memberIndex);
  return (dispatch, getState) => {
    let allstate = getState();
    let memberList = allstate.member.memberList;
    memberList.splice(memberIndex, 1);
    console.log("memberlist", memberList);
    dispatch({
      type: DELETE_MEMBER_DATA_FROM_MEMBER_LIST,
      payload: { memberList }
    });
  };
};


export const saveFamilyMemberData = (data) => {
  // console.log("action", data);
  return async (dispatch, getState) => {
    try {

      let stateData = getState();
      var familyDetail = {};
      familyDetail.familyId = stateData.family.basicDetail.familyId;
      familyDetail.memberDetail = data; 
      const response = await axiosInstance({
        url: "saveFamilyMember",
        method: "post",
        data: { family: familyDetail }
      });
      if (response.status === 200) {
        if (response.data.length > 1 && response.data[0]) {
            console.log(response);
            let responseData = response.data[0][0];
        }
        return response.data;
      } else if (response.status === 404) {
        return response;
      } else if (response.status === 500) {
        return response;
      }
    } catch (error) {
      return error;
    }
  };
};


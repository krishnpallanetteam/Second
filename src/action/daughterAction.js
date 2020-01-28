import { axiosInstance } from "../api/axiosConfig";
import produce from "immer";
import {
  ADD_MEMBER_DATA_TO_DAUGHTER_MEMBER_LIST,
  DELETE_MEMBER_DATA_FROM_DAUGHTER_MEMBER_LIST,
  ADD_DAUGHTER_MEMBER_LIST,
  DELETE_DAUGHTER_MEMBER_LIST
} from "./actionTypes";
import { jsonParseMethod } from "../utils/commonUtils";
import { getDate } from "date-fns";

export const addUpdateMemberDataToDaughterMemberList = (
  parentIndex,
  memberIndex,
  dataObj
) => {
  console.log(
    "parentIndex, memberIndex, dataObj",
    parentIndex,
    memberIndex,
    dataObj
  );
  let data = {
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
    maritalStatus: dataObj.maritalStatus,
    aadhaarNo: dataObj.aadhaarNo,
    anniversaryDate:
      dataObj.maritalStatus.toLowerCase() === "married"
        ? dataObj.anniversaryDate
        : ""
  };

  return (dispatch, getState) => {
    let stateData = getState();
    if (memberIndex) {
      const nextState = produce(stateData, draftState => {
        draftState.daughter.daughterlist[parentIndex].memberList[
          memberIndex
        ] = data;
      });
      dispatch({
        type: ADD_MEMBER_DATA_TO_DAUGHTER_MEMBER_LIST,
        payload: { data: nextState.daughter.daughterlist }
      });
    } else {
      const nextState = produce(stateData, draftState => {
        draftState.daughter.daughterlist[parentIndex].memberList.push(data);
      });
      dispatch({
        type: ADD_MEMBER_DATA_TO_DAUGHTER_MEMBER_LIST,
        payload: { data: nextState.daughter.daughterlist }
      });
    }
  };
};

export const deleteMemberDataToDaughterMemberList = (
  parentIndex,
  memberIndex
) => {
  return (dispatch, getState) => {
    let stateData = getState();
    const nextState = produce(stateData, draftState => {
      draftState.daughter.daughterlist[parentIndex].memberList.splice(
        memberIndex,
        1
      );
    });
    dispatch({
      type: DELETE_MEMBER_DATA_FROM_DAUGHTER_MEMBER_LIST,
      payload: { data: nextState.daughter.daughterlist }
    });
  };
};

export const addUpdateDaughterMemberList = (parentIndex, dataObj) => {
  console.log("action", parentIndex, dataObj);
  return (dispatch, getState) => {
    var data = {
      basicDetail: {
        familyId: dataObj.familyId,
        firstName: dataObj.firstName,
        middleName: dataObj.middleName,
        lastName: dataObj.lastName,
        email: dataObj.email,
        mobile: dataObj.mobile,
        residencePhone: dataObj.residencePhone,
        officePhone: dataObj.officePhone,
        nativePlaceId: dataObj.nativePlaceId,
        occupationId: dataObj.occupationId,
        dob: dataObj.dob,
        marriageDate: dataObj.marriageDate,
        motherName: dataObj.motherName,
        motherNativePlaceId: dataObj.motherNativePlaceId,
        eventHead: dataObj.eventHead,
        aadhaarNo: dataObj.aadhaarNo,
        otherOccupation: dataObj.otherOccupation
      },
      residenceDetail: {
        r_Address1: dataObj.r_Address1,
        r_Address2: dataObj.r_Address2,
        r_Address3: dataObj.r_Address3,
        r_CountryId: dataObj.r_CountryId,
        r_CityId: dataObj.r_CityId,
        r_StateId: dataObj.r_StateId,
        r_ZipCode: dataObj.r_ZipCode
      },
      officeDetail: {
        o_Address1: dataObj.o_Address1,
        o_Address2: dataObj.o_Address2,
        o_Address3: dataObj.o_Address3,
        o_CountryId: dataObj.o_CountryId,
        o_CityId: dataObj.o_CityId,
        o_StateId: dataObj.o_StateId,
        o_ZipCode: dataObj.o_ZipCode
      },
      memberList: []
    };
    var stateData = getState();
    data.memberList = stateData.daughter.daughterlist[parentIndex].memberList;
    let nextState = stateData.daughter.daughterlist;
    if (parentIndex) {
      nextState = produce(stateData, draftState => {
        draftState.daughter.daughterlist[parentIndex] = data;
      });
    } else {
      nextState = produce(stateData, draftState => {
        draftState.daughter.daughterlist.push(data);
      });
    }
    dispatch({
      type: ADD_DAUGHTER_MEMBER_LIST,
      payload: { data: nextState.daughter.daughterlist }
    });
  };
};

export const deleteDaughterMemberList = parentIndex => {
  return (dispatch, getState) => {
    let stateData = getState();
    const nextState = produce(stateData, draftState => {
      draftState.daughter.daughterlist.splice(parentIndex, 1);
    });
    dispatch({
      type: DELETE_DAUGHTER_MEMBER_LIST,
      payload: { data: nextState.daughter.daughterlist }
    });
  };
};

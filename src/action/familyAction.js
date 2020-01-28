import { axiosInstance } from "../api/axiosConfig";
import {
  SAVE_FAMILY_DATA_TO_STORE,
  SAVE_DROPDOWN_LIST_DATA_TO_STORE,
  ADD_DAUGHTER_MEMBER_LIST,
  ADD_MEMBER_DATA_TO_MEMBER_LIST,
  UPDATE_FAMILYID_TO_STORE
} from "./actionTypes";
import { jsonParseMethod } from "../utils/commonUtils";
import produce from "immer";
import { dummyData } from "../utils/constants";
import {compare } from "../utils/commonUtils";

export const getAllDropDownListData = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axiosInstance({
        url: "getFamilyFormDetail",
        method: "post"
      });
      if (response.status === 200) {
        if (response.data.length > 1 && response.data[0]) {
          // console.log(response);
          let data = jsonParseMethod(response.data[0][0]);
          // console.log(data);
          data.cityList = data.cityList.sort(compare);
          data.stateList = data.stateList.sort(compare);
          data.countryList = data.countryList.sort(compare);
          data.nativePlaceList = data.nativePlaceList.sort(compare);
          data.occupationList = data.occupationList.sort(compare);
          data.relationList = data.relationList.sort(compare);
          data.maritalStatusList = data.maritalStatusList.sort(compare);
          data.zodiacList = data.zodiacList.sort(compare);
          dispatch({
            type: SAVE_DROPDOWN_LIST_DATA_TO_STORE,
            payload: { data }
          });
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

// export const saveFamilyDataToStore = data => {
//   // console.log("action", data);
//   return dispatch => {
//     dispatch({
//       type: SAVE_FAMILY_DATA_TO_STORE,
//       payload: { data }
//     });
//   };
// };

export const saveFamilyDataToStore = (type, data) => {
  // console.log("action", data);
  return async (dispatch, getState) => {
    try {
      const response = await axiosInstance({
        url: "saveFamily",
        method: "post",
        data: { family: data }
      });
      if (response.status === 200) {
        if (response.data.length > 1 && response.data[0]) {
          console.log(response);
          let responseData = response.data[0][0];
          console.log(data);
          var stateData = getState();
          const nextState = produce(stateData, draftState => {
          draftState.family.basicDetail.familyId = responseData.familyId;
          draftState.family.basicDetail.firstName= data.firstName;
          draftState.family.basicDetail.middleName= data.middleName;
          draftState.family.basicDetail.lastName= data.lastName;
          draftState.family.basicDetail.email= data.email;
          draftState.family.basicDetail.mobile= data.mobile;
          draftState.family.basicDetail.residencePhone= data.residencePhone;
          draftState.family.basicDetail.officePhone= data.officePhone;
          draftState.family.basicDetail.nativePlaceId= data.nativePlaceId;
          draftState.family.basicDetail.occupationId= data.occupationId;
          draftState.family.basicDetail.dob= data.dob;
          draftState.family.basicDetail.marriageDate= data.marriageDate;
          draftState.family.basicDetail.motherName= data.motherName;
          draftState.family.basicDetail.motherNativePlaceId= data.motherNativePlaceId;
          draftState.family.basicDetail.eventHead=data.eventHead;
          draftState.family.basicDetail.aadhaarNo= data.aadhaarNo;
          draftState.family.basicDetail.otherOccupation=data.otherOccupation;
          draftState.family.basicDetail.bloodGroup=data.bloodGroup;
          draftState.family.basicDetail.maritalStatus=data.maritalStatus;
          draftState.family.basicDetail.zodiac=data.zodiac;
          draftState.family.residenceDetail.r_Address1= data.r_Address1;
          draftState.family.residenceDetail.r_Address2= data.r_Address2;
          draftState.family.residenceDetail.r_Address3= data.r_Address3;
          draftState.family.residenceDetail.r_CountryId= data.r_CountryId;
          draftState.family.residenceDetail.r_CityId= data.r_CityId;
          draftState.family.residenceDetail.r_StateId= data.r_StateId;
          draftState.family.residenceDetail.r_ZipCode=data.r_StateId;
          draftState.family.officeDetail.o_Address1= data.o_Address1;
          draftState.family.officeDetail.o_Address2= data.o_Address2;
          draftState.family.officeDetail.o_Address3= data.o_Address3;
          draftState.family.officeDetail.o_CountryId= data.o_CountryId;
          draftState.family.officeDetail.o_CityId= data.o_CityId;
          draftState.family.officeDetail.o_StateId= data.o_StateId;
          draftState.family.officeDetail.o_ZipCode=data.o_ZipCode;
          });
       
          dispatch({
            type: UPDATE_FAMILYID_TO_STORE,
            payload: { data: nextState.family }
          });
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

export const setWholeDataToStoreInitially = mobile => {
  console.log("********************************", mobile);
  return async (dispatch, getState) => {
    try {
      const response = await axiosInstance({
        url: "getFamilyByMobile",
        method: "post",
        data: { mobile: mobile }
      });
      if (response.status === 200) {
        
        if (response.data.length > 1 && response.data[0]) {
        
          
          let stateData = getState();
          const nextState = produce(stateData, draftState => {
            dummyData[0].daughterDetail.map(item =>
              draftState.daughter.daughterlist.push(item)
            );
          });
          
          var responseData = response.data[0][0];
          var responseResidenceData = response.data[0][0].ResidenceAddressDetail ? (JSON.parse(response.data[0][0].ResidenceAddressDetail))[0]:{} ;
          var responseOfficeData = response.data[0][0].OfficeAddressDetail ? (JSON.parse(response.data[0][0].OfficeAddressDetail))[0] : {};
          var responseMemberData = response.data[0][0].MemberDetail ? (JSON.parse(response.data[0][0].MemberDetail)) : {} ;
          var familyDetail = {
            familyId: responseData.FamilyId,
            firstName: responseData.FirstName,
            middleName: responseData.MiddleName,
            lastName: responseData.LastName,
            email: responseData.Email,
            mobile: responseData.Mobile,
            residencePhone: responseData.ResidencePhone,
            officePhone: responseData.OfficePhone,
            nativePlaceId: responseData.NativePlaceId,
            occupationId: responseData.OccupationId,
            dob: responseData.DOB,
            marriageDate: responseData.MarriageDate,
            motherName: responseData.MotherName,
            motherNativePlaceId: responseData.MotherNativePlaceId,
            eventHead: [],
            aadhaarNo: responseData.AadhaarNo,
            otherOccupation: responseData.OtherOccupation,
            bloodGroup: responseData.BloodGroup,
            maritalStatus: responseData.MaritalStatus,
            zodiac: responseData.Zodiac,
            r_Address1: responseResidenceData.Address1,
            r_Address2: responseResidenceData.Address2,
            r_Address3: responseResidenceData.Address3,
            r_CountryId: responseResidenceData.CountryId,
            r_CityId: responseResidenceData.CityId,
            r_StateId: responseResidenceData.StateId,
            r_ZipCode: responseResidenceData.ZipCode,
            o_Address1: responseOfficeData.Address1,
            o_Address2: responseOfficeData.Address2,
            o_Address3: responseOfficeData.Address3,
            o_CountryId: responseOfficeData.CountryId,
            o_CityId: responseOfficeData.CityId,
            o_StateId: responseOfficeData.StateId,
            o_ZipCode: responseOfficeData.ZipCode
          };
          if (familyDetail.mobile ==mobile) {
           debugger;
            dispatch({
              type: SAVE_FAMILY_DATA_TO_STORE,
              payload: { data: familyDetail }
            });
            dispatch({
              type: ADD_MEMBER_DATA_TO_MEMBER_LIST,
              payload: { data: (responseMemberData.length ==0 ?dummyData[0].memberList : responseMemberData) }
            });
            dispatch({
              type: ADD_DAUGHTER_MEMBER_LIST,
              payload: { data: nextState.daughter.daughterlist }
            });
          }
         
        }
        else
        {
          // dispatch({
          //   type: SAVE_FAMILY_DATA_TO_STORE,
          //   payload: { data: dummyData[0].family }
          // });
          // dispatch({
          //   type: ADD_MEMBER_DATA_TO_MEMBER_LIST,
          //   payload: { data: dummyData[0].memberList }
          // });
          // dispatch({
          //   type: ADD_DAUGHTER_MEMBER_LIST,
          //   payload: { data: dummyData[0].daughterDetail}
          // });
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

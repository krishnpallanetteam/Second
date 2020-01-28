import { SAVE_FAMILY_DATA_TO_STORE,UPDATE_FAMILYID_TO_STORE } from "../action/actionTypes";
import { INITIAL_STATE } from "../initialState";

export default (state = INITIAL_STATE.familyForm, action) => {
  // console.log("inside", state, action.payload);
   
  switch (action.type) {
    case SAVE_FAMILY_DATA_TO_STORE: {
      return {
        ...state,
        basicDetail: {
          familyId: action.payload.data.familyId,
          firstName: action.payload.data.firstName,
          middleName: action.payload.data.middleName,
          lastName: action.payload.data.lastName,
          email: action.payload.data.email,
          mobile: action.payload.data.mobile,
          residencePhone: action.payload.data.residencePhone,
          officePhone: action.payload.data.officePhone,
          nativePlaceId: action.payload.data.nativePlaceId,
          occupationId: action.payload.data.occupationId,
          dob: action.payload.data.dob,
          marriageDate: action.payload.data.marriageDate,
          motherName: action.payload.data.motherName,
          motherNativePlaceId: action.payload.data.motherNativePlaceId,
          eventHead: action.payload.data.eventHead,
          aadhaarNo: action.payload.data.aadhaarNo,
          otherOccupation: action.payload.data.otherOccupation,
          bloodGroup: action.payload.data.bloodGroup,
          maritalStatus: action.payload.data.maritalStatus,
          zodiac: action.payload.data.zodiac,
        },
        residenceDetail: {
          r_Address1: action.payload.data.r_Address1,
          r_Address2: action.payload.data.r_Address2,
          r_Address3: action.payload.data.r_Address3,
          r_CountryId: action.payload.data.r_CountryId,
          r_CityId: action.payload.data.r_CityId,
          r_StateId: action.payload.data.r_StateId,
          r_ZipCode: action.payload.data.r_ZipCode
        },
        officeDetail: {
          o_Address1: action.payload.data.o_Address1,
          o_Address2: action.payload.data.o_Address2,
          o_Address3: action.payload.data.o_Address3,
          o_CountryId: action.payload.data.o_CountryId,
          o_CityId: action.payload.data.o_CityId,
          o_StateId: action.payload.data.o_StateId,
          o_ZipCode: action.payload.data.o_ZipCode
        }
      };
    }
    case UPDATE_FAMILYID_TO_STORE: {
      return {
        ...state,
        basicDetail: action.payload.data.basicDetail,
        residenceDetail: action.payload.data.residenceDetail,
        officeDetail: action.payload.data.officeDetail,
      }
    }
    default:
      return state;
  }
};

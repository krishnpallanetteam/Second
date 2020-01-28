export const INITIAL_STATE = {
  modelA: {
    model_A: false,
    checkBox_status: false,
    allCountryList: undefined
    // selectedContact: undefined,
    // searchFieldValue: ''
  },
  modelB: {
    model_B: false,
    checkBox_status: false,
    usCountryList: undefined
    // selectedContact: undefined,
    // searchFieldValue: ''
  },
  modelC: {
    model_C: false,
    item: null
  },
  dropDownListData: {
    nativePlaceList: undefined,
    occupationList: undefined,
    stateList: undefined,
    cityList: undefined,
    countryList: undefined,
    relationList: undefined,
    bloodGroupList: undefined,
    eventList: undefined,
    maritalStatusList: undefined,
    zodiacList: undefined
  },
  familyForm: {
    basicDetail: {
      familyId: 0,
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      mobile: "",
      residencePhone: "",
      officePhone: "",
      nativePlaceId: "",
      occupationId: "",
      dob: "",
      marriageDate: "",
      motherName: "",
      motherNativePlaceId: "",
      eventHead: false,
      aadhaarNo: "",
      otherOccupation: "",
      bloodGroup: "",
      maritalStatus: "",
      zodiac: ""
    },
    residenceDetail: {
      r_Address1: "",
      r_Address2: "",
      r_Address3: "",
      r_CountryId: "",
      r_CityId: "",
      r_StateId: "",
      r_ZipCode: ""
    },
    officeDetail: {
      o_Address1: "",
      o_Address2: "",
      o_Address3: "",
      o_CountryId: "",
      o_CityId: "",
      o_StateId: "",
      o_ZipCode: ""
    }
  },
  memberForm: {
    memberDetail: {
      firstName: "",
      middleName: "",
      lastName: "",
      relation: "",
      bloodGroup: "",
      dateOfBirth: "",
      studies: "",
      mobileNo: "",
      gender: "male",
      eventMember: false,
      anniversaryDate: "",
      maritalStatus: "",
      aadhaarNo: "",
      zodiac :""
    },
    memberList: [
      {
        firstName: "",
        middleName: "",
        lastName: "",
        relation: "",
        bloodGroup: "",
        dateOfBirth: "",
        studies: "",
        mobileNo: "",
        gender: "male",
        eventMember: false,
        anniversaryDate: "",
        maritalStatus: "",
        aadhaarNo: "",
        zodiac :""
      }
    ]
  },
  daughterForm: {
    daughterlist: [
      {
        basicDetail: {
          familyId: 0,
          firstName: "",
          middleName: "",
          lastName: "",
          email: "",
          mobile: "",
          residencePhone: "",
          officePhone: "",
          nativePlaceId: "",
          occupationId: "",
          dob: "",
          marriageDate: "",
          motherName: "",
          motherNativePlaceId: "",
          eventHead: false,
          aadhaarNo: "",
          otherOccupation: "",
          bloodGroup: "",
          maritalStatus: "",
          zodiac: ""
        },
        residenceDetail: {
          r_Address1: "",
          r_Address2: "",
          r_Address3: "",
          r_CountryId: "",
          r_CityId: "",
          r_StateId: "",
          r_ZipCode: ""
        },
        officeDetail: {
          o_Address1: "",
          o_Address2: "",
          o_Address3: "",
          o_CountryId: "",
          o_CityId: "",
          o_StateId: "",
          o_ZipCode: ""
        },
        memberList: [
          {
            firstName: "",
            middleName: "",
            lastName: "",
            relation: "",
            bloodGroup: "",
            dateOfBirth: "",
            studies: "",
            mobileNo: "",
            gender: "male",
            eventMember: false,
            maritalStatus: "",
            anniversaryDate: "",
            aadhaarNo: ""
          }
        ]
      }
    ]
  }
};

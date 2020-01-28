export const PhoneRegExp = /^\d{10}$/;
export const ZipCodeRegExp = /^\d{6}$/;
export const AdhharRegExp = /^\d{12}$/;
export const dummyData = [
  {
    family: {
      familyId: 0,
      firstName: "john",
      middleName: "",
      lastName: "shah",
      email: "johnshah@email.com",
      mobile: "1234567891",
      residencePhone: "1111111111",
      officePhone: "",
      nativePlaceId: "1",
      occupationId: "1",
      dob: "1970/01/01",
      marriageDate: "2020/01/01",
      motherName: "johnmother",
      motherNativePlaceId: "1",
      eventHead: [],
      aadhaarNo: "123456789123",
      r_Address1: "head residense address 1",
      r_Address2: "residence address 1",
      r_Address3: "residence address 1",
      r_CountryId: "1",
      r_CityId: "1",
      r_StateId: "1",
      r_ZipCode: "313001",
      o_Address1: "head office address 1",
      o_Address2: "office address 2",
      o_Address3: "office address 3",
      o_CountryId: "1",
      o_CityId: "1",
      o_StateId: "1",
      o_ZipCode: "313001"
    },
    memberList: [
      {
        firstName: "nick",
        middleName: "",
        lastName: "shah",
        relation: "Son",
        dateOfBirth: "Mon Jan 01 1990 00:00:00 GMT+0530 (India Standard Time)",
        gender: "male",
        maritalStatus: "Single",
        anniversaryDate:
          "Thu Jan 01 1970 00:00:00 GMT+0530 (India Standard Time)",
        mobileNo: "1234567891",
        studies: "engineering",
        bloodGroup: "A+",
        eventMember: true,
        aadhaarNo: "123456789123"
      },
      {
        firstName: "george",
        middleName: "",
        lastName: "shah",
        relation: "Son",
        bloodGroup: "A+",
        dateOfBirth: "Mon Jan 01 1990 00:00:00 GMT+0530 (India Standard Time)",
        studies: "medical",
        mobileNo: "1234567891",
        gender: "male",
        eventMember: false,
        aadhaarNo: "123456789112",
        maritalStatus: "Single",
        anniversaryDate: ""
      }
    ],
    daughterDetail: [
      {
        basicDetail: {
          familyId: 0,
          firstName: "rihana",
          middleName: "",
          lastName: "shah",
          email: "rihanashs@gmail.com",
          mobile: "1234567891",
          residencePhone: "",
          officePhone: "",
          nativePlaceId: "1",
          occupationId: "2",
          dob: "Mon Jan 01 1990 00:00:00 GMT+0530 (India Standard Time)",
          marriageDate:
            "Wed Jan 01 2020 00:00:00 GMT+0530 (India Standard Time)",
          motherName: "shakira",
          motherNativePlaceId: "1",
          eventHead: false,
          aadhaarNo: "123456789123",
          otherOccupation: ""
        },
        residenceDetail: {
          r_Address1: "daughter address 1",
          r_Address2: "",
          r_Address3: "",
          r_CountryId: "1",
          r_CityId: "1",
          r_StateId: "1",
          r_ZipCode: "313001"
        },
        officeDetail: {
          o_Address1: "daughter office address 2",
          o_Address2: "",
          o_Address3: "",
          o_CountryId: "1",
          o_CityId: "1",
          o_StateId: "1",
          o_ZipCode: "313001"
        },
        memberList: [
          {
            firstName: "david",
            middleName: "",
            lastName: "shah",
            relation: "Brother",
            bloodGroup: "A+",
            dateOfBirth:
              "Tue Jan 01 1991 00:00:00 GMT+0530 (India Standard Time)",
            studies: "arts",
            mobileNo: "1234567890",
            gender: "male",
            eventMember: true,
            maritalStatus: "Single",
            aadhaarNo: "123456712222",
            anniversaryDate: ""
          }
        ]
      }
    ]
  }
];




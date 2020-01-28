export const jsonParseMethod = data => {
  var listObject = data;
  let stateList = JSON.parse(listObject.State);
  let cityList = JSON.parse(listObject.City);
  let occupationList = JSON.parse(listObject.Occupation);
  let nativePlaceList = JSON.parse(listObject.NativePlace);
  let eventList = JSON.parse(listObject.Event);
  let bloodGroupList = JSON.parse(listObject.BloodGroup);
  let relationList = JSON.parse(listObject.Relation);
  let countryList = JSON.parse(listObject.Country);
  let maritalStatusList = JSON.parse(listObject.MaritalStatus);
  let zodiacList = JSON.parse(listObject.Zodiac);
  
  
  return {
    stateList,
    cityList,
    occupationList,
    nativePlaceList,
    bloodGroupList,
    relationList,
    eventList,
    countryList,
    maritalStatusList,
    zodiacList
  }
};

export const  compare =( a, b ) => {
  if (a.Name !="OTHER") {
    if ( a.Name < b.Name ){
      return -1;
    }
    if ( a.Name > b.Name ){
      return 1;
    }
    return 0;  
  }
  else{
 return 2;
  
}
  
};

export const getFormattedDate = dateToFomat => {
  var dd = dateToFomat.getDate();
  var mm = dateToFomat.getMonth() + 1;
  var yyyy = dateToFomat.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  return yyyy + "/" + mm + "/" + dd;
};
 
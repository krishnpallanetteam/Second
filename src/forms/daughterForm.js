import React, { Component, Fragment } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withFormik } from "formik";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import { Typography, Divider, Button, withStyles } from "@material-ui/core";
import * as yup from "yup";
import {
  saveFamilyDataToStore,
  getAllDropDownListData
} from "../action/familyAction";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import MemberForm from "./memberForm";
import {
  addUpdateMemberDataToDaughterMemberList,
  deleteMemberDataToDaughterMemberList,
  addUpdateDaughterMemberList,
  deleteDaughterMemberList
} from "../action/daughterAction";
import { PhoneRegExp, ZipCodeRegExp, AdhharRegExp } from "../utils/constants";

const useStyles = theme => ({
  titleContainer: {
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(5)
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    },
    textAlign: "left"
  },

  titleContainer2: {
    [theme.breakpoints.down("up")]: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(3),
      textAlign: "left",
      marginTop: theme.spacing(3)
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(2),
      textAlign: "left",
      marginTop: theme.spacing(2)
    }
  },
  row: {
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6)
    }
  },
  paddingRight_16: {
    [theme.breakpoints.up("sm")]: {
      paddingRight: theme.spacing(2)
    }
  },
  paddingLeftRight_36: {
    [theme.breakpoints.up("sm")]: {
      paddingRight: theme.spacing(6),
      paddingLeft: theme.spacing(6)
    }
  }
});

class DaughterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: new Date()
    };
  }

  componentDidMount() {
    this.props.getAllDropDownListData();
  }
  render() {
    console.log(this.props);
    const {
      tabHandleChange,
      dataObj,
      formIndex,
      dropDownListData,
      classes,
      theme,
      values,
      touched,
      errors,
      dirty,
      isSubmitting,
      handleChange,
      handleBlur,
      handleSubmit,
      handleReset,
      addUpdateMemberDataToDaughterMemberList,
      deleteMemberDataToDaughterMemberList,
      deleteDaughterMemberList
    } = this.props;
    const { selectedDate } = this.state;
    console.log(this.props);
    return (
      <Fragment>
        <Grid container alignItems="center">
          <Grid item xs={12}>
            <form autoComplete="off" onSubmit={handleSubmit}>
              <Grid container alignItems="center">
                <Grid item xs={12}>
                  <Grid container alignContent="center" alignItems="center">
                    <Grid item xs={12} className={classes.titleContainer}>
                      <Typography gutterBottom color="primary">
                        BASIC DETAIL / મૂળભૂત વિગતો
                      </Typography>
                      <Divider />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      style={{ paddingTop: "8px", paddingBottom: "8px" }}
                    >
                      <Grid
                        container
                        className={classes.row}
                        justify="space-evenly"
                      >
                        <Grid
                          item
                          sm={3}
                          xs={11}
                          className={classes.paddingRight_16}
                        >
                          <TextField
                            fullWidth
                            id="mobile"
                            label="MOBILE NUMBER / મોબાઇલ નંબર"
                            value={values.mobile}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={!!touched.mobile && !!errors.mobile}
                            helperText={touched.mobile && errors.mobile}
                          />
                        </Grid>
                        <Grid
                          item
                          sm={3}
                          xs={11}
                          className={classes.paddingRight_16}
                        >
                          <TextField
                            fullWidth
                            id="firstName"
                            label="FIRST NAME / પ્રથમ નામ"
                            value={values.firstName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={!!touched.firstName && !!errors.firstName}
                            helperText={touched.firstName && errors.firstName}
                          />
                        </Grid>
                        <Grid
                          item
                          sm={3}
                          xs={11}
                          className={classes.paddingRight_16}
                        >
                          <TextField
                            fullWidth
                            id="middleName"
                            label="MIDDLE NAME / પિતાનું નામ"
                            value={values.middleName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={!!touched.middleName && !!errors.middleName}
                            helperText={touched.middleName && errors.middleName}
                          />
                        </Grid>
                        <Grid item sm={3} xs={11}>
                          <TextField
                            fullWidth
                            id="lastName"
                            label="LAST NAME / છેલ્લું નામ"
                            value={values.lastName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={!!touched.lastName && !!errors.lastName}
                            helperText={touched.lastName && errors.lastName}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      style={{ paddingTop: "8px", paddingBottom: "8px" }}
                    >
                      <Grid
                        container
                        // spacing={3}
                        className={classes.row}
                        justify="space-evenly"
                      >
                        <Grid
                          item
                          sm={3}
                          xs={11}
                          className={classes.paddingRight_16}
                        >
                          <TextField
                            fullWidth
                            id="fatherName"
                            label="FATHER NAME / પિતાનું નામ"
                            value={values.fatherName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={!!touched.fatherName && !!errors.fatherName}
                            helperText={touched.fatherName && errors.fatherName}
                          />
                        </Grid>

                        <Grid
                          item
                          sm={3}
                          xs={11}
                          className={classes.paddingRight_16}
                        >
                          <TextField
                            fullWidth
                            id="motherName"
                            label="MOTHER NAME / માતાનું નામ"
                            value={values.motherName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={!!touched.motherName && !!errors.motherName}
                            helperText={touched.motherName && errors.motherName}
                          />
                        </Grid>
                        <Grid
                          item
                          sm={3}
                          xs={11}
                          className={classes.paddingRight_16}
                        >
                          <TextField
                            fullWidth
                            id="nativePlaceId"
                            select
                            label="FATHER NATIVE PLACE / પિતાનો મૂળ સ્થાન"
                            value={values.nativePlaceId}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={
                              !!touched.nativePlaceId && !!errors.nativePlaceId
                            }
                            helperText={
                              touched.nativePlaceId && errors.nativePlaceId
                            }
                            SelectProps={{
                              native: true
                            }}
                          >
                            <option key={0} disabled selected />
                            {dropDownListData.nativePlaceList &&
                              dropDownListData.nativePlaceList.length > 0 &&
                              dropDownListData.nativePlaceList.map(option => (
                                <option key={option.Id} value={option.Id}>
                                  {option.Name}
                                </option>
                              ))}
                          </TextField>
                        </Grid>
                        <Grid
                          item
                          sm={3}
                          xs={11}
                          className={classes.paddingRight_16}
                        >
                          <TextField
                            fullWidth
                            id="motherNativePlaceId"
                            select
                            label="FATHER PRESENT PLACE / પિતા હાજર સ્થળ"
                            value={values.motherNativePlaceId}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={
                              !!touched.motherNativePlaceId &&
                              !!errors.motherNativePlaceId
                            }
                            helperText={
                              touched.motherNativePlaceId &&
                              errors.motherNativePlaceId
                            }
                            SelectProps={{
                              native: true
                            }}
                          >
                            <option key={0} disabled selected />
                            {dropDownListData.nativePlaceList &&
                              dropDownListData.nativePlaceList.length > 0 &&
                              dropDownListData.nativePlaceList.map(option => (
                                <option key={option.Id} value={option.Id}>
                                  {option.Name}
                                </option>
                              ))}
                          </TextField>
                        </Grid>
                      </Grid>
                    </Grid>
                    {this.props.values.occupationId !== "0" ? null : (
                      <Grid
                        item
                        xs={12}
                        style={{ paddingTop: "8px", paddingBottom: "8px" }}
                      >
                        <Grid
                          container
                          alignItems="center"
                          style={{
                            paddingLeft: theme.spacing(6),
                            paddingRight: theme.spacing(6)
                          }}
                        >
                          <Grid
                            item
                            sm={3}
                            style={{ paddingLeft: "0px" }}
                            className={classes.paddingRight_16}
                            xs={11}
                          >
                            <TextField
                              id="otherOccupation"
                              label="Other Occupation"
                              fullWidth
                              value={values.otherOccupation}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              error={
                                !!touched.otherOccupation &&
                                !!errors.otherOccupation
                              }
                              helperText={
                                touched.otherOccupation &&
                                errors.otherOccupation
                              }
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                    )}

                    <Grid
                      item
                      xs={12}
                      style={{ paddingTop: "8px", paddingBottom: "8px" }}
                    >
                      <Grid
                        container
                        // spacing={3}
                        className={classes.row}
                       
                      >
                        <Grid
                          item
                          sm={3}
                          xs={11}
                          className={classes.paddingRight_16}
                        >
                          <TextField
                            id="email"
                            label="EMAIL / ઇમેઇલ"
                            fullWidth
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={!!touched.email && !!errors.email}
                            helperText={touched.email && errors.email}
                          />
                        </Grid>
                        <Grid
                          item
                          sm={3}
                          xs={11}
                          className={classes.paddingRight_16}
                        >
                          <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                              fullWidth
                              id="dob"
                              format="MM/dd/yyyy"
                              label="DATE OF BIRTH / જન્મ તારીખ"
                              KeyboardButtonProps={{
                                "aria-label": "change date"
                              }}
                              value={values.dob}
                              onChange={(event, value) => {
                                console.log(event, value);
                                this.props.setFieldValue(
                                  "dob",
                                  new Date(value)
                                );
                              }}
                              onBlur={handleBlur}
                              error={!!touched.dob && !!errors.dob}
                              helperText={touched.dob && errors.dob}
                              // value={new Date().getDate()}
                              // onChange={}
                            />
                          </MuiPickersUtilsProvider>
                        </Grid>

                        <Grid
                          item
                          sm={3}
                          xs={11}
                          className={classes.paddingRight_16}
                        >
                          <TextField
                            fullWidth
                            id={"maritalStatus"}
                            select
                            label="MARITAL STATUS / વૈવાહિક સ્થિતિ"
                            value={values.maritalStatus}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={
                              !!touched.maritalStatus && !!errors.maritalStatus
                            }
                            helperText={
                              touched.maritalStatus && errors.maritalStatus
                            }
                            SelectProps={{
                              native: true
                            }}
                          >
                            <option
                              key={0}
                              disabled
                              selected
                              value={undefined}
                            />
                            {dropDownListData.maritalStatusList &&
                              dropDownListData.maritalStatusList.length &&
                              dropDownListData.maritalStatusList.map(option => (
                                <option key={option.Id} value={option.Id}>
                                  {option.Name}
                                </option>
                              ))}
                          </TextField>
                        
                        </Grid>
                             
                              
                        {(values.maritalStatus == "SINGLE") ||
                        (values.maritalStatus == "WIDOW") ? null : (
                          <Grid
                          item
                          sm={3}
                          xs={11}
                          className={classes.paddingRight_16}
                        >
                          <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                              fullWidth
                              id="marriageDate"
                              format="MM/dd/yyyy"
                              label="MARRIAGE DATE / લગ્ન તારીખ"
                              KeyboardButtonProps={{
                                "aria-label": "change date"
                              }}
                              value={values.marriageDate}
                              autoComplete="1"
                              onChange={(event, value) => {
                                console.log(event, value);
                                this.props.setFieldValue(
                                  "marriageDate",
                                  new Date(value)
                                );
                              }}
                              onBlur={handleBlur}
                              error={
                                !!touched.marriageDate &&
                                !!errors.marriageDate
                              }
                              helperText={
                                touched.marriageDate && errors.marriageDate
                              }
                            />
                          </MuiPickersUtilsProvider>
                        </Grid>
                          )
                         }
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      style={{ paddingTop: "8px", paddingBottom: "8px" }}
                    >
                      <Grid container className={classes.row}>
                        <Grid item sm={3} xs={11}>
                          <TextField
                            fullWidth
                            id="residencePhone"
                            label="RESIDENCE PHONE / નિવાસ ફોન"
                            value={values.residencePhone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={
                              !!touched.residencePhone &&
                              !!errors.residencePhone
                            }
                            helperText={
                              touched.residencePhone && errors.residencePhone
                            }
                          />
                        </Grid>
                        <Grid
                          item
                          sm={3}
                          xs={11}
                          className={classes.paddingRight_16}
                        >
                          <TextField
                            fullWidth
                            id="officePhone"
                            label="OFFICE PHONE / .ફિસ ફોન"
                            value={values.officePhone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={
                              !!touched.officePhone && !!errors.officePhone
                            }
                            helperText={
                              touched.officePhone && errors.officePhone
                            }
                          />
                        </Grid>
                        <Grid
                          item
                          sm={3}
                          xs={11}
                          className={classes.paddingRight_16}
                        >
                          <TextField
                            fullWidth
                            id="aadhaarNo"
                            label="AADHAAR NO / આધાર નં"
                            value={values.aadhaarNo}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={!!touched.aadhaarNo && !!errors.aadhaarNo}
                            helperText={touched.aadhaarNo && errors.aadhaarNo}
                          />
                        </Grid>
                        <Grid
                          item
                          sm={3}
                          xs={11}
                          className={classes.paddingRight_16}
                        >
                          <TextField
                            fullWidth
                            id="bloodGroup"
                            select
                            label="BLOOD GROUP / રક્ત જૂથ"
                            value={values.bloodGroup}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={!!touched.bloodGroup && !!errors.bloodGroup}
                            helperText={touched.bloodGroup && errors.bloodGroup}
                            SelectProps={{
                              native: true
                            }}
                          >
                            <option key={0} disabled selected />
                            {dropDownListData.bloodGroupList &&
                              dropDownListData.bloodGroupList.length &&
                              dropDownListData.bloodGroupList.map(option => (
                                <option key={option.Id} value={option.Id}>
                                  {option.Name}
                                </option>
                              ))}
                          </TextField>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      style={{ paddingTop: "8px", paddingBottom: "8px" }}
                    >
                      <Grid
                        container
                        alignItems="center"
                        style={{
                          paddingLeft: theme.spacing(6),
                          paddingRight: theme.spacing(6)
                        }}
                      >
                        <Grid
                          item
                          sm={3}
                          xs={11}
                          className={classes.paddingRight_16}
                        >
                          <TextField
                            fullWidth
                            id="zodiac"
                            select
                            label="ZODIAC / રશી"
                            value={values.zodiac}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={!!touched.zodiac && !!errors.zodiac}
                            helperText={touched.zodiac && errors.zodiac}
                            SelectProps={{
                              native: true
                            }}
                          >
                            <option key={0} disabled selected />
                            {dropDownListData.zodiacList &&
                              dropDownListData.zodiacList.length &&
                              dropDownListData.zodiacList.map(option => (
                                <option key={option.Id} value={option.Id}>
                                  {option.Name}
                                </option>
                              ))}
                          </TextField>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} style={{ paddingTop: theme.spacing(2) }}>
                  <Grid container alignItems="center">
                    <Grid item xs={12} className={classes.titleContainer2}>
                      <Typography gutterBottom color="primary">
                        RESIDENCE ADDRESS / રહેઠાણ સરનામું
                      </Typography>
                      <Divider />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      style={{ paddingTop: "8px", paddingBottom: "8px" }}
                    >
                      <Grid
                        container
                        alignItems="center"
                        style={{
                          paddingLeft: theme.spacing(6),
                          paddingRight: theme.spacing(6)
                        }}
                      >
                        <Grid item sm={12} xs={11}>
                          <TextField
                            id="r_Address1"
                            label="ADDRESS / સરનામું"
                            fullWidth
                            value={values.r_Address1}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={!!touched.r_Address1 && !!errors.r_Address1}
                            helperText={
                              touched.residenceAddress1 &&
                              errors.residenceAddress1
                            }
                          />
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      style={{ paddingTop: "8px", paddingBottom: "8px" }}
                    >
                      <Grid
                        container
                        alignItems="center"
                        style={{
                          paddingLeft: theme.spacing(6),
                          paddingRight: theme.spacing(6)
                        }}
                      >
                        <Grid item sm={12} xs={11}>
                          <TextField
                            id="r_Address2"
                            fullWidth
                            value={values.r_Address2}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={!!touched.r_Address2 && !!errors.r_Address2}
                            helperText={touched.r_Address2 && errors.r_Address2}
                          />
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      style={{ paddingTop: "8px", paddingBottom: "8px" }}
                    >
                      <Grid
                        container
                        alignItems="center"
                        style={{
                          paddingLeft: theme.spacing(6),
                          paddingRight: theme.spacing(6)
                        }}
                      >
                        <Grid item sm={12} xs={11}>
                          <TextField
                            id="r_Address3"
                            fullWidth
                            value={values.r_Address3}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={!!touched.r_Address3 && !!errors.r_Address3}
                            helperText={touched.r_Address3 && errors.r_Address3}
                          />
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      style={{ paddingTop: "8px", paddingBottom: "8px" }}
                    >
                      <Grid
                        container
                        // spacing={3}
                        className={classes.row}
                        justify="space-evenly"
                      >
                        <Grid
                          item
                          sm={3}
                          xs={11}
                          className={classes.paddingRight_16}
                        >
                          <TextField
                            fullWidth
                            id="r_CountryId"
                            select
                            label="COUNTRY / દેશ"
                            value={values.r_CountryId}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={
                              !!touched.r_CountryId && !!errors.r_CountryId
                            }
                            helperText={
                              touched.r_CountryId && errors.r_CountryId
                            }
                            SelectProps={{
                              native: true
                            }}
                          >
                            <option key={0} disabled selected />
                            {dropDownListData.countryList &&
                              dropDownListData.countryList.length > 0 &&
                              dropDownListData.countryList.map(option => (
                                <option key={option.Id} value={option.Id}>
                                  {option.Name}
                                </option>
                              ))}
                          </TextField>
                        </Grid>
                        <Grid
                          item
                          sm={3}
                          xs={11}
                          className={classes.paddingRight_16}
                        >
                          <TextField
                            fullWidth
                            id="r_StateId"
                            select
                            label="STATE / રાજ્ય"
                            value={values.r_StateId}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={!!touched.r_StateId && !!errors.r_StateId}
                            helperText={touched.r_StateId && errors.r_StateId}
                            SelectProps={{
                              native: true
                            }}
                          >
                            <option key={0} disabled selected />
                            {dropDownListData.stateList &&
                              dropDownListData.stateList.length > 0 &&
                              dropDownListData.stateList.map(
                                option =>
                                  values.r_CountryId == option.CountryId && (
                                    <option key={option.Id} value={option.Id}>
                                      {option.Name}
                                    </option>
                                  )
                              )}
                          </TextField>
                        </Grid>
                        <Grid
                          item
                          sm={3}
                          xs={11}
                          className={classes.paddingRight_16}
                        >
                          <TextField
                            fullWidth
                            id="r_CityId"
                            select
                            label="CITY / શહેર"
                            value={values.r_CityId}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={!!touched.r_CityId && !!errors.r_CityId}
                            helperText={touched.r_CityId && errors.r_CityId}
                            SelectProps={{
                              native: true
                            }}
                          >
                            <option key={0} disabled selected />
                            {dropDownListData.cityList &&
                              dropDownListData.cityList.length > 0 &&
                              dropDownListData.cityList.map(
                                option =>
                                  values.r_StateId == option.StateId && (
                                    <option key={option.Id} value={option.Id}>
                                      {option.Name}
                                    </option>
                                  )
                              )}
                          </TextField>
                        </Grid>
                        <Grid item sm={3} xs={11}>
                          <TextField
                            id="r_ZipCode"
                            label="ZIPCODE/PINCODE / પિન કોડ"
                            fullWidth
                            value={values.r_ZipCode}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={!!touched.r_ZipCode && !!errors.r_ZipCode}
                            helperText={touched.r_ZipCode && errors.r_ZipCode}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} style={{ paddingTop: theme.spacing(2) }}>
                  <Grid container alignItems="center">
                    <Grid item xs={12} className={classes.titleContainer2}>
                      <Typography gutterBottom color="primary">
                        OFFICE ADDRESS / .ફિસનું સરનામું
                      </Typography>
                      <Divider />
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      style={{ paddingTop: "8px", paddingBottom: "8px" }}
                    >
                      <Grid
                        container
                        alignItems="center"
                        style={{
                          paddingLeft: theme.spacing(6),
                          paddingRight: theme.spacing(6)
                        }}
                      >
                        <Grid item sm={12} xs={11}>
                          <TextField
                            id="o_Address1"
                            label="ADDRESS / સરનામું"
                            fullWidth
                            value={values.o_Address1}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={!!touched.o_Address1 && !!errors.o_Address1}
                            helperText={touched.o_Address1 && errors.o_Address1}
                          />
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      style={{ paddingTop: "8px", paddingBottom: "8px" }}
                    >
                      <Grid
                        container
                        alignItems="center"
                        style={{
                          paddingLeft: theme.spacing(6),
                          paddingRight: theme.spacing(6)
                        }}
                      >
                        <Grid item sm={12} xs={11}>
                          <TextField
                            id="o_Address2"
                            fullWidth
                            value={values.o_Address2}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={!!touched.o_Address2 && !!errors.o_Address2}
                            helperText={touched.o_Address2 && errors.o_Address2}
                          />
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      style={{ paddingTop: "8px", paddingBottom: "8px" }}
                    >
                      <Grid
                        container
                        alignItems="center"
                        style={{
                          paddingLeft: theme.spacing(6),
                          paddingRight: theme.spacing(6)
                        }}
                      >
                        <Grid item sm={12} xs={11}>
                          <TextField
                            id="o_Address3"
                            fullWidth
                            value={values.o_Address3}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={!!touched.o_Address3 && !!errors.o_Address3}
                            helperText={touched.o_Address3 && errors.o_Address3}
                          />
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      style={{ paddingTop: "8px", paddingBottom: "8px" }}
                    >
                      <Grid
                        container
                        // spacing={3}
                        className={classes.row}
                        justify="space-evenly"
                      >
                        <Grid
                          item
                          sm={3}
                          xs={11}
                          className={classes.paddingRight_16}
                        >
                          <TextField
                            fullWidth
                            id="o_CountryId"
                            select
                            label="Country / દેશ"
                            value={values.o_CountryId}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={
                              !!touched.o_CountryId && !!errors.o_CountryId
                            }
                            helperText={
                              touched.o_CountryId && errors.o_CountryId
                            }
                            SelectProps={{
                              native: true
                            }}
                          >
                            <option key={0} disabled selected />
                            {dropDownListData.countryList &&
                              dropDownListData.countryList.length > 0 &&
                              dropDownListData.countryList.map(option => (
                                <option key={option.Id} value={option.Id}>
                                  {option.Name}
                                </option>
                              ))}
                          </TextField>
                        </Grid>
                        <Grid
                          item
                          sm={3}
                          xs={11}
                          className={classes.paddingRight_16}
                        >
                          <TextField
                            fullWidth
                            id="o_StateId"
                            select
                            label="STATE / રાજ્ય"
                            value={values.o_StateId}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={!!touched.o_StateId && !!errors.o_StateId}
                            helperText={touched.o_StateId && errors.o_StateId}
                            SelectProps={{
                              native: true
                            }}
                          >
                            <option key={0} disabled selected />
                            {dropDownListData.stateList &&
                              dropDownListData.stateList.length > 0 &&
                              dropDownListData.stateList.map(
                                option =>
                                  values.o_CountryId == option.CountryId && (
                                    <option key={option.Id} value={option.Id}>
                                      {option.Name}
                                    </option>
                                  )
                              )}
                          </TextField>
                        </Grid>
                        <Grid
                          item
                          sm={3}
                          xs={11}
                          className={classes.paddingRight_16}
                        >
                          <TextField
                            fullWidth
                            id="o_CityId"
                            select
                            label="CITY / શહેર"
                            value={values.o_CityId}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={!!touched.o_CityId && !!errors.o_CityId}
                            helperText={touched.o_CityId && errors.o_CityId}
                            SelectProps={{
                              native: true
                            }}
                          >
                            <option key={0} disabled selected />
                            {dropDownListData.cityList &&
                              dropDownListData.cityList.length > 0 &&
                              dropDownListData.cityList.map(
                                option =>
                                  values.o_StateId == option.StateId && (
                                    <option key={option.Id} value={option.Id}>
                                      {option.Name}
                                    </option>
                                  )
                              )}
                          </TextField>
                        </Grid>
                        <Grid item sm={3} xs={11}>
                          <TextField
                            id="o_ZipCode"
                            label="ZIPCODE/PINCODE / પિન કોડ"
                            fullWidth
                            value={values.o_ZipCode}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={!!touched.o_ZipCode && !!errors.o_ZipCode}
                            helperText={touched.o_ZipCode && errors.o_ZipCode}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{
                    paddingTop: "8px",
                    paddingBottom: "8px"
                    // paddingLeft: theme.spacing(4)
                  }}
                >
                  <Grid
                    container
                    alignItems="center"
                    style={{ paddingLeft: theme.spacing(3) }}
                  >
                    {dropDownListData.eventList &&
                      dropDownListData.eventList.length > 0 &&
                      dropDownListData.eventList && (
                        <Grid item style={{ paddingLeft: "16px" }}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                id="eventHead"
                                checked={values.eventHead}
                                onChange={handleChange}
                                color="primary"
                              />
                            }
                            label={dropDownListData.eventList[0].Name}
                          />
                        </Grid>
                      )}
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} style={{ marginTop: theme.spacing(2) }}>
                <Grid container justify="flex-start" alignItems="center">
                  {dataObj.memberList.map((item, index) => (
                    <Grid item xs={12} key={index}>
                      <MemberForm
                        dataObj={item}
                        formIndex={index}
                        parentIndex={formIndex}
                        dropDownListData={dropDownListData}
                        addUpdateMemberDataToMemberList={
                          addUpdateMemberDataToDaughterMemberList
                        }
                        deleteMemberDataToMemberList={
                          deleteMemberDataToDaughterMemberList
                        }
                      />
                    </Grid>
                  ))}
                </Grid>
              </Grid>

              <Grid item xs={12} style={{ marginTop: theme.spacing(2) }}>
                <Grid container justify="center" alignItems="center">
                  <Grid item style={{ padding: "8px" }}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      disabled={isSubmitting}
                      // onClick={() => handleSubmit()}
                    >
                      {formIndex > 0 ? "UpdateDaughter" : "Add More Daughter"}
                    </Button>
                  </Grid>
                  {formIndex > 0 && (
                    <Grid item style={{ padding: "8px" }}>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => deleteDaughterMemberList(formIndex)}
                      >
                        Remove Daughter
                      </Button>
                    </Grid>
                  )}
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

const EnhancedForm = withFormik({
  enableReinitialize: true,
  mapPropsToValues: props => ({
    familyId: props.dataObj.basicDetail.familyId,
    firstName: props.dataObj.basicDetail.firstName,
    middleName: props.dataObj.basicDetail.middleName,
    lastName: props.dataObj.basicDetail.lastName,
    email: props.dataObj.basicDetail.email,
    mobile: props.dataObj.basicDetail.mobile,
    residencePhone: props.dataObj.basicDetail.residencePhone,
    officePhone: props.dataObj.basicDetail.officePhone,
    nativePlaceId: props.dataObj.basicDetail.nativePlaceId,
    occupationId: props.dataObj.basicDetail.occupationId,
    dob: props.dataObj.basicDetail.dob
      ? new Date(props.dataObj.basicDetail.dob)
      : null,
    marriageDate: props.dataObj.basicDetail.dob
      ? new Date(props.dataObj.basicDetail.dob)
      : null,
    motherName: props.dataObj.basicDetail.motherName,
    motherNativePlaceId: props.dataObj.basicDetail.motherNativePlaceId,
    eventHead: props.dataObj.basicDetail.eventHead,
    aadhaarNo: props.dataObj.basicDetail.aadhaarNo,
    otherOccupation: props.dataObj.basicDetail.otherOccupation,
    r_Address1: props.dataObj.residenceDetail.r_Address1,
    r_Address2: props.dataObj.residenceDetail.r_Address2,
    r_Address3: props.dataObj.residenceDetail.r_Address3,
    r_CountryId: props.dataObj.residenceDetail.r_CountryId,
    r_CityId: props.dataObj.residenceDetail.r_CityId,
    r_StateId: props.dataObj.residenceDetail.r_StateId,
    r_ZipCode: props.dataObj.residenceDetail.r_ZipCode,
    o_Address1: props.dataObj.officeDetail.o_Address1,
    o_Address2: props.dataObj.officeDetail.o_Address2,
    o_Address3: props.dataObj.officeDetail.o_Address3,
    o_CountryId: props.dataObj.officeDetail.o_CountryId,
    o_CityId: props.dataObj.officeDetail.o_CityId,
    o_StateId: props.dataObj.officeDetail.o_StateId,
    o_ZipCode: props.dataObj.officeDetail.o_ZipCode,
    bloodGroup: props.dataObj.basicDetail.bloodGroup,
    maritalStatus: props.dataObj.basicDetail.maritalStatus,
    zodiac: props.dataObj.basicDetail.zodiac
  }),

  validationSchema: props => {
    console.log(props);
    console.log("kp");
    return yup.object().shape({
      firstName: yup
        .string()
        .required("First Name is required")
        .max(50, "First Name cannot exceed then 50 character"),
      middleName: yup
        .string()
        .max(50, "Middle Name cannot exceed then 50 character"),
      lastName: yup
        .string()
        .required("Last Name is required")
        .max(50, "Last Name cannot exceed then 50 character"),
      email: yup
        .string()
        .required("Email Name is required")
        .email("please enter valid email"),
      mobile: yup
        .string()
        .required("Mobile No is required")
        .matches(PhoneRegExp, "Mobile Number must be 10 digits long"),
      residencePhone: yup
        .string()
        .matches(PhoneRegExp, "Phone Number must be 10 digits long"),
      officePhone: yup
        .string()
        .matches(PhoneRegExp, "Phone Number must be 10 digits long"),
      nativePlaceId: yup.string().required("Please select Native Place"),
      occupationId: yup.string().required("Please select Occupation"),
      dob: yup.date().required("Date of Birth is required"),
      marriageDate: yup.date().required("Marriage Date is required"),
      motherName: yup
        .string()
        .required("Mother Name is required")
        .max(50, "Mother Name cannot exceed then 50 character"),
      motherNativePlaceId: yup
        .string()
        .required("Please select Mother Native Place"),
      r_Address1: yup.string().required("Address1 is required"),
      r_Address2: yup.string(),
      r_Address3: yup.string(),
      r_ZipCode: yup
        .string()
        .required("Zip Code is required")
        .matches(ZipCodeRegExp, "Zip Code must be 10 digits long"),
      r_CountryId: yup.string().required("Country is required"),
      r_StateId: yup.string().required("State is required"),
      r_CityId: yup.string().required("City is required"),
      o_Address1: yup.string().required("Address1 is required"),
      o_Address2: yup.string(),
      o_Address3: yup.string(),
      o_ZipCode: yup
        .string()
        .required("Zip Code is required")
        .matches(ZipCodeRegExp, "Zip Code must be 10 digits long"),
      o_CountryId: yup.string().required("Country is required"),
      o_StateId: yup.string().required("State is required"),
      o_CityId: yup.string().required("City is required"),
      aadhaarNo: yup
        .string()
        .matches(AdhharRegExp, "Aadhar no must be 12 digits long"),
      otherOccupation: yup.string(),
      bloodGroup: yup.string().required("Blood Group is required"),
      maritalStatus: yup.string().required("Marital Status is required"),
      zodiac: yup.string().required("Zodiac is required")
    });
  },
  handleSubmit: (values, props) => {
    console.log(values, props);
    var valuesTosend = values;

    props.props.addUpdateDaughterMemberList(props.props.formIndex, values);
    props.setSubmitting(false);
    if (props.props.formIndex === 0) props.resetForm();
    //dispatch(addProduct(values));
  },
  displayName: "BasicForm"
})(DaughterForm);

const getFormattedDate = dateToFomat => {
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

const mapStateToProps = state => {
  console.log(state);
  return {
    basicDetail: state.family.basicDetail,
    residenceDetail: state.family.residenceDetail,
    officeDetail: state.family.officeDetail,
    dropDownListData: state.dropDownList.dropDownListData
      ? state.dropDownList.dropDownListData
      : {}
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getAllDropDownListData,
      addUpdateMemberDataToDaughterMemberList,
      deleteMemberDataToDaughterMemberList,
      addUpdateDaughterMemberList,
      deleteDaughterMemberList,
      saveFamilyDataToStore
    },
    dispatch
  );
};

export default withStyles(useStyles, { withTheme: true })(
  connect(mapStateToProps, mapDispatchToProps)(EnhancedForm)
);
// export default withStyles(useStyles, { withTheme: true })(FamilyForm);

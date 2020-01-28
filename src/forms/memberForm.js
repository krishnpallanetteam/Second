import React, { Component } from "react";
import { withFormik } from "formik";
import * as yup from "yup";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import { Typography, Divider, Button, withStyles } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
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
  }
});

class MemberForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: new Date()
    };
  }

  removeOrResetMember = () => {
    const {
      parentIndex,
      formIndex,
      deleteMemberDataToMemberList,
      resetForm
    } = this.props;
    if (formIndex === 0) resetForm();
    else
      parentIndex !== undefined
        ? deleteMemberDataToMemberList(parentIndex, formIndex)
        : deleteMemberDataToMemberList(formIndex);
  };
  render() {
    console.log(this.props);
    const {
      parentIndex,
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
      handleSubmit
    } = this.props;
    const { selectedDate } = this.state;
    return (
      <form autoComplete="off" onSubmit={handleSubmit} id={`form_${formIndex}`}>
        <Grid container alignItems="center">
          <Grid item xs={12}>
            <Grid container alignItems="center">
              <Grid item xs={12} className={classes.titleContainer}>
                <Typography gutterBottom color="primary">
                  Members Details
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
                  // spacing={3}

                  className={classes.row}
                  justify="space-evenly"
                >
                  <Grid item sm={3} xs={11} className={classes.paddingRight_16}>
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
                  <Grid item sm={3} xs={11} className={classes.paddingRight_16}>
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
                  <Grid item sm={3} xs={11} className={classes.paddingRight_16}>
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
                  <Grid item sm={3} xs={11}>
                    <TextField
                      fullWidth
                      id="relation"
                      select
                      label="RELATION / સંબંધ"
                      value={values.relation}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={!!touched.relation && !!errors.relation}
                      helperText={touched.relation && errors.relation}
                      SelectProps={{
                        native: true
                      }}
                    >
                      <option key={0} disabled selected />
                      {dropDownListData.relationList &&
                        dropDownListData.relationList.length &&
                        dropDownListData.relationList.map(option => (
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
                <Grid container className={classes.row} >
                  <Grid item sm={3} xs={11} className={classes.paddingRight_16}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        fullWidth
                        id="dateOfBirth"
                        format="MM/dd/yyyy"
                        label="DATE OF BIRTH / જન્મ તારીખ"
                        KeyboardButtonProps={{
                          "aria-label": "change date"
                        }}
                        value={values.dateOfBirth}
                        onChange={(event, value) => {
                          this.props.setFieldValue(
                            "dateOfBirth",
                            new Date(value)
                          );
                        }}
                        onBlur={handleBlur}
                        error={!!touched.dateOfBirth && !!errors.dateOfBirth}
                        helperText={touched.dateOfBirth && errors.dateOfBirth}
                      />
                    </MuiPickersUtilsProvider>
                  </Grid>
                  <Grid item sm={3} xs={11} className={classes.paddingRight_16}>
                    <FormControl
                      required
                      style={{ alignItems: "flex-start", float: "left" }}
                    >
                      <FormLabel>Gender</FormLabel>
                      {/* import FormHelperText from '@material-ui/core/FormHelperText'; */}
                      <RadioGroup
                        aria-label="GENDER / લિંગ"
                        id="gender"
                        style={{ flexDirection: "row" }}
                        value={values.gender}
                        onChange={eve => {
                          this.props.setFieldValue("gender", eve.target.value);
                        }}
                        // onBlur={handleBlur}
                        error={touched.gender && errors.gender}
                        // helperText={touched.gender && errors.gender}
                      >
                        <FormControlLabel
                          id="female"
                          value="female"
                          control={<Radio />}
                          label="Female"
                          color="primary"
                        />
                        <FormControlLabel
                          id="male"
                          value="male"
                          control={<Radio />}
                          label="Male"
                        />
                        {/* <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid item sm={3} xs={11} className={classes.paddingRight_16}>
                    <TextField
                      fullWidth
                      id={"maritalStatus"}
                      select
                      label="MARITAL STATUS / વૈવાહિક સ્થિતિ"
                      value={values.maritalStatus}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={!!touched.maritalStatus && !!errors.maritalStatus}
                      helperText={touched.maritalStatus && errors.maritalStatus}
                      SelectProps={{
                        native: true
                      }}
                    >
                      <option key={0} disabled selected value={undefined} />
                      {dropDownListData.maritalStatusList &&
                        dropDownListData.maritalStatusList.length &&
                        dropDownListData.maritalStatusList.map(option => (
                          <option key={option.Id} value={option.Id}>
                            {option.Name}
                          </option>
                        ))}
                    </TextField>
                  </Grid>
                  {this.props.values.maritalStatus !== "Married" ? null : (
                    <Grid
                      item
                      sm={3}
                      xs={11}
                      className={classes.paddingRight_16}
                    >
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                          fullWidth
                          id="anniversaryDate"
                          format="MM/dd/yyyy"
                          label="ANNIVERSARY DATE / વર્ષગાંઠની તારીખ"
                          KeyboardButtonProps={{
                            "aria-label": "change date"
                          }}
                          value={values.anniversaryDate}
                          onChange={(event, value) => {
                            this.props.setFieldValue(
                              "anniversary",
                              new Date(value)
                            );
                          }}
                          onBlur={handleBlur}
                          error={
                            !!touched.anniversaryDate &&
                            !!errors.anniversaryDate
                          }
                          helperText={
                            touched.anniversaryDate && errors.anniversaryDate
                          }
                        />
                      </MuiPickersUtilsProvider>
                    </Grid>
                  )}
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
                  // spacing={3}
                  className={classes.row}
                >
                  <Grid item sm={3} xs={11} className={classes.paddingRight_16}>
                    <TextField
                      fullWidth
                      id="mobileNo"
                      label="MOBILE NUMBER / મોબાઇલ નંબર"
                      value={values.mobileNo}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={!!touched.mobileNo && !!errors.mobileNo}
                      helperText={touched.mobileNo && errors.mobileNo}
                    />
                  </Grid>
                  <Grid item sm={3} xs={11} className={classes.paddingRight_16}>
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
                  <Grid item sm={3} xs={11} className={classes.paddingRight_16}>
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
                  <Grid item sm={3} xs={11} className={classes.paddingRight_16}>
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
                <Grid
                  item
                  xs={12}
                  style={{ paddingTop: "8px", paddingBottom: "8px" }}
                >
                  <Grid
                    container
                    alignItems="flex-start"
                    style={
                      [theme.breakpoints.up("sm")]
                        ? {
                            paddingLeft: theme.spacing(5),
                            paddingRight: theme.spacing(5)
                          }
                        : {}
                    }
                  >
                    <Grid item xs={12} style={{ paddingLeft: "8px" }}>
                      <TextField
                        fullWidth
                        id="studies"
                        label="Studies / અધ્યયન"
                        value={values.studies}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={!!touched.studies && !!errors.studies}
                        helperText={touched.studies && errors.studies}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{ paddingTop: "8px", paddingBottom: "8px" }}
                >
                  <Grid container alignItems="center">
                    {dropDownListData.eventList &&
                      dropDownListData.eventList.length > 0 &&
                      dropDownListData.eventList && (
                        <Grid
                          item
                          sm={4}
                          xs={12}
                          style={{ paddingLeft: "0px" }}
                        >
                          <FormControlLabel
                            control={
                              <Checkbox
                                id="eventMember"
                                checked={values.eventMember}
                                onChange={handleChange}
                                color="primary"
                              />
                            }
                            label={dropDownListData.eventList[0].Name}
                          />
                        </Grid>
                      )}
                    <Grid item sm={8} xs={12} style={{ paddingRight: "24px" }}>
                      <Grid container justify="flex-end" alignItems="center">
                        <Grid item style={{ padding: "8px" }}>
                          <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            disabled={isSubmitting}
                            // onClick={() => handleSubmit()}
                          >
                            {formIndex > 0 ? "Update member" : "Add member"}
                          </Button>
                        </Grid>
                        <Grid item style={{ padding: "8px" }}>
                          <Button
                            color="primary"
                            onClick={() => this.removeOrResetMember()}
                          >
                            {formIndex > 0 ? "Remove" : "Reset"}
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    );
  }
}
const EnhancedMemberForm = withFormik({
  enableReinitialize: true,
  mapPropsToValues: props => ({
    firstName: props.dataObj.firstName,
    middleName: props.dataObj.middleName,
    lastName: props.dataObj.lastName,
    relation: props.dataObj.relation,
    dateOfBirth: props.dataObj.dateOfBirth
      ? new Date(props.dataObj.dateOfBirth)
      : new Date("1/1/1970"),
    gender: props.dataObj.gender,
    maritalStatus: props.dataObj.maritalStatus,
    anniversaryDate: props.dataObj.anniversaryDate
      ? new Date(props.dataObj.anniversaryDate)
      : new Date("1/1/1970"),
    mobileNo: props.dataObj.mobileNo,
    studies: props.dataObj.studies,
    bloodGroup: props.dataObj.bloodGroup,
    eventMember: props.dataObj.eventMember,
    aadhaarNo: props.dataObj.aadhaarNo,
    zodiac: props.dataObj.zodiac,

  }),

  validationSchema: props => {
    console.log(
      "++++++++++",
      document.getElementById("maritalStatus"),
      document.getElementById("maritalStatus").value
    );
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
      relation: yup.string().required("Please select Relation"),
      dateOfBirth: yup.date().required("Date of Birth is Required"),
      gender: yup.string().required("Please select gender"),
      maritalStatus: yup.string().required("Marital Status is Required"),
      anniversaryDate:
        document.getElementById("maritalStatus").value !== undefined ||
        document.getElementById("maritalStatus").value !== null
          ? document.getElementById("maritalStatus").value === "Married"
            ? yup.date().required("Anniversary Date is Required")
            : yup.string()
          : yup.date(),
      mobileNo: yup
        .string()
        .required("Mobile No is Required")
        .matches(PhoneRegExp, "Mobile Number must be 10 digits long"),
      studies: yup.string().required("studies is Required"),
      bloodGroup: yup.string().required("Blood Group is Required"),
      aadhaarNo: yup
        .string()
        .matches(AdhharRegExp, "Aadhar no must be 12 digits long"),
        zodiac: yup
        .required("Please select zodiac")
        .string(),
    });
  },
  handleSubmit: (values, props) => {
    console.log(values, props);
    //for daughter component
    if (props.props.parentIndex !== undefined) {
      props.props.addUpdateMemberDataToMemberList(
        props.props.parentIndex,
        props.props.formIndex,
        values
      );
    } else {
      //for only member component
      props.props.addUpdateMemberDataToMemberList(
        props.props.formIndex,
        values
      );
    }
    props.setSubmitting(false);
    props.resetForm();
    // props.props.tabHandleChange(null, "members");
    // setTimeout(() => {
    // alert(JSON.stringify(values, null, 2));
    // }, 1000);
    // dispatch(addProduct(values));
  },
  displayName: "BasicForm"
})(MemberForm);

export default withStyles(useStyles, { withTheme: true })(EnhancedMemberForm);

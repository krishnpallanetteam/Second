import React, { Component } from "react";
import { withFormik } from "formik";
import * as yup from "yup";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { PhoneRegExp, ZipCodeRegExp, AdhharRegExp } from "../utils/constants";

const styles = theme => ({
  dialogTitle: { borderBottom: "1px solid gray", paddingBottom: "5px" },
  dialogBody: {},
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

class MemberModel extends Component {
  render() {
   
    const {
      parentIndex,
      dataObj,
      formIndex,
      memberArrayLength,
      dropDownListData,
      toggleMemberModel,
      toggleStatus,
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
    console.log(values, this.props);
    return (
      <Dialog
        open={toggleStatus}
        onClose={toggleMemberModel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="md"
        fullWidth
        disableBackdropClick={true}
        disableEscapeKeyDown={true}
        classes={{ paper: classes.dialogBody }}
      >
        <form
          autoComplete="off"
          onSubmit={handleSubmit}
          id={`form_${formIndex}`}
        >
          <DialogTitle id="alert-dialog-title">
            <Typography color="primary">Members Details</Typography>
          </DialogTitle>
          <DialogContent
            style={{
              borderTop: `1px solid ${theme.palette.grey["A100"]}`,
              borderBottom: `1px solid ${theme.palette.grey["A100"]}`
            }}
          >
            <Grid container alignItems="center">
              <Grid item xs={12}>
                <Grid container alignItems="center">
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
                      id="firstName"
                      label="FIRST NAME / પ્રથમ નામ"
                       autoComplete="1"
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
                      autoComplete="1"
                      value={values.middleName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={!!touched.middleName && !!errors.middleName}
                      helperText={touched.middleName && errors.middleName}
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
                      id="lastName"
                      label="LAST NAME / છેલ્લું નામ"
                      autoComplete="1"
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
                      autoComplete="1"
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
                    <Grid container className={classes.row}>
                      <Grid
                        item
                        sm={3}
                        xs={11}
                        className={classes.paddingRight_16}
                      >
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        fullWidth
                        id="dateOfBirth"
                        format="MM/dd/yyyy"
                        label="DATE OF BIRTH / જન્મ તારીખ"
                        autoComplete="1"
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
                      <Grid
                        item
                        sm={3}
                        xs={11}
                        className={classes.paddingRight_16}
                      >
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
                            autoComplete="1"
                            value={values.gender}
                            onChange={eve => {
                              this.props.setFieldValue(
                                "gender",
                                eve.target.value
                              );
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
                          autoComplete="1"
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
                      {(this.props.values.maritalStatus == "SINGLE") ||
                  (this.props.values.maritalStatus == "WIDOW") ? null : (
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
                              autoComplete="1"
                              KeyboardButtonProps={{
                                "aria-label": "change date"
                              }}
                              value={values.anniversaryDate}
                              onChange={(event, value) => {
                                this.props.setFieldValue(
                                  "anniversaryDate",
                                  new Date(value)
                                );
                              }}
                              onBlur={handleBlur}
                              error={
                                !!touched.anniversaryDate &&
                                !!errors.anniversaryDate
                              }
                              helperText={
                                touched.anniversaryDate &&
                                errors.anniversaryDate
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
                      <Grid
                        item
                        sm={3}
                        xs={11}
                        className={classes.paddingRight_16}
                      >
                        <TextField
                          fullWidth
                          id="mobileNo"
                          label="MOBILE NUMBER / મોબાઇલ નંબર"
                          autoComplete="1"
                          value={values.mobileNo}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={!!touched.mobileNo && !!errors.mobileNo}
                          helperText={touched.mobileNo && errors.mobileNo}
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
                          autoComplete="1"
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
                          autoComplete="1"
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
                      autoComplete="1"
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
                            autoComplete="1"
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
                      className={classes.row}
                    >
                      <Grid container alignItems="center">
                        {dropDownListData.eventList &&
                          dropDownListData.eventList.length > 0 &&
                          dropDownListData.eventList && (
                            <Grid
                              item
                              sm={12}
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
                      </Grid>
                    </Grid>
                    {/* <Grid
                      item
                      xs={12}
                      style={{ paddingTop: "8px", paddingBottom: "8px" }}
                    >
                      <Grid container justify="center" alignItems="center">
                        <Grid item>
                          <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            disabled={isSubmitting}
                          >
                            {formIndex > 0 ? "Update member" : "Add member"}
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button
                            variant="contained"
                            onClick={() => toggleMemberModel()}
                            color="primary"
                          >
                            Close
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid> */}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Grid container justify="center" alignItems="center" spacing={2}>
              <Grid item>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                >
                  {memberArrayLength > 1 ? "Update member" : "Add member"}
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  onClick={() => toggleMemberModel()}
                  color="primary"
                >
                  Close
                </Button>
              </Grid>
            </Grid>
          </DialogActions>
        </form>
      </Dialog>
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
      ? props.dataObj.dateOfBirth
      : null,
    gender: props.dataObj.gender,
    maritalStatus: props.dataObj.maritalStatus,
    anniversaryDate: props.dataObj.anniversaryDate
      ? new Date(props.dataObj.anniversaryDate)
      : null,
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
      anniversaryDate: yup.date(),
      mobileNo: yup
        .string()
        .required("Mobile No is Required")
        .matches(PhoneRegExp, "Mobile Number must be 10 digits long"),
      studies: yup.string().required("studies is Required"),
      bloodGroup: yup.string().required("Blood Group is Required"),
      aadhaarNo: yup
        .string()
        .required("Aadhar no is required")
        .matches(AdhharRegExp, "Aadhar no must be 12 digits long")
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
    if (props.props.formIndex) props.props.toggleMemberModel();
    props.setSubmitting(false);
    props.resetForm();
    // props.props.tabHandleChange(null, "members");
  },
  displayName: "BasicForm"
})(MemberModel);
export default withStyles(styles, { withTheme: true })(EnhancedMemberForm);

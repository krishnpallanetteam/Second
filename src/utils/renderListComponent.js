import React, { Component, Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
  [theme.breakpoints.up("sm")]: {
    pdLeftRighty_16: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6)
    }
  },
  [theme.breakpoints.down("sm")]: {
    pdLeft_16: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1)
    }
  },
  root: {
    textAlign: "left",
    color: "gray"
  },
  paper: {
    padding: "8px",
    borderBottom: "1px solid gray"
  }
});

class RenderListComponent extends Component {
  render() {
    const { dataObject, classes, eventName } = this.props;
    return (
      // <Paper className={classes.paper}>
      <Grid container className={classes.root}>
        <Grid item md={4} sm={4} xs={12}>
          <Grid container>
            <Grid item md={4}>
              <Typography variant="body1">{"FirstName: "}</Typography>
            </Grid>
            <Grid item md={8}>
              <Typography variant="body1" noWrap>
                {dataObject.firstName}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {dataObject.middleName && (
          <Grid item md={4} sm={4} xs={12}>
            <Grid container>
              <Grid item md={4}>
                <Typography variant="body1">{"MiddleName: "}</Typography>
              </Grid>
              <Grid item md={8}>
                <Typography variant="body1" noWrap>
                  {dataObject.middleName}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        )}
        <Grid item md={4} sm={4} xs={12}>
          <Grid container>
            <Grid item md={4}>
              <Typography variant="body1">{"LastName: "}</Typography>
            </Grid>
            <Grid item md={8}>
              <Typography variant="body1" noWrap>
                {dataObject.lastName}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {dataObject.dateOfBirth && (
          <Grid item md={4} sm={4} xs={12}>
            <Grid container>
              <Grid item md={3}>
                <Typography variant="body1">{"DOB: "}</Typography>
              </Grid>
              <Grid item md={9}>
                <Typography variant="body1" noWrap>
                  {new Date(dataObject.dateOfBirth).toDateString()}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        )}
        {dataObject.relation && (
          <Grid item md={4} sm={4} xs={12}>
            <Grid container>
              <Grid item md={3}>
                <Typography variant="body1">{"relation: "}</Typography>
              </Grid>
              <Grid item md={9}>
                <Typography variant="body1" noWrap>
                  {dataObject.relation}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        )}
        <Grid item md={4} sm={4} xs={12}>
          <Grid container>
            <Grid item md={4}>
              <Typography variant="body1">{"BloodGroup: "}</Typography>
            </Grid>
            <Grid item md={8}>
              <Typography variant="body1" noWrap>
                {dataObject.bloodGroup}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4} sm={4} xs={12}>
          <Grid container>
            <Grid item md={4}>
              <Typography variant="body1">{"mobileNo: "}</Typography>
            </Grid>
            <Grid item md={8}>
              <Typography variant="body1" noWrap>
                {dataObject.mobileNo}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4} sm={4} xs={12}>
          <Grid container>
            <Grid item md={3}>
              <Typography variant="body1">{"gender: "}</Typography>
            </Grid>
            <Grid item md={9}>
              <Typography variant="body1" noWrap>
                {dataObject.gender}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4} sm={4} xs={12}>
          <Grid container>
            <Grid item md={4}>
              <Typography variant="body1">{"Aadhaar No: "}</Typography>
            </Grid>
            <Grid item md={8}>
              <Typography variant="body1" noWrap>
                {dataObject.aadhaarNo.toString()}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {dataObject.anniversaryDate && (
          <Grid item md={4} sm={4} xs={12}>
            <Grid container>
              <Grid item md={5}>
                <Typography variant="body1">{"AnniversaryDate: "}</Typography>
              </Grid>
              <Grid item md={7}>
                <Typography variant="body1" noWrap>
                  {new Date(dataObject.anniversaryDate).toDateString()}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        )}
        {eventName && dataObject.eventMember && (
          <Grid item md={7} sm={12} xs={12}>
            <Grid container>
              <Grid item md={2}>
                <Typography variant="body1">{"Event: "}</Typography>
              </Grid>
              <Grid item md={10} noWrap>
                <Typography variant="body1">{eventName}</Typography>
              </Grid>
            </Grid>
          </Grid>
        )}
        {dataObject.maritalStatus && (
          <Grid item md={4} sm={4} xs={12}>
            <Grid container>
              <Grid item md={4}>
                <Typography variant="body1">{"MaritalStatus: "}</Typography>
              </Grid>
              <Grid item md={8}>
                <Typography variant="body1" noWrap>
                  {dataObject.maritalStatus}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        )}
        {dataObject.studies && (
          <Grid item md={7} sm={4} xs={12}>
            <Grid container>
              <Grid item md={2}>
                <Typography variant="body1">{"Studies: "}</Typography>
              </Grid>
              <Grid item md={10}>
                <Typography variant="body1" noWrap>
                  {dataObject.studies}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>

      // </Paper>
    );
  }
}

export default withStyles(styles, { withTheme: true })(RenderListComponent);
// export default RenderListComponent;

import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { withStyles, Button } from "@material-ui/core";
import DaughterForm from "./daughterForm";
// import {
//   addUpdateMemberDataToMemberList,
//   deleteMemberDataToMemberList
// } from "../action/memberAction";

const styles = theme => {
};

class Daughters extends Component {
  render() {
    const { daughterDetail, dropDownListData, tabHandleChange } = this.props;
    console.log("************************", this.props);
    return (
      <Grid container>
        <Grid item xs={12}>
          <Grid container justify="flex-start" alignItems="center">
            {daughterDetail.map((item, index) => (
              <Grid item xs={12} key={index}>
                <DaughterForm
                  dataObj={item}
                  formIndex={index}
                  dropDownListData={dropDownListData}
                  // addUpdateMemberDataToMemberList={
                  //   addUpdateMemberDataToMemberList
                  // }
                  // deleteMemberDataToMemberList={deleteMemberDataToMemberList}
                />
              </Grid>
            ))}
            <Grid item xs={12} style={{ paddingTop: "32px" }}>
              <Grid container justify="center">
                <Grid item style={{ paddingRight: "16px" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => tabHandleChange(null, 1)}
                  >
                    Go Back
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={daughterDetail.length == 1}
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    daughterDetail: state.daughter.daughterlist,
    dropDownListData: state.dropDownList.dropDownListData
      ? state.dropDownList.dropDownListData
      : {}
  };
};

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators(
//     { addUpdateMemberDataToMemberList, deleteMemberDataToMemberList },
//     dispatch
//   );
// };

export default withStyles(styles, { withTheme: true })(
  connect(mapStateToProps)(Daughters)
);

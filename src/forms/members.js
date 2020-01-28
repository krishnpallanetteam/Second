import React, { Component, Fragment } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import {
  withStyles,
  Button,
  Typography,
  Divider,
  Paper
} from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import {
  addUpdateMemberDataToMemberList,
  deleteMemberDataToMemberList,saveFamilyMemberData
} from "../action/memberAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import MemberForm from "./memberForm";
import MemberModel from "../model/memberModel";
import RenderListComponent from "../utils/renderListComponent";
import {getFormattedDate} from "../utils/commonUtils";
import produce from "immer";

const styles = theme => ({
  [theme.breakpoints.up("sm")]: {
    pdLeft_16: {
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
  listViewContainer: {
    maxHeight: `calc(100vh - 64px - 48px - 16px - 16px - 121px - 8px)`,
    overflowY: "auto"
  },
  paper: {
    padding: "8px"
  }
});

class Members extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleStatus: false,
      dataObj: props.memberDetail[0],
      formIndex: 0
    };
  }

   saveFamilyMembersDetail =() => {
    
    
    var  memberDetail = this.props.memberDetail.filter(f=>f.firstName !='');
    for(var i =0 ; i < memberDetail.length ;i++)
    {
      if (memberDetail[i].dateOfBirth) {
        memberDetail[i].dateOfBirthF = 
        getFormattedDate( new Date(memberDetail[i].dateOfBirth));
      }
      if (memberDetail[i].anniversaryDate) {
          memberDetail[i].anniversaryDateF = 
          getFormattedDate(new Date(memberDetail[i].anniversaryDate));
      }

    }
     debugger;
     this.props.saveFamilyMemberData(memberDetail);

  }

  removeOrResetMember = index => {
    const { parentIndex, deleteMemberDataToMemberList } = this.props;
    parentIndex !== undefined
      ? deleteMemberDataToMemberList(parentIndex, index)
      : deleteMemberDataToMemberList(index);
  };

  editDeleteMember = (type, index) => {
    console.log("formIndex, index", this.state.formIndex, index);
    console.log(this.props.memberDetail);
    if (type === "edit") {
      this.setState({
        dataObj: this.props.memberDetail[index],
        formIndex: index,
        toggleStatus: !this.state.toggleStatus
      });
    } else {
      this.setState({ formIndex: index });
      this.removeOrResetMember(index);
    }
  };

  toggleMemberModel = () => {
    this.setState({ toggleStatus: !this.state.toggleStatus });
  };

  render() {
    const {
      classes,
      memberDetail,
      dropDownListData,
      addUpdateMemberDataToMemberList,
      deleteMemberDataToMemberList,
      tabHandleChange
    } = this.props;
    const { toggleStatus, dataObj, formIndex } = this.state;
    console.log("^^^^^^^^^^^^^^^^^", this.props.memberDetail);
    return (
      <Fragment>
        {toggleStatus && (
          <MemberModel
            toggleStatus={toggleStatus}
            toggleMemberModel={this.toggleMemberModel}
            dataObj={dataObj}
            formIndex={formIndex}
            dropDownListData={dropDownListData}
            addUpdateMemberDataToMemberList={addUpdateMemberDataToMemberList}
            memberArrayLength={memberDetail.length}
          />
        )}
        <Grid container>
          <Grid item xs={12}>
            <Grid container justify="flex-start" alignItems="center">
              <Grid item xs={12} className={classes.pdLeft_16}>
                <Grid container justify="space-between" alignItems="flex-end">
                  <Grid item>
                    <Typography align="left" gutterBottom color="primary">
                      Member Detail
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Tooltip TransitionComponent={Zoom} title="Add">
                      <Button
                        color="primary"
                        // variant="contained"
                        onClick={() => this.toggleMemberModel()}
                      >
                        Add Members
                      </Button>
                    </Tooltip>
                  </Grid>
                </Grid>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <Grid container className={classes.listViewContainer}>
                  {memberDetail.length > 1 ? (
                    memberDetail.map(
                      (item, index) =>
                        index !== 0 && (
                          <Grid
                            item
                            xs={12}
                            key={index}
                            className={classes.pdLeft_16}
                          >
                            <Paper className={classes.paper}>
                              <Grid container alignItems="center">
                                <Grid item md={10} xs={12}>
                                  <RenderListComponent
                                    dataObject={item}
                                    eventName={
                                      dropDownListData.eventList[0].Name
                                    }
                                  />
                                </Grid>
                                <Grid item md={2} xs={12}>
                                  <Grid
                                    container
                                    justify="space-evenly"
                                    alignItems="center"
                                  >
                                    <Grid item>
                                      <Tooltip
                                        TransitionComponent={Zoom}
                                        title="Edit"
                                      >
                                        <IconButton
                                          aria-label="Delete"
                                          onClick={() =>
                                            this.editDeleteMember("edit", index)
                                          }
                                        >
                                          <EditIcon fontSize="small" />
                                        </IconButton>
                                      </Tooltip>
                                    </Grid>

                                    <Grid item>
                                      <Tooltip
                                        TransitionComponent={Zoom}
                                        title="Remove"
                                      >
                                        <IconButton
                                          aria-label="Delete"
                                          onClick={() =>
                                            this.editDeleteMember(
                                              "delete",
                                              index
                                            )
                                          }
                                        >
                                          <DeleteIcon fontSize="small" />
                                        </IconButton>
                                      </Tooltip>
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Paper>
                          </Grid>
                        )
                    )
                  ) : (
                    <Grid item xs={12}>
                      <Typography align="center">No Members Found</Typography>
                    </Grid>
                  )}
                </Grid>
              </Grid>
              {/* {memberDetail.map((item, index) => (
                <Grid item xs={12} key={index}>
                  <MemberForm
                    dataObj={item}
                    formIndex={index}
                    dropDownListData={dropDownListData}
                    addUpdateMemberDataToMemberList={
                      addUpdateMemberDataToMemberList
                    }
                    deleteMemberDataToMemberList={deleteMemberDataToMemberList}
                  />
                </Grid>
              ))} */}
              <Grid item xs={12} style={{ paddingTop: "32px" }}>
                <Grid container justify="center">
                  <Grid item style={{ padding: "8px" }}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => tabHandleChange(null, 0)}
                    >
                      Go Back
                    </Button>
                  </Grid>
                  <Grid item style={{ padding: "8px" }}>
                    <Button
                      variant="contained"
                      color="primary"
                      disabled={memberDetail.length == 1}
                      onClick={() => this.saveFamilyMembersDetail()}
                    >{`Save & Next`}</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Fragment>
    );
  }

}



const mapStateToProps = state => {
  console.log(state);
  return {
    memberDetail: state.member.memberList,
    dropDownListData: state.dropDownList.dropDownListData
      ? state.dropDownList.dropDownListData
      : {}
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { addUpdateMemberDataToMemberList, deleteMemberDataToMemberList,
      saveFamilyMemberData },
      dispatch
  );
};

export default withStyles(styles, { withTheme: true })(
  connect(mapStateToProps, mapDispatchToProps)(Members)
);

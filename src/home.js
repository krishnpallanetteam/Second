import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";
import FamilyForm from "./forms/familyForm";
import Members from "./forms/members";
import Daughters from "./forms/daughters";
import logo from "./images/final_gujarati_transparent.png";

const tabsArray = [
  { label: "Head", value: "family" },
  { label: "Members", value: "members" },
  { label: "Daughter Married Outside Navgam Samaj", value: "daughters" }
];

const useStyles = theme => ({
  tabContainer: {
    width: "100%"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  paperTabsContainer: {
    margin: "4px",
    paddingLeft: "16px",
    paddingRight: "16px",
    paddingBottom: "8px"
  },
  header:  {
    backgroundColor: "#ffffff",
    paddingTop: "12px",
    paddingBottom: "12px"
  }

  // paperTabContentContainer: {
  //   paddingTop: '8px',
  //   paddingBottom: '8px'
  // }
});

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "family"
    };
  }

  tabHandleChange = (event, index) => {
    console.log(event,index);
    if (event) this.setState({ selectedTab: index });
    else this.setState({ selectedTab: tabsArray[index].value });
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <AppBar position="sticky" className={classes.header} >
          <Toolbar>
            {/* <IconButton edge="start" 
              className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton> */}
            <Grid container>
              <Grid className="logo">
                <a href="#">
                  <img src={logo} ></img>
                </a>
              </Grid>
              <Grid item>
                <Typography variant="h6" className={classes.title}>
                 SRI NAVGAM JAIN VISA PORWAD SAMAJ
                </Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        {/* <AppBar position="static" color="default"> */}
        <Paper className={classes.paperTabsContainer}>
          <Tabs
            indicatorColor="primary"
            value={this.state.selectedTab}
            onChange={(event, value) => this.tabHandleChange(event, value)}
          >
            {tabsArray.map((item, index) => (
              <Tab key={index} label={item.label} value={item.value} />
            ))}
          </Tabs>
        </Paper>
        {/* </AppBar> */}
        <Grid
          container
          justify="center"
          style={{ flexGrow: 1, paddingTop: "16px" }}
        >
          <Grid item xs={11}>
            <Paper
              style={{
                paddingTop: "8px",
                // paddingLeft: "24px",
                // paddingRight: "24px",
                paddingBottom: "8px",
                overflowY: "auto",
                height: `calc(100vh - 64px - 48px - 16px - 16px - 8px)`
              }}
            >
              {this.state.selectedTab === "family" && (
                <FamilyForm tabHandleChange={this.tabHandleChange} />
              )}
              {this.state.selectedTab === "members" && (
                <Members tabHandleChange={this.tabHandleChange} />
              )}
              {this.state.selectedTab === "daughters" && (
                <Daughters tabHandleChange={this.tabHandleChange} />
              )}
            </Paper>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(Home);

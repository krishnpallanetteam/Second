import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  modelACheckBoxToggle,
  getAllCountryContacts
} from '../action/modelAction';
import ModelC from './ModelC';
import CircularProgress from '@material-ui/core/CircularProgress';

let count = 1;

const styles = theme => ({
  contact: {
    padding: theme.spacing(1),
    '&:hover': {
      cursor: 'pointer'
    }
  },
  dialogTitle: { borderBottom: '1px solid gray', paddingBottom: '5px' },
  dialogFooter: {
    marginLeft: '12px',
    marginRight: theme.spacing(1)
  }
});

class ModelA extends Component {

  handleChange = async event => {
    let value = event.target.value.trim();
    if (value) {
      let query = {};
      if (!event.key === 'Enter') {
        setTimeout(function () {
          if (isNaN(event.target.value)) {
            query.names = value;
            this.props.getAllCountryContacts(1, false, null, query);
          } else {
            query.number = value;
            this.props.getAllCountryContacts(1, false, null, query);
          }
        }, 1000);
      } else {
        if (isNaN(event.target.value)) {
          query.names = value;
          await this.props.getAllCountryContacts(1, false, null, query);
        } else {
          query.number = value;
          await this.props.getAllCountryContacts(1, false, null, query);
        }
      }
    } else if (this.props.allCountryList.length === 0) {
      await this.props.getAllCountryContacts(1, false, null);
    }
  };

  loadMoreList(page) {
    var containerElement = (document.getElementsByClassName('MuiDialogContent-root')[0]);
    var containerHeight = containerElement.offsetHeight;
    var scrollHeight = containerElement.scrollHeight;
    var scrollPosition = containerElement.scrollTop;
    if ((scrollHeight - containerHeight) === scrollPosition) {
      count = count + 1
      try {
        this.props.getAllCountryContacts(count, true);
      } catch (error) {
        console.log(error);
      }
    }

  }

  async componentDidMount() {
    try {
      await this.props.getAllCountryContacts();
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { model_A_toggle, modelA, buttonAClass, buttonBClass, modelACheckBoxToggle, classes, toggleBothModel, toggleModelC, modelC } = this.props;
    return (
      <>
        <ModelC toggleModelC={toggleModelC} modelC={modelC} />
        <Dialog
          open={modelA.model_A}
          onClose={model_A_toggle}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          // maxWidth="sm"
          fullWidth
          disableBackdropClick={true}
          disableEscapeKeyDown={true}
        // style={{ height: '400px', overflow: "auto" }}
        >
          <DialogTitle id="alert-dialog-title">
            <Grid container direction="row" justify="space-between" alignItems="flex-end" className={classes.dialogTitle}>
              <Grid item>
                <Typography gutterBottom>Model A</Typography>
              </Grid>
              <Grid item>
                <TextField
                  name="model_A_Search"
                  label="Search"
                  autoComplete='off'
                  onKeyUp={(event) => {
                    // console.log(event.key, event.target.value);
                    this.handleChange(event);
                  }}
                />
              </Grid>
            </Grid>
          </DialogTitle>
          <DialogContent onScroll={e => {
            this.loadMoreList();
          }}>
            {modelA.allCountryList ?
              <Grid container className="allCountryList">
                {modelA.allCountryList.length ? (modelA.allCountryList.map((item, i) => (<Grid item xs={12} key={i} onClick={() => toggleModelC(item)}>
                  <Grid container justify="flex-start" alignItems="center" spacing={2}>
                    {modelA.checkBox_status ? (item.id % 2 === 0) && (
                      <>
                        <Grid item sm={3} className={classes.contact}>
                          <Typography gutterBottom color="textSecondary">{`ID : ${item.id}`}</Typography>
                        </Grid>
                        <Grid item sm={5} className={classes.contact}>
                          <Typography gutterBottom color="textSecondary">{`PhoneNo : ${item.phone_number}`}</Typography>
                        </Grid>
                        <Grid item sm={4} className={classes.contact}>
                          <Typography gutterBottom color="textSecondary">{`CountryId : ${item.country_id}`}</Typography>
                        </Grid>
                      </>) : (<>
                        <Grid item sm={3} className={classes.contact}>
                          <Typography gutterBottom color="textSecondary">{`ID : ${item.id}`}</Typography>
                        </Grid>
                        <Grid item sm={5} className={classes.contact}>
                          <Typography gutterBottom color="textSecondary">{`PhoneNo : ${item.phone_number}`}</Typography>
                        </Grid>
                        <Grid item sm={4} className={classes.contact}>
                          <Typography gutterBottom color="textSecondary">{`CountryId : ${item.country_id}`}</Typography>
                        </Grid>
                      </>)}
                  </Grid>
                </Grid>))) : (
                    <Grid container justify="center" alignItems="center">
                      <Grid item>
                        <Typography>No Record Found</Typography>
                      </Grid>
                    </Grid>
                  )}
              </Grid> :
              <Grid container justify="center" alignItems="center">
                <Grid item>
                  <CircularProgress color="primary" size={55} />
                </Grid>
              </Grid>
            }
          </DialogContent>
          <DialogActions className={classes.dialogFooter}>
            <Grid container justify="space-between" alignItems="center">
              <Grid item xs={3}>
                <FormControlLabel
                  control={
                    <Checkbox checked={modelA.checkBox_status} onChange={(eve, value) => modelACheckBoxToggle(value)} value="model_A_checkBox" />
                  }
                  label="Only even"
                />
              </Grid>
              <Grid item>
                <Button variant="contained" className={buttonAClass}>
                  All Contacts
         		 </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" onClick={() => toggleBothModel('model_B')} className={buttonBClass}>
                  US Contacts
          			</Button>
              </Grid>
              <Grid item>
                <Button variant="contained" onClick={() => model_A_toggle()} color="primary">
                  Close
         		 </Button>
              </Grid>
            </Grid>
          </DialogActions>
        </Dialog >
      </>
    )
  };
}

const mapStateToProps = (state) => {
  return {
    allCountryList: state.model.modelA.allCountryList,
    modelC: state.model.modelC
    // modelB: state.model.modelB,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    modelACheckBoxToggle,
    getAllCountryContacts
  }, dispatch);
};

export default withStyles(styles, { withTheme: true })(connect(mapStateToProps, mapDispatchToProps)(ModelA))
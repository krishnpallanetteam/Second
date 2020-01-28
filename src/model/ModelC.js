import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	contact: {
		padding: theme.spacing(1),
		'&:hover': {
			cursor: 'pointer'
		}
	},
	dialogTitle: { borderBottom: '1px solid gray', paddingBottom: '5px' },
	dialogBody: {
		// height: '400px',
		// overflow: "auto",
		// border: '2px solid #46139f'
	}
});

class ModelC extends Component {

	render() {
		const { toggleModelC, modelC, classes } = this.props;
		return (
			<Dialog
				open={modelC.model_C}
				onClose={toggleModelC}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
				maxWidth="sm"
				disableBackdropClick={true}
				disableEscapeKeyDown={true}
				classes={{ 'paper': classes.dialogBody }}
			>
				<DialogTitle id="alert-dialog-title">
					<Typography gutterBottom>Model C</Typography>
				</DialogTitle>
				<DialogContent onScroll={e => {
					this.loadMoreList();
				}} style={{ borderTop: '1px solid gray', borderBottom: '1px solid gray' }}>
					{modelC.item &&
						<Grid container className="usCountryList">
							{Object.keys(modelC.item).length && (<Grid item xs={12}>
								<Grid container justify="flex-start" alignItems="center" spacing={2}>
									<Grid item sm={3} className={classes.contact}>
										<Typography gutterBottom color="textSecondary">{`ID : ${modelC.item.id}`}</Typography>
									</Grid>
									<Grid item sm={5} className={classes.contact}>
										<Typography gutterBottom color="textSecondary">{`PhoneNo : ${modelC.item.phone_number}`}</Typography>
									</Grid>
									<Grid item sm={4} className={classes.contact}>
										<Typography gutterBottom color="textSecondary">{`CountryId : ${modelC.item.country_id}`}</Typography>
									</Grid>
								</Grid>
							</Grid>)}
						</Grid>
					}
				</DialogContent>
				<DialogActions>
					<Button variant="contained" onClick={() => toggleModelC(null)} color="primary">
						Close
         		 </Button>
				</DialogActions>
			</Dialog >
		)
	};
}
export default withStyles(styles, { withTheme: true })(ModelC);

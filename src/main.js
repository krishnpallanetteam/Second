import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
	modelAToggle, modelBToggle, modelBCheckBoxToggle, modelCToggle
} from './action/modelAction';
import ModelA from './model/ModelA';
import ModelB from './model/ModelB';

const companyId = 226;
const styles = theme => ({
	containerPadding: {
		padding: theme.spacing(1)
	},
	modelButton_1: {
		backgroundColor: '#46139f',
		color: theme.palette.common.white,
		fontWeight: 500
	},
	modelButton_2: {
		backgroundColor: '#ff7f50',
		color: theme.palette.common.white,
		fontWeight: 500
	}
});

class Main extends Component {
	openModel = type => {
		if (type === 'model_A') this.model_A_toggle();
		else this.model_B_toggle();
	}

	model_A_toggle = () => {
		const { modelAToggle, modelA } = this.props;
		modelAToggle(!modelA.model_A);
		if (modelA.model_A) this.props.history.push('/');
		else this.props.history.push('model_A');
	}

	model_B_toggle = () => {
		const { modelBToggle, modelB } = this.props;
		modelBToggle(!modelB.model_B);
		if (modelB.model_B) this.props.history.push('/');
		else this.props.history.push('model_B');
	}

	toggleBothModel = type => {
		const { modelAToggle, modelA, modelBToggle, modelB } = this.props;
		if (type === 'model_A') {
			modelBToggle(!modelB.model_B);
			this.model_A_toggle();
		} else {
			modelAToggle(!modelA.model_A);
			this.model_B_toggle();
		}
	}

	toggleModelC = (item) => {
		const { modelCToggle, modelC } = this.props;
		modelC.model_C ? modelCToggle(!modelC.model_C, null) : modelCToggle(!modelC.model_C, item);
	}


	render() {
		const { classes, modelA, modelB } = this.props;
		return (
			<>
				{modelA.model_A &&
					<ModelA
						model_A_toggle={this.model_A_toggle}
						buttonAClass={classes.modelButton_1}
						buttonBClass={classes.modelButton_2}
						modelA={modelA}
						companyId={companyId}
						toggleBothModel={this.toggleBothModel}
						toggleModelC={this.toggleModelC}
					/>}
				{modelB.model_B &&
					<ModelB
						model_B_toggle={this.model_B_toggle}
						buttonAClass={classes.modelButton_1}
						buttonBClass={classes.modelButton_2}
						modelB={modelB}
						companyId={companyId}
						toggleBothModel={this.toggleBothModel}
						toggleModelC={this.toggleModelC}
					/>}
				<Grid container justify="center" alignItems="center">
					<Grid item className={classes.containerPadding}>
						<Button variant="contained" className={classes.modelButton_1} onClick={() => this.openModel('model_A')}>
							Button A
              </Button>
					</Grid>
					<Grid item className={classes.containerPadding}>
						<Button variant="contained" className={classes.modelButton_2} onClick={() => this.openModel('model_B')}>
							Button B
              </Button>
					</Grid>
				</Grid>
			</>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		modelA: state.model.modelA,
		modelB: state.model.modelB,
		modelC: state.model.modelC
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		modelAToggle,
		modelBToggle,
		modelBCheckBoxToggle,
		modelCToggle
	}, dispatch);
};

export default withStyles(styles, { withTheme: true })(connect(mapStateToProps, mapDispatchToProps)(Main));

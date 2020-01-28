import { MODEL_A_TOGGLE, MODEL_A_CHECKBOX_STATUS_TOGGLE, MODEL_A_ALL_COUNTRY_DATA, MODEL_B_TOGGLE, MODEL_B_CHECKBOX_STATUS_TOGGLE, MODEL_B_US_COUNTRY_DATA, MODEL_C_TOGGLE } from '../action/actionTypes';
import { INITIAL_STATE } from '../initialState';

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MODEL_A_TOGGLE: {
            return {
                ...state,
                modelA: {
                    model_A: action.payload.status,
                    checkBox_status: state.modelA.checkBox_status,
                    allCountryList: state.modelA.allCountryList,
                }
            };
        }
        case MODEL_A_CHECKBOX_STATUS_TOGGLE: {
            return {
                ...state,
                modelA: {
                    model_A: state.modelA.model_A,
                    allCountryList: state.modelA.allCountryList,
                    checkBox_status: action.payload.status,
                }
            };
        }

        case MODEL_A_ALL_COUNTRY_DATA: {
            return {
                ...state,
                modelA: {
                    model_A: state.modelA.model_A,
                    checkBox_status: state.modelA.checkBox_status,
                    allCountryList: action.payload.contactList,
                }
            };
        }

        case MODEL_B_TOGGLE: {
            return {
                ...state,
                modelB: {
                    model_B: action.payload.status,
                    checkBox_status: state.modelB.checkBox_status,
                    usCountryList: state.modelB.usCountryList,
                }
            };
        }

        case MODEL_B_CHECKBOX_STATUS_TOGGLE: {
            return {
                ...state,
                modelB: {
                    model_B: state.modelB.model_B,
                    checkBox_status: action.payload.status,
                    usCountryList: state.modelB.usCountryList,
                }
            };
        }

        case MODEL_B_US_COUNTRY_DATA: {
            return {
                ...state,
                modelB: {
                    model_B: state.modelB.model_B,
                    usCountryList: action.payload.contactList,
                    checkBox_status: state.modelB.checkBox_status,
                }
            };
        }

        case MODEL_C_TOGGLE: {
            return {
                ...state,
                modelC: {
                    model_C: action.payload.status,
                    item: action.payload.item
                }
            };
        }

        default:
            return state;
    }

};

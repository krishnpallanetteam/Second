import { MODEL_A_TOGGLE, MODEL_A_CHECKBOX_STATUS_TOGGLE, MODEL_A_ALL_COUNTRY_DATA, MODEL_B_TOGGLE, MODEL_B_US_COUNTRY_DATA, MODEL_B_CHECKBOX_STATUS_TOGGLE, MODEL_C_TOGGLE } from './actionTypes';
import { axiosInstance } from '../api/axiosConfig';

export const modelAToggle = status => {
    return (dispatch, getState) => {
        dispatch({
            type: MODEL_A_TOGGLE,
            payload: { status }
        });
    };
}

export const modelACheckBoxToggle = status => {
    return (dispatch) => {
        dispatch({
            type: MODEL_A_CHECKBOX_STATUS_TOGGLE,
            payload: { status }
        });
    };
}

export const getAllCountryContacts = (page = 1, loadMore = false, countryId = null, params = null) => {
    return async (dispatch, getState) => {
        let queryObj = {
            companyId: 171,
            page
        };
        if (countryId) queryObj.countryId = countryId;
        if (params && Object.keys(params).length) {
            queryObj.query = {};
            if (params.names) queryObj.query.names = params.names;
            else if (params.number) queryObj.query.number = params.number;
        }
        try {
            const response = await axiosInstance({
                method: 'get',
                params: queryObj
            });
            if (response.status === 200) {
                let data = response.data;
                let contactList = [];
                if (countryId) {
                    if (loadMore) {
                        let allState = getState();
                        let list = allState.model.modelB.usCountryList;
                        contactList = list;
                    }
                    data.contacts_ids.forEach(item => {
                        contactList.push(data.contacts[item]);
                    });
                    dispatch({
                        type: MODEL_B_US_COUNTRY_DATA,
                        payload: { contactList }
                    });
                    return response.data;
                } else {
                    if (loadMore) {
                        let allState = getState();
                        let list = allState.model.modelA.allCountryList;
                        contactList = list;
                    }
                    data.contacts_ids.forEach(item => {
                        contactList.push(data.contacts[item]);
                    });
                    dispatch({
                        type: MODEL_A_ALL_COUNTRY_DATA,
                        payload: { contactList }
                    });
                    return response.data;
                }
            } else if (response.status === 404) {
                return response;
            } else if (response.status === 500) {
                return response;
            }
        } catch (error) {
            return error
        }
    };
};

export const modelBToggle = status => {
    return (dispatch) => {
        dispatch({
            type: MODEL_B_TOGGLE,
            payload: { status }
        });
    };
}

export const modelBCheckBoxToggle = status => {
    return (dispatch) => {
        dispatch({
            type: MODEL_B_CHECKBOX_STATUS_TOGGLE,
            payload: { status }
        });
    };
}

export const modelCToggle = (status, item = null) => {
    return (dispatch, getState) => {
        dispatch({
            type: MODEL_C_TOGGLE,
            payload: { status, item }
        });
    };
}

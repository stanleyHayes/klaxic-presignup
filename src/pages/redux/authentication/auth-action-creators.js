import {
    SIGN_UP_FAILURE,
    SIGN_UP_SUCCESS,
    SIGN_UP_REQUEST
} from "./auth-types";

import axios from "axios";

export const signUpRequest = () => {
    return {
        type: SIGN_UP_REQUEST
    }
}

export const signUpSuccess = (user) => {
    return {
        type: SIGN_UP_SUCCESS,
        payload: user
    }
}

export const signUpFailure = (error) => {
    return {
        type: SIGN_UP_FAILURE,
        payload: error
    }
}

export const signUp = (user, history) => {
    return function (dispatch) {
        dispatch(signUpRequest());
        axios({
            method: 'post',
            url: 'http://localhost:5000/api/v1/auth/register',
            data: user
        }).then(response => {
            dispatch(signUpSuccess(response.data.data));
            history.push('/signup/success')
        }).catch(error => {
            dispatch(signUpFailure( error.response.data.error));
        });
    }
}

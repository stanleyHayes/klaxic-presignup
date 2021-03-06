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
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:3000'
            },
            data: user
        }).then(response => {
            history.push('/signup/success');
            dispatch(signUpSuccess(response.data.data));
        }).catch(error => {
            dispatch(signUpFailure( error.response.data.error));
        });
    }
}

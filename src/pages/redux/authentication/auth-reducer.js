import {SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE} from "./auth-types";

const INITIAL_STATE = {
    currentUser: {},
    loading: false,
    error: null
}

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_UP_REQUEST:
            return {
                ...state,
                loading: true
            }

        case SIGN_UP_SUCCESS:
            return {
                ...state,
                loading: false,
                currentUser: action.payload,
                error: null
            }

        case SIGN_UP_FAILURE:
            return {
                ...state,
                loading: false,
                currentUser: null,
                error: action.payload
            }
        default:
            return state;
    }
}


export default authReducer;

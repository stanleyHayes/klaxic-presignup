import {UPDATE_USER} from "./user-types";


export const updateUserRequest = (user) => {
    return {
        type: UPDATE_USER,
        payload: user
    }
}

export const updateUser = (user, history, url) => {
    return function (dispatch) {
        dispatch(updateUserRequest(user));
        history.push(url)
    }
}

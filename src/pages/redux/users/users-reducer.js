import {UPDATE_USER} from "./user-types";

const INITIAL_STATE = {
    user: {}
}

export const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_USER:
            return {
                ...state,
                user: {...state.user, ...action.payload}
            }

        default:
            return state;
    }
}

export default userReducer;

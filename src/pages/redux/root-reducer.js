import {combineReducers} from "redux";
import authReducer from "./authentication/auth-reducer";
import userReducer from "./users/users-reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer
});

export default rootReducer;

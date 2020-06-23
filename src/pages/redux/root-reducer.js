import {combineReducers} from "redux";

import authReducer from "./authentication/auth-reducer";
import userReducer from "./users/users-reducer";
import interviewReducer from "./interview/interview-reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    interview: interviewReducer
});

export default rootReducer;

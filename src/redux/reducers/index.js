import { combineReducers } from "redux";
import {UserLoginReducer, UserLogoutReducer, UserSignupReducer} from "./UserReducers";

const rootReducer = combineReducers({
    userSingup: UserSignupReducer,
    userLogin: UserLoginReducer,
    userLogout: UserLogoutReducer
})

export default rootReducer;
import { combineReducers } from "redux";
import {UserLoginReducer, UserLogoutReducer, UserSignupReducer} from "./UserReducers";
import { CoursesReducer } from "./CourseReducer";

const rootReducer = combineReducers({
    userSingup: UserSignupReducer,
    userLogin: UserLoginReducer,
    userLogout: UserLogoutReducer,
    courses: CoursesReducer
})

export default rootReducer;
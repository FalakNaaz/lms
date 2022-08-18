import { combineReducers } from "redux";
import {UserLoginReducer, UserLogoutReducer, UserSignupReducer} from "./UserReducers";
import { CoursesReducer } from "./CourseReducer";
import SidebarReducer from "./SidebarReducer";

const rootReducer = combineReducers({
    userSingup: UserSignupReducer,
    userLogin: UserLoginReducer,
    userLogout: UserLogoutReducer,
    courses: CoursesReducer,
    sidebar: SidebarReducer
})

export default rootReducer;
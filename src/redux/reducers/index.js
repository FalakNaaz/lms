import { combineReducers } from "redux";
import {UserLoginReducer, UserLogoutReducer, UserSignupReducer} from "./UserReducers";
import { CoursesReducer } from "./CourseReducer";
import SidebarReducer from "./SidebarReducer";
import RoleReducer from "./RoleReducer";

const rootReducer = combineReducers({
    userSingup: UserSignupReducer,
    userLogin: UserLoginReducer,
    userLogout: UserLogoutReducer,
    courses: CoursesReducer,
    sidebar: SidebarReducer,
    role: RoleReducer
})

export default rootReducer;
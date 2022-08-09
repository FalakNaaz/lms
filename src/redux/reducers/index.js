import { combineReducers } from "redux";
import UserReducer from "./UserReducers";

const rootReducer = combineReducers({
    user: UserReducer
})

export default rootReducer;
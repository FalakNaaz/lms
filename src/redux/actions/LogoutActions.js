import { ActionTypes } from "../constants/action-types";
import { auth } from "../../firebase/firebase";

const LogoutAction = () => {
    return {
        type: ActionTypes.USER_LOGOUT,
        payload: "User have been successfully Logged out",
    }
}

const LogoutFailureAction = (error) => {
    return {
        type: ActionTypes.USER_LOGOUT_FAILURE,
        payload: error,
    }
}

export const Logout = () => async dispatch => {
    try {
        await auth.signOut()
        localStorage.removeItem("currUser");
        dispatch(LogoutAction());
    } catch (err) {
        dispatch(LogoutFailureAction(err.message));
    }
}
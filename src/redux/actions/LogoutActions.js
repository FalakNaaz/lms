import { ActionTypes } from "../constants/action-types";

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
     localStorage.removeItem("currUser");
     localStorage.removeItem("currUserEmail");
     localStorage.removeItem("currUserRole");

        dispatch(LogoutAction());
    } catch (err) {
        dispatch(LogoutFailureAction(err.message));
    }
}
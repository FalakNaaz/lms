import { ActionTypes } from "../constants/action-types"
import { auth } from "../../firebase/firebase"

const LoginAction = () => {
    return {
        type: ActionTypes.USER_LOGIN,
        payload: true,
    }
}

const LoginSuccessAction = (userData) => {
    return {
        type: ActionTypes.USER_LOGIN_SUCCESS,
        payload: userData,
    }
}

const LoginFailureAction = (errMsg) => {
    return {
        type : ActionTypes.USER_LOGIN_FAILURE,
        payload: errMsg
    }
}

export const login = (email, password) => async dispatch => {
    dispatch(LoginAction);
    try{
        await auth.signInWithEmailAndPassword(email,password)
        localStorage.setItem("currUser", email)
        const userData={email,password}
        dispatch(LoginSuccessAction(userData));
    } catch (err) {
        dispatch(LoginFailureAction(err.message));
    }
}
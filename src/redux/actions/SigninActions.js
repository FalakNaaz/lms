import { ActionTypes } from "../constants/action-types"
import { auth } from "../../firebase/firebase"

export const LoginAction = () => {
    return {
        type: ActionTypes.USER_LOGIN_SUCCESS
    }
}

export const LoginFailureAction = () => {
    return {
        type : ActionTypes.USER_LOGIN_FAILURE,
        payload:'Invalid login credentials',
    }
}

export const Signin = (email, password, callback) => async dispatch => {
    try{
        auth.signInWithEmailAndPassword(email,password)
        .then(()=>{
            dispatch(LoginAction());
            callback();
        })
        .catch(()=>{
            dispatch(LoginFailureAction());
        })
    } catch (err) {
        dispatch(LoginFailureAction());
    }
}
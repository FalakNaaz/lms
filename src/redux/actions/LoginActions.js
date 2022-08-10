import { ActionTypes } from "../constants/action-types"
import { auth } from "../../firebase/firebase"

const LoginAction = (userData) => {
    return {
        type: ActionTypes.USER_LOGIN_SUCCESS,
        payload:userData,
    }
}

const LoginFailureAction = () => {
    return {
        type : ActionTypes.USER_LOGIN_FAILURE,
        payload:'Invalid login credentials',
    }
}

export const Signin = (email, password) => async dispatch => {
    try{
        await auth.signInWithEmailAndPassword(email,password)
        .then(()=>{
            const userData={email,password}
            dispatch(LoginAction(userData));
        })
        .catch(()=>{
            dispatch(LoginFailureAction());
        })
    } catch (err) {
        dispatch(LoginFailureAction());
    }
}
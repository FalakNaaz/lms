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
            const userData={email,password}
            dispatch(LoginAction(userData));
            console.log("User sign in successfully",userData);
        
    } catch (err) {
        dispatch(LoginFailureAction());
    }
}
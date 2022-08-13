import { ActionTypes } from "../constants/action-types"
import { auth } from '../../firebase/firebase'

const SignupAction = () => {
    return {
        type: ActionTypes.USER_SIGNUP,
        payload: true,
    }
}

const SignupSuccessAction = () => {
    return {
        type: ActionTypes.USER_SIGNUP_SUCCESS,
        payload: "User Signup Successfully! Now you can Login!"
    }
}

const SignupFailureAction = (errMsg) => {
    return {
        type: ActionTypes.USER_SIGNUP_FAILURE,
        payload: errMsg
    }
}

export const Signup = (email, password) =>{
    return async(dispatch) => {
        dispatch(SignupAction())
        try {
            await auth.createUserWithEmailAndPassword(email, password)
            dispatch(SignupSuccessAction())
    
            // auth.onAuthStateChanged(function (user) {
            //     user.sendEmailVerification();
            // });
            // auth.onAuthStateChanged(function (user) {
            //     if (user.emailVerified) {
            //         dispatch(SignupSuccessAction())
            //     } else {
            //         dispatch(SignupFailureAction())
            //     }
            // })
        }
        catch (err) {
            dispatch(SignupFailureAction(err.message))
        }
    }
}
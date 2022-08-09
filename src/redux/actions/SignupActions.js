import { ActionTypes } from "../constants/action-types"
import { auth } from '../../firebase/firebase'

export const SignupAction = () => {
    return {
        type: ActionTypes.USER_SIGNUP,
        payload: "User successfully Signed up.",
    }
}

export const SignupSuccessAction = () => {
    return {
        type: ActionTypes.SIGNUP_SUCCESS,
        payload: 'Your account was successfully created! Now you need to verify your e-mail address, please go check your inbox.'
    }
}

export const SignupFailureAction = () => {
    return {
        type: ActionTypes.USER_FAILURE,
        payload: "Something went wrong, we couldn't create your account. Please try again.",
    }
}

export const Signup = (email, password) => async dispatch => {
    try {
        auth.createUserWithEmailAndPassword(email, password).then(dataBeforeEmail => {
            auth.onAuthStateChanged(function (user) {
                user.sendEmailVerification();
            });
        })
            .then(dataBeforeEmail => {
                auth.onAuthStateChanged(function (user) {
                    if (user.emailVerified) {
                        dispatch(SignupSuccessAction())
                    } else {
                        dispatch(SignupFailureAction())
                    }
                })
            })
            .catch(function (err) {
                dispatch(SignupFailureAction())
            })
    }
    catch (err) {
        dispatch(SignupFailureAction())
    }
}

const LoginUser = () => {
    return function (dispatch) {
        dispatch(LoginAction);
        auth.signInWithEmailAndPassword
    }
}
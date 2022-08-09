import { ActionTypes } from "../constants/action-types"

export const LoginAction = (userData) => {
    return {
        type: ActionTypes.USER_LOGIN,
        payload:userData,
    }
}

export const SignupAction = (userData) => {
    return {
        type: ActionTypes.USER_SIGNUP,
        payload:userData,
    }
}
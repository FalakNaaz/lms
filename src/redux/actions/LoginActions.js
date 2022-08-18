import { ActionTypes } from "../constants/action-types";
import axios from "axios";

const LoginAction = () => {
    return {
        type: ActionTypes.USER_LOGIN,
        payload: true,
    };
};

const LoginSuccessAction = (userData) => {
    return {
        type: ActionTypes.USER_LOGIN_SUCCESS,
        payload: userData,
    };
};

const LoginFailureAction = (errMsg) => {
    return {
        type: ActionTypes.USER_LOGIN_FAILURE,
        payload: errMsg,
    };
};

export const login = (email, password) => async (dispatch) => {
    dispatch(LoginAction);
    try {
        const response = await axios.post("http://localhost:1337/api/auth/local/", {
            identifier: email,
            password: password,
        })
        localStorage.setItem("currUser", response.data.jwt);
        localStorage.setItem("currUserEmail", response.data.user.email);
        const userData = { email, password };
        dispatch(LoginSuccessAction(userData));
       
    } catch (err) {
        dispatch(LoginFailureAction("Invalid Email or Password, Please try again!"));
        alert("Invalid Email or Password, Please try again!");
    }
};
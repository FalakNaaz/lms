import { ActionTypes } from "../constants/action-types";
import { auth } from "../../firebase/firebase";
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

        //await auth.signInWithEmailAndPassword(email,password)

        const response = await axios.post("http://localhost:1337/api/auth/local/", {
            identifier: email,
            password: password, //Password for kapman is Password
        })
        localStorage.setItem("currUser", email);
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);

        //   .then((response) => {
        //     console.log("User profile", response.data.user);
        //     console.log("User token", response.data.jwt);
        //   })
        //   .catch((error) => {
        //     console.log("An error occurred:", error.response);
        //     dispatch(LoginFailureAction(error.message));
        //   });
        const userData = { email, password };
        dispatch(LoginSuccessAction(userData));
    } catch (err) {

        console.log("An error occurred:hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh", err.response);
        dispatch(LoginFailureAction(err.message));
    }
};

import { ActionTypes } from "../constants/action-types";
import axios from "axios";

const SignupAction = () => {
  return {
    type: ActionTypes.USER_SIGNUP,
    payload: true,
  };
};

const SignupSuccessAction = () => {
  return {
    type: ActionTypes.USER_SIGNUP_SUCCESS,
    payload: "User Signup Successfully! Now you can Login!",
  };
};

const SignupFailureAction = (errMsg) => {
  return {
    type: ActionTypes.USER_SIGNUP_FAILURE,
    payload: errMsg,
  };
};

export const Signup = (email, password, username,fullName) => {
  return async (dispatch) => {
    dispatch(SignupAction());
    try {
      await axios.post(
        "http://localhost:1337/api/auth/local/register",
        {
          "username": username,
          "email": email,
          "password": password,
          "assessmentScore":0,
          "fullName":fullName
        }
      );

      dispatch(SignupSuccessAction());
    } catch (err) {
      dispatch(SignupFailureAction(err.message));
    }
  };
};
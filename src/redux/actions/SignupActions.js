import { ActionTypes } from "../constants/action-types";
import { auth } from "../../firebase/firebase";
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

export const Signup = (email, password, username) => {
  return async (dispatch) => {
    dispatch(SignupAction());
    try {
      //await auth.createUserWithEmailAndPassword(email, password);
      const response = await axios.post(
        "http://localhost:1337/api/auth/local/register",
        {
          username: username,
          email: email,
          password: password,
        }
      );
      console.log("User profile", response.data.user);
      console.log("User token", response.data.jwt);

      dispatch(SignupSuccessAction());
     

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
    } catch (err) {
      console.log("An error occurred:", err.response);
      dispatch(SignupFailureAction(err.message));
    }
  };
};

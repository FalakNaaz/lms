import { ActionTypes } from "../constants/action-types";

const initialState1 = {
  signupLoading: false,
  signupError: "",
  singupMsg: "",
};

export const UserSignupReducer = (state = initialState1, action) => {
  switch (action.type) {
    case ActionTypes.USER_SIGNUP:
      return {
        signupLoading: action.payload,
        ...state,
      };
    case ActionTypes.USER_SIGNUP_SUCCESS:
      return {
        singupMsg: action.payload,
        ...state,
      };

    case ActionTypes.USER_SIGNUP_FAILURE:
      return {
        signupError: action.payload,
        ...state,
      };

    default:
      return state;
  }
};

const initialState2 = {
  loginLoading: false,
  currentUser: {},
  loginError: "",
  loginMsg: "",
};

export const UserLoginReducer = (state = initialState2, action) => {
  switch (action.type) {
    case ActionTypes.USER_LOGIN:
      return {
        loginLoading: action.payload,
        ...state,
      };
    case ActionTypes.USER_LOGIN_SUCCESS:
      return {
        currentUser: {
          ...action.payload
        },
        ...state
      };

    case ActionTypes.USER_LOGIN_FAILURE:
      return {
        loginError: action.payload,
        ...state,
      };
    default:
      return state;
  }
};
const initialState3 = {
  logoutLoading: false,
  logoutErr: "",
  logoutMsg: "",
};
export const UserLogoutReducer = (state = initialState3, action) => {
  switch (action.type) {
    case ActionTypes.USER_LOGOUT:
      return {
        logoutLoading: true,
        logoutMsg: action.payload,
        ...state,
      };

    case ActionTypes.USER_LOGOUT_FAILURE:
      return {
        logoutErr: action.payload,
        ...state,
      };

    default:
      return state;
  }
};


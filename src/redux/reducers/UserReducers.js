import { ActionTypes } from "../constants/action-types";

const initialState = {
    loading: false,
    user: [],
    error: '',
}
const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.USER_SIGNUP:
            return {
                users: action.payload,
                loading: true,
                ...state
            }

        case ActionTypes.USER_LOGIN_SUCCESS:
            return {
                loading: false,
                user:action.payload
            }
        
        case ActionTypes.USER_LOGIN_FAILURE:
            return {
                loading:false,
                error:action.payload,
            }
        
        case ActionTypes.USER_SIGNUP_FAILURE:
            return {
                loading:false,
                error:action.payload
            }

        case ActionTypes.USER_LOGOUT:
            return {
                loading: false,
                user:[],
            }

        case ActionTypes.USER_LOGOUT_FAILURE:
            return {
                loading:false,
                error:action.payload,
            }

        default:
            return state;
    }
}
export default UserReducer;
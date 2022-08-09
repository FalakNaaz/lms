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

        case ActionTypes.USER_LOGIN:
            return {
                ...state
            }

        case ActionTypes.USER_SUCCESS:
            return {
                loading:false,
                ...state
            }
        default:
            return state;
    }
}
export default UserReducer;
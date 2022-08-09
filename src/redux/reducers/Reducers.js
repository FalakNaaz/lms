import { ActionTypes } from "../constants/action-types";

const initialState = {
    loading: false,
    user: [],
    error: '',
}
const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.USER_SIGNUP:
            return {
                users: action.payload,
                loading: true,
            }

        case ActionTypes.USER_LOGIN:
            return {

            }

        case ActionTypes.USER_SUCCESS:
            return {
                loading:false,
            }
    }
}
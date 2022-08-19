import { ActionTypes } from "../constants/action-types";

const initialState5 = {
    currentRole: "Learner"
}

const RoleReducer =  (state = initialState5, action) =>{
    // console.warn("in reducer ", action.payloading)
    switch (action) {
        case ActionTypes.GET_ROLE:
            return{
                currentRole : action.payloading,
                ...state
            }
    
        default:
            return state;
    }
}

export default RoleReducer;
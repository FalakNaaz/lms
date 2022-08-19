import { ActionTypes } from "../constants/action-types";
const initialState4 = false;

const SidebarReducer = (state = initialState4, action) =>{
    switch (action.type) {
        case ActionTypes.SIDEBAR:
         return !state
    
        default:
            return state;
    }
}

export default SidebarReducer;
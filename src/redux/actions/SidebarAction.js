import { ActionTypes } from "../constants/action-types";

const SidebarAction = (flag) =>{
    return {
        type: ActionTypes.SIDEBAR,
        payload: flag,
    }
}

export default SidebarAction;
import { ActionTypes } from "../constants/action-types";
import axios from "axios";
const RoleAction = (userRole) =>{
    return{
        type: ActionTypes.GET_ROLE,
        payloading: userRole
    }
}
export const getRole = () => dispatch => {
    const currEmail = localStorage.getItem("currUserEmail");
    const checkEmail = (e) => {
      return currEmail === e.email;
    };
    axios.get("http://localhost:1337/api/users?populate=*").then((res)=>{
        const user = res.data.filter(checkEmail);
        dispatch(RoleAction(user[0].role.name));
        localStorage.setItem("currUserRole", user[0].role.name);
    }).catch((error)=>{
        console.log("There was some error while fetching role!", error)
    })
};
 
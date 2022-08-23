import { ActionTypes } from "../constants/action-types";
import axios from "axios";
const ProfileAction = (profileData) =>{
    return{
        type: ActionTypes.PROFILE_DATA,
        payload: profileData
    }
}
export const getProfileData = (id) => dispatch => {
    axios.get(`http://localhost:1337/api/users/${id}?populate=*`)
    .then((res)=>{
        dispatch(ProfileAction(res.data))

    })
    .catch(()=>{
        console.log("Error in fetching the profile data.")
    })
};
 
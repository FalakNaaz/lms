import { ActionTypes } from "../constants/action-types";
import axios from "axios";

const SpecificCourseAction = (course) => {
    return {
        type: ActionTypes.SPECIFIC_COURSE,
        payload: course
    }
}

export const fetchCourse = (id) => dispatch => {

    axios.get(`http://localhost:1337/api/trainings/${id}?populate=*`)
    .then((res)=>{
        dispatch(SpecificCourseAction(res.data.data.attributes))
    })
    .catch(()=>{
        console.log("Error in fetching the specific course.")
    })
}
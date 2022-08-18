import { ActionTypes } from "../constants/action-types";
import axios from "axios";

const CourseAction = (courses) => {
    return {
        type: ActionTypes.ALL_COURSES,
        payload: courses
    }
}

export const fetchAllCourses = () => dispatch => {

    axios.get("http://localhost:1337/api/trainings?populate=*")
    .then((res)=>{
        dispatch(CourseAction(res.data.data))
    })
    .catch(()=>{
        console.log("Error in fetching the courses.")
    })
    


}
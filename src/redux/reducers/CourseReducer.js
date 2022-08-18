import { ActionTypes } from "../constants/action-types";

const initialState4 = {
    courses: []
  }
  
  export const CoursesReducer = (state = initialState4, action) => {
    switch (action.type) {
      case ActionTypes.ALL_COURSES:
        return {
          courses: [...action.payload]
        }
      default:
        return state;
    }
  
  }
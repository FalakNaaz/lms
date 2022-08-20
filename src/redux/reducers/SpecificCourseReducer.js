import { ActionTypes } from "../constants/action-types";

const initialState6 = {
  course: {}
}

export const SpecificCoursesReducer = (state = initialState6, action) => {
  switch (action.type) {
    case ActionTypes.SPECIFIC_COURSE:
      return {
        course: { ...action.payload },
      };
    default:
      return {
        course: { ...action.payload },
      };
  }
};

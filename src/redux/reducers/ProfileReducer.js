import { ActionTypes } from "../constants/action-types";

const initialState6 = {
  userProfileData: {}
}

const ProfileReducer = (state = initialState6, action) => {
  switch (action.type) {
    case ActionTypes.PROFILE_DATA:
      return {
        userProfileData: { ...action.payload },
      };
    default:
      return {
        userProfileData: { ...action.payload },
      };
  }
};
export default ProfileReducer;
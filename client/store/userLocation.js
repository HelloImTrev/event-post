import axios from "axios";
import history from "../history";

//Action Types\\
const LOAD_USER_LOCATION = "LOAD_USER_LOCATION";
const REMOVE_USER_LOCATION = "REMOVE_USER_LOCATION";

//Action Creators\\
const _loadUserLocation = (locationObj) => ({ type: LOAD_USER_LOCATION, locationObj });
const _removeUserLocation = () => ({ type: REMOVE_USER_LOCATION });

//Thunks\\
export const loadUserLocation = (locationObj) => async (dispatch) => {
  try {
    dispatch(_loadUserLocation(locationObj));
  } catch (err) {
    console.log(err);
  }
};

export const removeUserLocation = () => async (dispatch) => {
  try {
    dispatch(_removeUserLocation());
  } catch (err) {
    console.log(err);
  }
};

//Reducer\\
export default function (state = {}, action) {
  switch (action.type) {
    case LOAD_USER_LOCATION:
      return { ...action.locationObj };
    case REMOVE_USER_LOCATION:
      return {};
    default:
      return state;
  }
}

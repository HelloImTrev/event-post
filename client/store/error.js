import axios from "axios";
import history from "../history";

//Action Types\\
const GET_ERROR = "GET_ERROR";
const REMOVE_ERROR = "REMOVE_ERROR";

//Action Creators\\
const _getError = (errorMessage) => ({ type: GET_ERROR, errorMessage });
const _removeError = () => ({ type: REMOVE_ERROR });

//Thunks\\
export const getError = (errorMessage) => async (dispatch) => {
  try {
    dispatch(_getError(errorMessage));
  } catch (err) {
    console.log(err);
  }
};

export const removeError = () => async (dispatch) => {
  try {
    dispatch(_removeError());
  } catch (err) {
    console.log(err);
  }
};

//Reducer\\
export default function (state = {}, action) {
  switch (action.type) {
    case GET_ERROR:
      return { error: action.errorMessage };
    case REMOVE_ERROR:
      return {};
    default:
      return state;
  }
}

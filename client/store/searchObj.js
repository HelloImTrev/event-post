import axios from "axios";
import history from "../history";

//Action Types\\
const DISPATCH_SEARCH_OBJ = "DISPATCH_SEARCH_OBJ";
const REMOVE_SEARCH_OBJ = "REMOVE_SEARCH_OBJ";

//Action Creators\\
const _dispatchSearchObj = (searchObj) => ({ type: DISPATCH_SEARCH_OBJ, searchObj }); // {type: , searchObj: {name: , location}}
const _removeSearchObj = () => ({ type: REMOVE_SEARCH_OBJ });

//Thunks\\
export const dispatchSearchObj = (searchObj) => async (dispatch) => {
  try {
    dispatch(_dispatchSearchObj(searchObj));
  } catch (err) {
    console.log(err);
  }
};

export const removeSearchObj = () => async (dispatch) => {
  try {
    dispatch(_removeSearchObj());
  } catch (err) {
    console.log(err);
  }
};

//Reducer\\
export default function (state = {}, action) {
  switch (action.type) {
    case DISPATCH_SEARCH_OBJ:
      return { ...action.searchObj };
    case REMOVE_SEARCH_OBJ:
      return {};
    default:
      return state;
  }
}

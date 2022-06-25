import axios from "axios";
import history from "../history";

//Action Types\\
const GET_DATA = "GET_DATA";

//Action Creators\\
const _getData = (data) => ({ type: GET_DATA, data });

//Thunks\\
export const getData = (placeId) => async (dispatch) => {
  try {
    const data = (await axios.get(`/api/google/data/${placeId}`)).data;
    console.log("in data");
    console.log(data);
    dispatch(_getData(data.result));
  } catch (err) {
    console.log(err);
  }
};

//Reducer\\
export default function (state = {}, action) {
  switch (action.type) {
    case GET_DATA:
      return action.data;
    // case REMOVE_ERROR:
    //   return {};
    default:
      return state;
  }
}

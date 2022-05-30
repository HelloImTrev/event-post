import axios from "axios";

//Action Types\\
const GET_EVENTS = "GET_EVENTS";

//Action Creators\\
const _getEvents = (events) => {
  return {
    type: GET_EVENTS,
    events,
  };
};

//Thunks\\
export const getEvents = () => {
  return async (dispatch) => {
    const events = await (await axios.get("/api/events")).data;
    dispatch(_getEvents(events));
  };
};

//Reducer\\
export default function (state = [], action) {
  switch(action.type) {
    case GET_EVENTS:
      return action.events;
    default:
      return state;
  }
}

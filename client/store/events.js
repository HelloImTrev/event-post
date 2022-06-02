import axios from "axios";

//Action Types\\
const GET_EVENTS = "GET_EVENTS";
const GET_MY_EVENTS = "GET_MY_EVENTS";

//Action Creators\\
const _getEvents = (events) => {
  return {
    type: GET_EVENTS,
    events,
  };
};

const _getMyEvents = (myEvents) => {
  return {
    type: GET_MY_EVENTS,
    myEvents,
  };
};

//Thunks\\
export const getEvents = () => {
  return async (dispatch) => {
    const events = await (await axios.get("/api/events")).data;
    dispatch(_getEvents(events));
  };
};

export const getMyEvents = () => {
  return async (dispatch) => {
    const myEvents = (
      await axios.get("/api/events/user/me", {
        headers: {
          authorization: window.localStorage.getItem("token"),
        },
      })
    ).data;
    dispatch(_getMyEvents(myEvents));
  };
};

//Reducer\\
export default function (state = [], action) {
  switch (action.type) {
    case GET_EVENTS:
      return action.events;
    case GET_MY_EVENTS:
      return action.myEvents;
    default:
      return state;
  }
}
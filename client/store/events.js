import axios from "axios";
import history from "../history";
import { getError } from "./error";

//Action Types\\
const GET_EVENTS = "GET_EVENTS";
const GET_MY_EVENTS = "GET_MY_EVENTS";
const CREATE_EVENT = "CREATE_EVENT";
const UPDATE_EVENT = "UPDATE_EVENT";
const DELETE_EVENT = "DELETE_EVENT";

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

const _createEvent = (event) => {
  return {
    type: CREATE_EVENT,
    event,
  };
};

const _updateEvent = (event) => {
  return {
    type: UPDATE_EVENT,
    event,
  };
};

const _deleteEvent = (event) => {
  return {
    type: DELETE_EVENT,
    event,
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

export const createEvent = (event) => {
  return async (dispatch) => {
    const newEvent = (
      await axios.post(
        "/api/events/user/me",
        { event },
        {
          headers: {
            authorization: window.localStorage.getItem("token"),
          },
        }
      )
    ).data;
    dispatch(_createEvent(newEvent));
  };
};

// takes in eventId, id or event
export const updateEvent = (eventId, newBody) => {
  return async (dispatch) => {
    const response = await axios.put(
      `/api/events/user/me${eventId}`,
      { newBody }, // update with the new properties
      {
        headers: {
          authorization: window.localStorage.getItem("token"),
        },
      }
    );
    dispatch(_updateEvent(response.data));
  };
};

// takes in event or eventId
export const deleteEvent = (event) => {
  return async (dispatch) => {
    await axios.delete(`/api/events/user/me/${event.id}`, {
      headers: {
        authorization: window.localStorage.getItem("token"),
      },
    });
    dispatch(_deleteEvent(event));
  };
};

export const searchKeyword =
  ({ name, location, date }) =>
  async (dispatch) => {
    try {
      const events = (
        await axios.get(`/api/events/search?keyword=${name}&location=${location}&date=${date}`)
      ).data;
      if (events.length === 0) {
        dispatch(getError("Result not found."));
      } else {
        dispatch(_getEvents(events));
      }
      history.push("/explore");
    } catch (err) {
      console.log(err);
    }
  };

//Reducer\\
export default function (state = [], action) {
  switch (action.type) {
    case GET_EVENTS:
      return action.events;
    case GET_MY_EVENTS:
      return action.myEvents;
    case CREATE_EVENT:
      return [...state, action.event];
    case UPDATE_EVENT:
      return state.map((event) => (event.id !== action.event.id ? event : action.event));
    case DELETE_EVENT:
      return state.filter((event) => event.id !== action.event.id);
    default:
      return state;
  }
}

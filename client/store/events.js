import axios from "axios";
import history from "../history";
import { getError } from "./error";

//Action Types\\
const GET_EVENTS = "GET_EVENTS";
const GET_MY_EVENTS = "GET_MY_EVENTS";
//const CHECK_SUBSCRIPTION = "CHECK_SUBSCRIPTION";

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

// const _checkEventSubscription = (eventIds) => {
//   return {
//     type: CHECK_SUBSCRIPTION,
//     eventIds,
//   };
// };

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


// export const checkEventSubscription = (eventIds) => {
//   return async (dispatch) => {
//     const ids = (
//       await axios.post("/user/me/subscribed", eventIds, {
//         headers: {
//           authorization: window.localStorage.getItem("token"),
//         },
//       })
//     ).data;
//     console.log(ids);
//     dispatch(_checkEventSubscription(ids));
//   };
// };

export const searchKeyword =
  ({ name, location, date }) =>
  async (dispatch) => {
    try {
      const events = (
        await axios.get(
          `/api/events/search?keyword=${name}&location=${location}&date=${date}`
        )
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
    //case CHECK_SUBSCRIPTION:
      // return action.eventIds;
    default:
      return state;
  }
}

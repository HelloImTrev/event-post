import axios from "axios";

//Action Types\\
const SUBSCRIBE_TO_EVENT = "SUBSCRIBE_TO_EVENT";
const CHECK_SUBSCRIPTION = "CHECK_SUBSCRIPTION";

//Action Creators\\

const _subscribeToEvent = (newSubscription) => {
  return {
    type: SUBSCRIBE_TO_EVENT,
    newSubscription,
  };
};

const _checkEventSubscription = (eventIds) => {
  return {
    type: CHECK_SUBSCRIPTION,
    eventIds,
  };
};

// Thunks
export const subscribeToEvent = (eventId) => {
  return async (dispatch) => {
    const newSubscription = (
      await axios.post(
        `/api/events/subscribe/${eventId}`,
        {},
        {
          headers: {
            authorization: window.localStorage.getItem("token"),
          },
        }
      )
    ).data;
    //console.log(newSubscription, "in store");
    dispatch(_subscribeToEvent(newSubscription));
  };
};

export const checkEventSubscription = (eventIds) => {
  return async (dispatch) => {
    const ids = (
      await axios.post("/user/me/subscribed", eventIds, {
        headers: {
          authorization: window.localStorage.getItem("token"),
        },
      })
    ).data;
    console.log(ids);
    dispatch(_checkEventSubscription(ids));
  };
};

//Reducer\\
export default function (state = [], action) {
  switch (action.type) {
    case SUBSCRIBE_TO_EVENT:
      return [...state, action.newSubscription];
    case CHECK_SUBSCRIPTION:
    // return action.eventIds;
    default:
      return state;
  }
}

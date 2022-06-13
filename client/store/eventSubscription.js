import axios from "axios";

//Action Types\\
const LOAD_SUBSCRIBED_EVENTS = "LOAD_SUBSCRIBED_EVENTS";
const SUBSCRIBE_TO_EVENT = "SUBSCRIBE_TO_EVENT";
const CHECK_SUBSCRIPTION = "CHECK_SUBSCRIPTION";

//Action Creators\\

const _loadSubscribed = (subscriptions) => {
  return {
    type: LOAD_SUBSCRIBED_EVENTS,
    subscriptions,
  };
};

const _subscribeToEvent = (newSubscription) => {
  return {
    type: SUBSCRIBE_TO_EVENT,
    newSubscription,
  };
};

// const _checkEventSubscription = (eventIds) => {
//   return {
//     type: CHECK_SUBSCRIPTION,
//     eventIds,
//   };
// };

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
    dispatch(_subscribeToEvent(newSubscription));
    //await dispatch(loadSubscribedEvents())
  };
};

export const loadSubscribedEvents = () => {
  return async (dispatch) => {
    const subscribedEvents = (
      await axios.get("/api/events/subscribe/me", {
        headers: {
          authorization: window.localStorage.getItem("token"),
        },
      })
    ).data;
    dispatch(_loadSubscribed(subscribedEvents));
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

//Reducer\\
export default function (state = [], action) {
  switch (action.type) {
    case LOAD_SUBSCRIBED_EVENTS:
      return action.subscriptions;
    case SUBSCRIBE_TO_EVENT:
      return [...state, action.newSubscription];
    //case CHECK_SUBSCRIPTION:
    // return action.eventIds;
    default:
      return state;
  }
}

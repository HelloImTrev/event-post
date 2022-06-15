import axios from "axios";

//Action Types\\
const LOAD_SUBSCRIBED_EVENTS = "LOAD_SUBSCRIBED_EVENTS";
const SUBSCRIBE_TO_EVENT = "SUBSCRIBE_TO_EVENT";
const UNSUBSCRIBE_FROM_EVENT = "UNSUBSCRIBE_FROM_EVENT";
const CLEAR_EVENT_SUBSCRIPTIONS = "CLEAR_EVENT_SUBSCRIPTIONS";

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

const _unsubscribeFromEvent = (eventToUnsubscribe) => {
  return {
    type: UNSUBSCRIBE_FROM_EVENT,
    eventToUnsubscribe,
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
    dispatch(_subscribeToEvent(newSubscription));
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

export const unsubscribeFromEvent = (eventId) => {
  return async (dispatch) => {
    await axios.delete(`/api/events/unsubscribe/${eventId}`, {
      headers: {
        authorization: window.localStorage.getItem("token"),
      },
    });
    dispatch(_unsubscribeFromEvent(eventId));
  };
};

export const clearEventSubscriptions = () => {
  return {
    type: CLEAR_EVENT_SUBSCRIPTIONS,
    subscriptions: [],
  };
};

//Reducer\\
export default function (state = [], action) {
  switch (action.type) {
    case LOAD_SUBSCRIBED_EVENTS:
      return action.subscriptions;
    case SUBSCRIBE_TO_EVENT:
      return [...state, action.newSubscription];
    case UNSUBSCRIBE_FROM_EVENT:
      return state.filter(
        (subscription) => subscription.eventId !== action.eventToUnsubscribe
      );
    case CLEAR_EVENT_SUBSCRIPTIONS:
      return action.subscriptions;
    default:
      return state;
  }
}

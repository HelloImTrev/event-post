import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "./auth";
import events from "./events";
import eventSubscription from "./eventSubscription";
import error from "./error";
import searchObj from "./searchObj";
import userLocation from "./userLocation";

const reducer = combineReducers({ auth, events, eventSubscription, error, searchObj, userLocation });

const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger({ collapsed: true })));
const store = createStore(reducer, middleware);

export default store;
export * from "./auth";
export * from "./events";
export * from "./eventSubscription";

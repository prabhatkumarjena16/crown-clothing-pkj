import { applyMiddleware, compose, createStore } from "redux";

import logger from "redux-logger";
import { rootReducer } from "./root-reducer";


const loggerMiddleware = (store) => (next) => (action) => {
     if(!action.type) {
        return next(action)
     }
     
     console.log("tyoe: ", action.type)
     console.log("payload: ", action.payload)
     console.log("currentState: ", store.getState())

     next(action)

     console.log("nextState: ", store.getState())
}

const middlewares = [loggerMiddleware];

const composeEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, undefined, composeEnhancers);

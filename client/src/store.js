// Code courtesy of Will R. Stern
// https://github.com/learncodeacademy/react-js-tutorials

import { applyMiddleware, createStore } from "redux";

import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import reducer from "./reducers";

const middleware = applyMiddleware(promise(), thunk, logger);

export default createStore(reducer, middleware);
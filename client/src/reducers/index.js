import { combineReducers } from "redux";

import auth from "./auth";
import quiz from "./quiz";
import response from "./response";

export const reducers = combineReducers({ auth, quiz, response });

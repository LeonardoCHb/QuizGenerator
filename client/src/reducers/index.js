import { combineReducers } from "redux";

import auth from "./auth";
import quiz from "./quiz";

export const reducers = combineReducers({ auth, quiz });

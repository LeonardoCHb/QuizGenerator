import { combineReducers } from "redux";

import auth from "./auth";
import {
  quizzes,
  responses,
  quizzesUser,
  quizzesResponse,
  quizToView,
} from "./quiz";

export const reducers = combineReducers({
  auth,
  quiz: quizzes,
  response: responses,
  quizzesUser,
  quizzesResponse,
  quizToView,
});

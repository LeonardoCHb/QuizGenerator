import { combineReducers } from "redux";

import auth from "./auth";
import {
  quizzes,
  responses,
  quizzesUser,
  quizzesResponse,
  quizToView,
  quizResponse,
  quizToResponse,
  quizSearch,
} from "./quiz";

export const reducers = combineReducers({
  auth,
  quiz: quizzes,
  response: responses,
  quizzesUser,
  quizzesResponse,
  quizToView,
  quizResponse,
  quizToResponse,
  quizSearch,
});

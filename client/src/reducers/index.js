import { combineReducers } from "redux";

import { findAdm, getUsers, getUsersResponses } from "./adm";
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
  quizAllQuestions,
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
  findAdm,
  getUsers,
  getUsersResponses,
  quizAllQuestions,
});

import * as api from "../api/index.js";
import {
  CREATE,
  FETCH_ALL,
  FETCH_ONE_QUIZ_TO_RESPONSE,
  RESPONSE,
  FETCH_ALL_USER_RESPONSES,
  FETCH_ALL_USER_QUIZZES,
  FETCH_ALL_QUIZZES_RESPONSE,
  FETCH_ONE_QUIZ_TO_VIEW,
  DELETE_QUIZ,
} from "../constants/actionTypes";

// CREATE QUIZ
export const createQuiz = (quiz) => async (dispatch) => {
  try {
    const { data } = await api.createQuiz(quiz);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
// HOME QUIZZES
export const findAllQuizzes = () => async (dispatch) => {
  try {
    const { data } = await api.fetchQuizzes();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};
// USER RESPONSES
export const findAllUserResponses = () => async (dispatch) => {
  try {
    const { data } = await api.fetchUserResponses();
    dispatch({ type: FETCH_ALL_USER_RESPONSES, payload: data });
  } catch (error) {
    console.log(error);
  }
};
// USER QUIZZES
export const findAllUserQuizzes = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCreatorQuizzes();
    dispatch({ type: FETCH_ALL_USER_QUIZZES, payload: data });
  } catch (error) {
    console.log(error);
  }
};
// QUIZ RESPONSE PAGE
export const findOne = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchQuiz(id);
    dispatch({ type: FETCH_ONE_QUIZ_TO_RESPONSE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
// SEND QUIZ RESPONSE TO BACKEND
export const responseToQuiz = (response) => async (dispatch) => {
  try {
    const { data } = await api.responseQuiz(response);

    dispatch({ type: RESPONSE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// GET ALL QUIZ RESPONSES
export const quizResponses = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchQuizResponses(id);
    dispatch({ type: FETCH_ALL_QUIZZES_RESPONSE, payload: { data, id } });
  } catch (error) {
    console.log(error);
  }
};

// QUIZ VIEW PAGE
export const findOneToView = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchQuiz(id);
    dispatch({ type: FETCH_ONE_QUIZ_TO_VIEW, payload: { data, id } });
  } catch (error) {
    console.log(error);
  }
};

export const deleteQuiz = (id) => async (dispatch) => {
  try {
    await api.deleteQuiz(id);

    dispatch({ type: DELETE_QUIZ, payload: id });
  } catch (error) {
    console.log(error);
  }
};

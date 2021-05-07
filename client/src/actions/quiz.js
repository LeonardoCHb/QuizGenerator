import * as api from "../api/index.js";
import {
  CREATE,
  FETCH_ALL,
  FETCH_ONE,
  RESPONSE,
} from "../constants/actionTypes";

export const createQuiz = (quiz) => async (dispatch) => {
  try {
    const { data } = await api.createQuiz(quiz);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const findAllQuizzes = () => async (dispatch) => {
  try {
    const { data } = await api.fetchQuizzes();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const findOne = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchQuiz(id);
    dispatch({ type: FETCH_ONE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const responseToQuiz = (response) => async (dispatch) => {
  try {
    const { data } = await api.responseQuiz(response);

    dispatch({ type: RESPONSE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

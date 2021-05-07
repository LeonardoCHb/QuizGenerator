import * as api from "../api/index.js";
import { CREATE, FETCH_ALL } from "../constants/actionTypes";

export const createQuiz = (quiz) => async (dispatch) => {
  try {
    const { data } = await api.createQuiz(quiz);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const findAllQuiz = (quiz) => async (dispatch) => {
  try {
    const { data } = await api.findAllQuiz();

    console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

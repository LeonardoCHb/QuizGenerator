import * as api from "../api/index.js";
import { GET_QUIZ } from "../constants/actionTypes";

export const findOne = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchQuiz(id);
    dispatch({ type: GET_QUIZ, payload: data });
  } catch (error) {
    console.log(error);
  }
};

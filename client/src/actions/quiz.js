import * as api from "../api/index.js";
import { CREATE } from "../constants/actionTypes";

export const createQuiz = (quiz) => async (dispatch) => {
  try {
    const { data } = await api.createQuiz(quiz);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

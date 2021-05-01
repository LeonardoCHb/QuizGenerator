import { FETCH_ALL, CREATE } from "../constants/actionTypes";

export default (quizzes = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...quizzes, action.payload];
    default:
      return quizzes;
  }
};

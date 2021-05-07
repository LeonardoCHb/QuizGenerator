import { FETCH_ALL, FETCH_ONE, CREATE } from "../constants/actionTypes";

export default (quizzes = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case FETCH_ONE:
      return action.payload;
    case CREATE:
      return [...quizzes, action.payload];
    default:
      return quizzes;
  }
};

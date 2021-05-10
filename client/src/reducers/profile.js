import { GET_QUIZ } from "../constants/actionTypes";

export default (result = [], action) => {
  switch (action.type) {
    case GET_QUIZ:
      return action.payload;
    default:
      return result;
  }
};

import {
  RESPONSE,
  FETCH_ALL_RESPONSES,
  FETCH_ALL_QUIZ_RESPONSES,
} from "../constants/actionTypes";

export default (responses = [], action) => {
  switch (action.type) {
    case FETCH_ALL_QUIZ_RESPONSES:
      return action.payload;
    case FETCH_ALL_RESPONSES:
      return action.payload;
    case RESPONSE:
      return [...responses, action.payload];
    default:
      return responses;
  }
};

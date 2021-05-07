import { RESPONSE } from "../constants/actionTypes";

export default (responses = [], action) => {
  switch (action.type) {
    case RESPONSE:
      return [...responses, action.payload];
    default:
      return responses;
  }
};

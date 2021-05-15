import {
  FIND_ADM,
  GET_ALL_USERS_RESPONSES,
  GET_USERS,
} from "../constants/actionTypes.js";

const findAdm = (adm = {}, action) => {
  switch (action.type) {
    case FIND_ADM: {
      const id = action.payload.id;
      return { id };
    }
    default:
      return adm;
  }
};

const getUsers = (users = [], action) => {
  switch (action.type) {
    case GET_USERS: {
      console.log(action.payload);
      return action.payload;
    }
    default:
      return users;
  }
};

const getUsersResponses = (responses = [], action) => {
  switch (action.type) {
    case GET_ALL_USERS_RESPONSES: {
      console.log(action.payload);
      return action.payload;
    }
    default:
      return responses;
  }
};

export { findAdm, getUsers, getUsersResponses };

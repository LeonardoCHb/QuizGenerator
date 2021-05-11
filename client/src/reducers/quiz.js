import {
  FETCH_ALL,
  FETCH_ONE_QUIZ_TO_RESPONSE,
  CREATE,
  RESPONSE,
  FETCH_ALL_USER_RESPONSES,
  FETCH_ALL_USER_QUIZZES,
  FETCH_ALL_QUIZZES_RESPONSE,
  FETCH_ONE_QUIZ_TO_VIEW,
  DELETE_QUIZ,
} from "../constants/actionTypes";

const quizzes = (quizzes = [], action) => {
  switch (action.type) {
    case DELETE_QUIZ: {
      const newQuizzes = quizzes.filter((quiz) => {
        return quiz._id !== action.payload;
      });
      return newQuizzes;
    }
    case FETCH_ALL:
      return action.payload;
    case FETCH_ONE_QUIZ_TO_RESPONSE:
      return action.payload;
    case CREATE:
      return [...quizzes, action.payload];
    default:
      return quizzes;
  }
};

const responses = (responses = [], action) => {
  switch (action.type) {
    case FETCH_ALL_USER_RESPONSES:
      return action.payload;
    case RESPONSE:
      return [...responses, action.payload];
    default:
      return responses;
  }
};

const quizzesUser = (quizzesUser = [], action) => {
  switch (action.type) {
    case DELETE_QUIZ: {
      const newQuizzes = quizzesUser.filter((quiz) => {
        return quiz._id !== action.payload;
      });
      return newQuizzes;
    }
    case FETCH_ALL_USER_QUIZZES:
      return action.payload;
    default:
      return quizzesUser;
  }
};

const quizzesResponse = (quizzesResponse = {}, action) => {
  switch (action.type) {
    case FETCH_ALL_QUIZZES_RESPONSE: {
      const newObject = {};
      const name = action.payload.id;
      newObject[`${name}`] = [action.payload.data];
      return { ...quizzesResponse, ...newObject };
    }
    default:
      return quizzesResponse;
  }
};

const quizToView = (quizToView = {}, action) => {
  switch (action.type) {
    case FETCH_ONE_QUIZ_TO_VIEW: {
      const newObject = {};
      const name = action.payload.id;
      newObject[`${name}`] = action.payload.data[0];
      return { ...quizToView, ...newObject };
    }
    default:
      return quizToView;
  }
};

export { quizzes, responses, quizzesUser, quizzesResponse, quizToView };

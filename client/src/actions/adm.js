import * as api from "../api/index.js";
import {
  FIND_ADM,
  GET_USERS,
  GET_ALL_USERS_RESPONSES,
} from "../constants/actionTypes.js";

export const findAdm = () => async (dispatch) => {
  try {
    const { data } = await api.findAdm();
    dispatch({ type: FIND_ADM, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await api.getUsers();
    dispatch({ type: GET_USERS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getUsersResponses = () => async (dispatch) => {
  try {
    const { data } = await api.getUsersResponses();
    dispatch({ type: GET_ALL_USERS_RESPONSES, payload: data });
  } catch (error) {
    console.log(error);
  }
};

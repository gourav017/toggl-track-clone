import axios from "axios";
import { DELETE_TIMER, EDIT_TIMER, GET_TIMER, POST_TIMER } from "./timer.type";

export const GetTIMERApi = (payload) => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://damp-mesa-49161.herokuapp.com/timer"
    );
    dispatch({
      type: GET_TIMER,
      payload: response.data,
    });
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const PostTIMER = (payload) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://damp-mesa-49161.herokuapp.com/timer",
      payload
    );
    dispatch({
      type: POST_TIMER,
    });
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const DeleteTIMERApi = (id) => async (dispatch) => {
  try {
    const respone = await axios.delete(
      `https://damp-mesa-49161.herokuapp.com/timer/${id}`
    );
    dispatch({
      type: DELETE_TIMER,
      //   payload: respone.data,
    });
    return respone.data;
  } catch (e) {
    console.log(e);
  }
};

export const EditTIMERApi = (id, params) => async (dispatch) => {
  try {
    const response = await axios.patch(
      `https://damp-mesa-49161.herokuapp.com/timer/${id}`,
      params
    );
    dispatch({
      type: EDIT_TIMER,
      //   payload: response.data,
    });
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

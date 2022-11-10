import axios from "axios";
import { LOGIN, LOGOUT, SIGN_UP } from "./auth.types";

export const loginAPI = (payload) => async (dispatch) => {
  try {
    let { data } = await axios.post(
      "https://damp-mesa-49161.herokuapp.com/auth/login",
      payload
    );
    dispatch({ type: LOGIN, payload: data });
    if (data.token) {
      localStorage.setItem("token", data.token);
    } else {
      alert(data.msg);
    }
  } catch (error) {
    console.log(error);
  }
};

export const logoutAPI = () => ({ type: LOGOUT });

export const signUp = (payload) => async (dispatch) => {
  try {
    let { data } = await axios.post(
      "https://damp-mesa-49161.herokuapp.com/auth/signup",
      payload
    );
    dispatch({ type: SIGN_UP, payload: data });
  } catch (error) {
    console.log(error);
  }
};

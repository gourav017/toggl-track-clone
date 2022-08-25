import axios from "axios";
import { AUTH_LOGIN, AUTH_LOGOUT } from "./auth.types";

export const loginAPI =  (creds)=> async(dispatch) => {
  try {
    const response = await axios.post("Enter your url here", creds);
    dispatch({
      type:AUTH_LOGIN,
      payload:response.data
    })
    return response.data
  } catch (e) {
    console.log(e.message);
  }
};


export const logout = () => ({
  type: AUTH_LOGOUT,
});

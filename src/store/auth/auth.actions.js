// import axios from "axios";
import axios from "axios";
import { AUTH_LOGIN, AUTH_LOGOUT } from "./auth.types";

// export const loginAPI = (creds) => async (dispatch) => {
//   try {
//     // localStorage.setItem("token", JSON.stringify(creds));
//     // const response = localStorage.getItem("token");
//     const response = await axios.post("https://reqres.in/api/login", creds);
//     dispatch({
//       type: AUTH_LOGIN,
//       payload: response.data,
//     });
//     return response.data;
//   } catch (e) {
//     console.log(e.message);
//   }
// };

// export const logout = () => ({
//   type: AUTH_LOGOUT,
// });


import { LOGIN, LOGOUT, SIGN_UP } from "./auth.types";

export const loginAPI = (payload) => ({ type: LOGIN, payload });

export const logoutAPI = () => ({ type: LOGOUT });

export const signUp = (payload) => ({ type: SIGN_UP, payload });
import { LOGIN, LOGOUT, SIGN_UP } from "./auth.types";

export const loginAPI = (payload) => ({ type: LOGIN, payload });

export const logoutAPI = () => ({ type: LOGOUT });

export const signUp = (payload) => ({ type: SIGN_UP, payload });

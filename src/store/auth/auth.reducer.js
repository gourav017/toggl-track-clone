import { AUTH_LOGIN, AUTH_LOGOUT } from "./auth.types";

const token = localStorage.getItem("token") || "";
const initialState = {
  isAuth: false,
  token: !token,
};
export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_LOGIN: {
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        isAuth: true,
        token: payload.token,
      };
    }
    case AUTH_LOGOUT: {
      localStorage.removeItem("token");
      return {
        ...state,
        isAuth: false,
        token: "",
      };
    }
    default: {
      return state;
    }
  }
};

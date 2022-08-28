// import { AUTH_LOGIN, AUTH_LOGOUT } from "./auth.types";

// const token = localStorage.getItem("token") || "";
// const initialState = {
//   isAuth: false,
//   token: !token,
// };
// export const authReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case AUTH_LOGIN: {
//       localStorage.setItem("token", payload.token);
//       return {
//         ...state,
//         isAuth: true,
//         token: payload.token,
//       };
//     }
//     case AUTH_LOGOUT: {
//       localStorage.removeItem("token");
//       return {
//         ...state,
//         isAuth: false,
//         token: "",
//       };
//     }
//     default: {
//       return state;
//     }
//   }
// };



import { LOGIN, LOGOUT, SIGN_UP } from ".//auth.types";

const intitalState = {
  isAuth: false,
  Username:"",
  email:"",
  password:""
};
export const authReducer = (state = intitalState, { type, payload }) => {
  switch (type) {
    case LOGIN: {
      return {
        ...state,
        isAuth: true,
        email:payload.email,
        password:payload.password,
      };
    }
    case LOGOUT: {
      return { ...state, 
        isAuth: false,
        Username:"",
         email:"",
         password:""
        };
    }
    case SIGN_UP: {
      return {
        ...state,
        Username:payload.Username,
        email:payload.email,
        password:payload.password
      };
    }
    default: {
      return state;
    }
  }
};
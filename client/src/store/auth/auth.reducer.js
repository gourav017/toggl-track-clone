
import { LOGIN, LOGOUT, SIGN_UP } from ".//auth.types";

const intitalState = {
  isAuth: "",
  name:"",
  email:"",
  password:"",
  msg:""
};
export const authReducer = (state = intitalState, { type, payload }) => {
  switch (type) {
    case LOGIN: {
      return {
        ...state,
        isAuth: payload.token,
        msg:payload.msg
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
        msg:payload.msg,
        name:payload.name,
        email:payload.email,
        password:payload.password
      };
    }
    default: {
      return state;
    }
  }
};
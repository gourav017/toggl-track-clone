import { DELETE_TIMER, EDIT_TIMER, GET_TIMER, POST_TIMER } from "./timer.type";

const initalvalue = {
  data: [],
};

export const timerReducer = (state = initalvalue, { type, payload }) => {
  switch (type) {
    case GET_TIMER: {
      return {
        ...state,
        data: payload,
      };
    }
    case POST_TIMER: {
      return {
        ...state,
      };
    }
    case DELETE_TIMER: {
      return {
        ...state,
      };
    }
    case EDIT_TIMER: {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};

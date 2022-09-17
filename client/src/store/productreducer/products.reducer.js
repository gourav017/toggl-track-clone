import { GET_PRODUCTS } from "./products.type";

const initalvalue = {
  data: [],
};

export const productReducer = (state = initalvalue, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS: {
      return {
        ...state,
        data: payload,
      };
    }
    default: {
      return state;
    
    }
  }
};

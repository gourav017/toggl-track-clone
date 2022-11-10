import axios from "axios";
import {
  DELETE_PRODUCT,
  EDIT_PRODUCT,
  GET_PRODUCTS,
  POST_PRODUCT,
  SEARCH_BY_QUERY,
} from "./products.type";

export const GetproductApi = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://damp-mesa-49161.herokuapp.com/products"
    );
    dispatch({
      type: GET_PRODUCTS,
      payload: response.data,
    });
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const Postproduct = (payload) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://damp-mesa-49161.herokuapp.com/products",
      payload
    );
    dispatch({
      type: POST_PRODUCT,
      payload: response.data,
    });

    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const DeleteproductApi = (id) => async (dispatch) => {
  try {
    const respone = await axios.delete(
      `https://damp-mesa-49161.herokuapp.com/products/${id}`
    );
    dispatch({
      type: DELETE_PRODUCT,
      payload: respone.data,
    });
    return respone.data;
  } catch (e) {
    console.log(e);
  }
};

export const EditProductApi = (id, params) => async (dispatch) => {
  try {
    const response = await axios.patch(
      `https://damp-mesa-49161.herokuapp.com/products/${id}`,
      params
    );
    dispatch({
      type: EDIT_PRODUCT,
      // payload: response.data,
    });
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const SearchbyQueryApi = (query) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://damp-mesa-49161.herokuapp.com/products?q=${query}`
    );
    dispatch({
      type: SEARCH_BY_QUERY,
      payload: response.data,
    });

    return response.data;
  } catch (e) {
    console.log(e);
  }
};

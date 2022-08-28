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
    const response = await axios.get("https://arcane-earth-23412.herokuapp.com/product-page");
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
      "https://arcane-earth-23412.herokuapp.com/product-page",
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
      `https://arcane-earth-23412.herokuapp.com/product-page/${id}`
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
    const response = await axios.put(
      `https://arcane-earth-23412.herokuapp.com/product-page/${id}`,
      params
    );
    dispatch({
      type: EDIT_PRODUCT,
      payload: response.data,
    });
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const SearchbyQueryApi = (query) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://arcane-earth-23412.herokuapp.com/product-page?q=${query}`
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

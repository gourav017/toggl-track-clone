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
    const response = await axios.get("http://localhost:8080/product-page");
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
      "http://localhost:8080/product-page",
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
      `http://localhost:8080/product-page/${id}`
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
      `http://localhost:8080/product-page/${id}`,
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
      `http://localhost:8080/product-page?q=${query}`
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

import {
  GET_PRODUCTS_START,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCT_START,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
  FILTER_PRODUCTS_START,
} from './product.const';

export const getProductsStart = () => ({
  type: GET_PRODUCTS_START,
});

export const getProductsSuccess = (response) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: response,
});

export const getProductsFailure = (error) => ({
  type: GET_PRODUCTS_FAILURE,
  payload: error,
});

export const getProductStart = (id) => ({
  type: GET_PRODUCT_START,
  payload: id,
});

export const getProductSuccess = (response) => ({
  type: GET_PRODUCT_SUCCESS,
  payload: response,
});

export const getProductFailure = (error) => ({
  type: GET_PRODUCT_FAILURE,
  payload: error,
});

export const filterProductsStart = (type) => ({
  type: FILTER_PRODUCTS_START,
  payload: type,
});
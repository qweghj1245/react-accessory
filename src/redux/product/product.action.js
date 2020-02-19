import {
  GET_PRODUCTS_START,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
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
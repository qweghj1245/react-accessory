import {
  ADD_CART_START,
  ADD_CART_FAILURE,
  GET_CART_START,
  GET_CART_SUCCESS,
  GET_CART_FAILURE,
  COLLECT_CART_START,
  COLLECT_CART_SUCCESS,
  COLLECT_CART_FAILURE,
} from './cart.const';

export const addCartStart = (config) => ({
  type: ADD_CART_START,
  payload: config,
});

export const addCartFailure = (error) => ({
  type: ADD_CART_FAILURE,
  payload: error,
});

export const getCartStart = () => ({
  type: GET_CART_START,
});

export const getCartSuccess = (response) => ({
  type: GET_CART_SUCCESS,
  payload: response,
});

export const getCartFailure = (error) => ({
  type: GET_CART_FAILURE,
  payload: error,
});

export const collectCartStart = (config) => ({
  type: COLLECT_CART_START,
  payload: config,
});

export const collectCartSuccess = (response) => ({
  type: COLLECT_CART_SUCCESS,
  payload: response,
});

export const collectCartFailure = (error) => ({
  type: COLLECT_CART_FAILURE,
  payload: error,
});

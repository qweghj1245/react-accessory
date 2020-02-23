import {
  ADD_CART_START,
  ADD_CART_SUCCESS,
  ADD_CART_FAILURE,
} from './cart.const';

export const addCartStart = (config) => ({
  type: ADD_CART_START,
  payload: config,
});

export const addCartSuccess = (response) => ({
  type: ADD_CART_SUCCESS,
  payload: response,
});

export const addCartFailure = (error) => ({
  type: ADD_CART_FAILURE,
  payload: error,
});
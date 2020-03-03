import {
  ADD_CART_START,
  ADD_CART_FAILURE,
  GET_CART_START,
  GET_CART_SUCCESS,
  GET_CART_FAILURE,
  COLLECT_CART_START,
  COLLECT_CART_SUCCESS,
  COLLECT_CART_FAILURE,
  DELETE_CART_START,
  DELETE_CART_SUCCESS,
  DELETE_CART_FAILURE,
  REDUCE_CART,
  UPDATE_CART,
  SET_ORDER_INFO,
  COUPON_START,
  COUPON_SUCCESS,
  COUPON_FAILURE,
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

export const deleteCartStart = (id) => ({
  type: DELETE_CART_START,
  payload: id,
});

export const deleteCartSuccess = (response) => ({
  type: DELETE_CART_SUCCESS,
  payload: response,
});

export const deleteCartFailure = (error) => ({
  type: DELETE_CART_FAILURE,
  payload: error,
});

export const reduceCart = (cart) => ({
  type: REDUCE_CART,
  payload: cart,
});

export const updateCart = (updateCart) => ({
  type: UPDATE_CART,
  payload: updateCart,
});

export const setOrderInfo = (state) => ({
  type: SET_ORDER_INFO,
  payload: state,
});

export const couponStart = (config) => ({
  type: COUPON_START,
  payload: config,
});

export const couponSuccess = (response) => ({
  type: COUPON_SUCCESS,
  payload: response,
});

export const couponFailure = (error) => ({
  type: COUPON_FAILURE,
  payload: error,
});
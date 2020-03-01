import {
  CREATE_ORDER_START,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILURE,
  GET_ORDER_START,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILURE,
} from './order.const';

export const createOrderStart = (config) => ({
  type: CREATE_ORDER_START,
  payload: config,
});

export const createOrderSuccess = (response) => ({
  type: CREATE_ORDER_SUCCESS,
  payload: response,
});

export const createOrderFailure = (error) => ({
  type: CREATE_ORDER_FAILURE,
  payload: error,
});

export const getOrderStart = (orderId) => ({
  type: GET_ORDER_START,
  payload: orderId,
});

export const getOrderSuccess = (response) => ({
  type: GET_ORDER_SUCCESS,
  payload: response,
});

export const getOrderFailure = (error) => ({
  type: GET_ORDER_FAILURE,
  payload: error,
});
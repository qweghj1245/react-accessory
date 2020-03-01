import { takeLatest, put, all, call } from 'redux-saga/effects';
import { createOrder, getOrder } from '../../lib/api';
import {
  CREATE_ORDER_START,
  GET_ORDER_START,
} from './order.const';
import {
  createOrderSuccess,
  createOrderFailure,
  getOrderSuccess,
  getOrderFailure,
} from './order.action';

function* createOneOrder(payload) {
  try {
    const order = yield call(() => createOrder(payload.payload));
    yield put(createOrderSuccess(order.data));
  } catch (error) {
    yield put(createOrderFailure(error));
  }
}

function* getOneOrder(payload) {
  try {
    const order = yield call(() => getOrder({ orderId: payload.payload }));
    console.log(order);
    yield put(getOrderSuccess(order.data));
  } catch (error) {
    yield put(getOrderFailure(error));
  }
}

function* createOrderStart() {
  yield takeLatest(CREATE_ORDER_START, createOneOrder);
}

function* getOrderStart() {
  yield takeLatest(GET_ORDER_START, getOneOrder);
}

export function* orderSagas() {
  yield all([
    call(createOrderStart),
    call(getOrderStart),
  ]);
};
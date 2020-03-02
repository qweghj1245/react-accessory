import { takeLatest, put, all, call } from 'redux-saga/effects';
import { createOrder, getOrder, getOrders } from '../../lib/api';
import {
  CREATE_ORDER_START,
  GET_ORDER_START,
  GET_ORDERS_START,
} from './order.const';
import {
  createOrderSuccess,
  createOrderFailure,
  getOrderSuccess,
  getOrderFailure,
  getOrdersSuccess,
  getOrdersFailure,
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
    yield put(getOrderSuccess(order.data));
  } catch (error) {
    yield put(getOrderFailure(error));
  }
}

function* getAllOrders() {
  try {
    const orders = yield call(() => getOrders());
    console.log(orders);
    // yield put(getOrdersSuccess(orders.data));
  } catch (error) {
    yield put(getOrdersFailure(error));
  }
}

function* createOrderStart() {
  yield takeLatest(CREATE_ORDER_START, createOneOrder);
}

function* getOrderStart() {
  yield takeLatest(GET_ORDER_START, getOneOrder);
}

function* getOrdersStart() {
  yield takeLatest(GET_ORDERS_START, getAllOrders);
}

export function* orderSagas() {
  yield all([
    call(createOrderStart),
    call(getOrderStart),
    call(getOrdersStart),
  ]);
};
import { takeLatest, put, all, call } from 'redux-saga/effects';
import { createOrder, getOrder, getOrders, patchOrder } from '../../lib/api';
import {
  CREATE_ORDER_START,
  GET_ORDER_START,
  GET_ORDERS_START,
  PATCH_ORDER_START,
} from './order.const';
import {
  createOrderSuccess,
  createOrderFailure,
  getOrderSuccess,
  getOrderFailure,
  getOrdersSuccess,
  getOrdersFailure,
  patchOrderSuccess,
  patchOrderFailure,
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
    yield put(getOrdersSuccess(orders.data));
  } catch (error) {
    yield put(getOrdersFailure(error));
  }
}

function* updateOrder(payload) {
  try {
    const order = yield call(() => patchOrder(payload.payload));
    yield put(patchOrderSuccess(order.data));
  } catch (error) {
    yield put(patchOrderFailure(error));
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

function* updateOrderStart() {
  yield takeLatest(PATCH_ORDER_START, updateOrder);
}

export function* orderSagas() {
  yield all([
    call(createOrderStart),
    call(getOrderStart),
    call(getOrdersStart),
    call(updateOrderStart),
  ]);
};
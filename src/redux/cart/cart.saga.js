import { takeLatest, put, all, call } from 'redux-saga/effects';
import { addToCart, getCart, collectProduct } from '../../lib/api';
import {
  ADD_CART_START,
  GET_CART_START,
  COLLECT_CART_START,
} from './cart.const';
import {
  addCartFailure,
  getCartSuccess,
  getCartFailure,
  collectCartSuccess,
  collectCartFailure,
} from './cart.action';

function* addProductToCart(payload) {
  try {
    yield call(() => addToCart(payload.payload));
  } catch (error) {
    yield put(addCartFailure(error));
  }
}

function* getAllCart() {
  try {
    const cart = yield call(() => getCart());
    yield put(getCartSuccess(cart.data));
  } catch (error) {
    yield put(getCartFailure(error));
  }
}

function* collectOneProductAndUpdateCart(payload) {
  try {
    yield call(() => collectProduct(payload.payload));
    const cart = yield call(() => getCart());
    yield put(collectCartSuccess(cart.data));
  } catch (error) {
    yield put(collectCartFailure(error));
  }
}

function* addToCartStart() {
  yield takeLatest(ADD_CART_START, addProductToCart);
}

function* getCartStart() {
  yield takeLatest(GET_CART_START, getAllCart);
}

function* collectProductAndUpdateCartStart() {
  yield takeLatest(COLLECT_CART_START, collectOneProductAndUpdateCart);
}

export function* cartSagas() {
  yield all([
    call(addToCartStart),
    call(getCartStart),
    call(collectProductAndUpdateCartStart),
  ]);
};
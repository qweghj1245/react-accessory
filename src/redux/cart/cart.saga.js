import { takeLatest, put, all, call } from 'redux-saga/effects';
import { addToCart } from '../../lib/api';
import {
  ADD_CART_START
} from './cart.const';
import {
  addCartFailure,
} from './cart.action';

function* addProductToCart(payload) {
  try {
    yield call(() => addToCart(payload.payload));
  } catch (error) {
    yield put(addCartFailure(error));
  }
}

function* addToCartStart() {
  yield takeLatest(ADD_CART_START, addProductToCart);
}

export function* cartSagas() {
  yield all([
    call(addToCartStart),
  ]);
};
import { takeLatest, put, all, call } from 'redux-saga/effects';
import { addToCart, getCart, collectProduct, deleteCart, addCoupon } from '../../lib/api';
import {
  ADD_CART_START,
  GET_CART_START,
  COLLECT_CART_START,
  DELETE_CART_START,
  COUPON_START,
} from './cart.const';
import {
  addCartFailure,
  getCartSuccess,
  getCartFailure,
  collectCartSuccess,
  collectCartFailure,
  deleteCartFailure,
  reduceCart,
  couponSuccess,
  couponFailure,
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
    yield put(reduceCart(cart.data));
  } catch (error) {
    yield put(getCartFailure(error));
  }
}

function* collectOneProductAndUpdateCart(payload) {
  try {
    yield call(() => collectProduct(payload.payload));
    const cart = yield call(() => getCart());
    yield put(collectCartSuccess(cart.data));
    yield put(reduceCart(cart.data));
  } catch (error) {
    yield put(collectCartFailure(error));
  }
}

function* deleteCartProduct(payload) {
  try {
    yield call(() => deleteCart({ id: payload.payload }));
    const cart = yield call(() => getCart());
    yield put(getCartSuccess(cart.data));
    yield put(reduceCart(cart.data));
  } catch (error) {
    yield put(deleteCartFailure(error));
  }
}

function* addACoupon(payload) {
  try {
    const res = yield call(() => addCoupon(payload.payload));
    yield put(couponSuccess(res.data.coupon));
  } catch (error) {
    yield put(couponFailure(error));
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

function* deleteCartStart() {
  yield takeLatest(DELETE_CART_START, deleteCartProduct);
}

function* addCouponStart() {
  yield takeLatest(COUPON_START, addACoupon);
}

export function* cartSagas() {
  yield all([
    call(addToCartStart),
    call(getCartStart),
    call(collectProductAndUpdateCartStart),
    call(deleteCartStart),
    call(addCouponStart),
  ]);
};
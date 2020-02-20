import { takeLatest, put, all, call } from 'redux-saga/effects';
import { getProducts, getProduct } from '../../lib/api';
import {
  GET_PRODUCTS_START,
  GET_PRODUCT_START,
} from './product.const';
import { 
  getProductsSuccess,
  getProductsFailure,
  getProductSuccess,
  getProductFailure,
} from './product.action';

function* getAllProducts() {
  try {
    const products = yield call(() => getProducts());
    yield put(getProductsSuccess(products.data));
  } catch (error) {
    yield put(getProductsFailure(error));
  }
}

function* getOneProduct(payload) {
  try {
    const product = yield call(() => getProduct(payload.payload));
    yield put(getProductSuccess(product.data));
  } catch (error) {
    yield put(getProductFailure(error));
  }
}

function* getProductsStart() {
  yield takeLatest(GET_PRODUCTS_START, getAllProducts);
}

function* getProductStart() {
  yield takeLatest(GET_PRODUCT_START, getOneProduct);
}

export function* productSagas() {
  yield all([
    call(getProductsStart),
    call(getProductStart),
  ]);
};
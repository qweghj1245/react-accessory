import { takeLatest, put, all, call } from 'redux-saga/effects';
import { getProducts } from '../../lib/api';
import {
  GET_PRODUCTS_START,
} from './product.const';
import { 
  getProductsSuccess,
  getProductsFailure,
} from './product.action';

function* getAllProducts() {
  try {
    const products = yield call(() => getProducts());
    yield put(getProductsSuccess(products.data));
  } catch (error) {
    yield put(getProductsFailure(error));
  }
}

function* getProductsStart() {
  yield takeLatest(GET_PRODUCTS_START, getAllProducts);
}

export function* productSagas() {
  yield all([
    call(getProductsStart),
  ]);
};
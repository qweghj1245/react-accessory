import { takeLatest, put, all, call } from 'redux-saga/effects';
import { getProducts, getProduct, collectProduct, getCollection } from '../../lib/api';
import {
  GET_PRODUCTS_START,
  GET_PRODUCT_START,
  COLLECT_START,
  GET_COLLECTION_START,
} from './product.const';
import {
  getProductsSuccess,
  getProductsFailure,
  getProductSuccess,
  getProductFailure,
  collectSuccess,
  collectFailure,
  getCollectionSuccess,
  getCollectionFailure,
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

function* collectOneProduct(payload) {
  try {
    const product = yield call(() => collectProduct(payload.payload));
    yield put(collectSuccess(product.data));
  } catch (error) {
    yield put(collectFailure(error));
  }
}

function* getAllCollection(payload) {
  try {
    const product = yield call(() => getCollection());
    yield put(getCollectionSuccess(product.data));
  } catch (error) {
    yield put(getCollectionFailure(error));
  }
}

function* getProductsStart() {
  yield takeLatest(GET_PRODUCTS_START, getAllProducts);
}

function* getProductStart() {
  yield takeLatest(GET_PRODUCT_START, getOneProduct);
}

function* collectProductStart() {
  yield takeLatest(COLLECT_START, collectOneProduct);
}

function* getCollectionStart() {
  yield takeLatest(GET_COLLECTION_START, getAllCollection);
}

export function* productSagas() {
  yield all([
    call(getProductsStart),
    call(getProductStart),
    call(collectProductStart),
    call(getCollectionStart),
  ]);
};
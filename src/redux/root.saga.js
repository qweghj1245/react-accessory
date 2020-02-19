import { all, call } from 'redux-saga/effects';
import { userSagas } from './user/user.saga';
import { productSagas } from './product/product.saga';
export default function* rootSaga() {
  yield all([call(userSagas), call(productSagas)]);
}

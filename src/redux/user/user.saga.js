import { createUser } from '../../lib/api';
import { takeLatest, put, all, call } from 'redux-saga/effects';
import { CREATE_USER_START } from './user.const';
import { createUserSuccess, createUserFailure} from './user.action';
function* registerUser(payload) {
  try {
    const user = yield call(() => createUser(payload.payload));
    yield put(createUserSuccess(user.data));
  } catch (error) {
    yield put(createUserFailure(error.response.data.message));
  }
}



function* registerUserStart() {
  yield takeLatest(CREATE_USER_START, registerUser);
}

export function* userSagas() {
  yield all([call(registerUserStart)]);
}
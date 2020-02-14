import { createUser, loginUser, googleSign } from '../../lib/api';
import { takeLatest, put, all, call } from 'redux-saga/effects';
import { CREATE_USER_START, LOGIN_START, GOOGLE_START } from './user.const';
import { createUserSuccess, createUserFailure, loginSuccess, loginFailure, googleSuccess, googleFailure } from './user.action';
import { saveLocal } from '../../lib/localStorage';
function* registerUser(payload) {
  try {
    const user = yield call(() => createUser(payload.payload));
    yield put(createUserSuccess(user.data));
  } catch (error) {
    yield put(createUserFailure(error.response.data.message));
  }
}

function* login(payload) {
  try {
    const user = yield call(() => loginUser(payload.payload));
    yield put(loginSuccess(user.data));
    yield saveLocal('Authorization', user.data.token);
  } catch (error) {
    yield put(loginFailure(error.response.data.message));
  }
}

function* googleLogin(payload) {
  try {
    const user = yield call(() => googleSign({ token: payload.payload }));
    console.log(user);
    yield put(googleSuccess(user.data));
    yield saveLocal('Authorization', user.data.token);
  } catch (error) {
    yield put(googleFailure(error.response.data.message));
  }
}



function* registerUserStart() {
  yield takeLatest(CREATE_USER_START, registerUser);
}

function* loginStart() {
  yield takeLatest(LOGIN_START, login);
}

function* googleStart() {
  yield takeLatest(GOOGLE_START, googleLogin);
}

export function* userSagas() {
  yield all([call(registerUserStart), call(loginStart), call(googleStart)]);
}
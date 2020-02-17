import { createUser, loginUser, googleSign, getUser, logoutUser, patchUser, changePassword } from '../../lib/api';
import { takeLatest, put, all, call } from 'redux-saga/effects';
import { 
  CREATE_USER_START, 
  LOGIN_START, 
  GOOGLE_START, 
  GET_USER_START, 
  LOG_OUT_START, 
  UPDATE_USER_START, 
  CHANGE_PASSWORD_START,
} from './user.const';
import {
  createUserSuccess,
  createUserFailure,
  loginSuccess,
  loginFailure,
  googleSuccess,
  googleFailure,
  getUserSuccess,
  getUserFailure,
  logoutSuccess,
  logoutFailure,
  updateSuccess,
  updateFailure,
  changePasswordSuccess,
  changePasswordFailure,
} from './user.action';
import { saveLocal, removeLocal, getLocal } from '../../lib/localStorage';
function* registerUser(payload) {
  try {
    const user = yield call(() => createUser(payload.payload));
    yield put(createUserSuccess(user.data));
    yield saveLocal('Authorization', user.data.token);
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
    yield put(googleSuccess(user.data));
    yield saveLocal('Authorization', user.data.token);
  } catch (error) {
    yield put(googleFailure(error.response.data.message));
  }
}

function* getUserInfo() {
  try {
    const user = yield call(() => getUser());
    yield put(getUserSuccess(user.data));
  } catch (error) {
    yield put(getUserFailure('請先登入'));
  }
}

function* logout() {
  try {
    let headerConfig = yield {
      headers: {
        Authorization: getLocal('Authorization'),
      }
    };
    yield call(() => logoutUser(headerConfig));
    yield put(logoutSuccess(null));
    yield removeLocal('Authorization');
  } catch (error) {
    yield put(logoutFailure(error.response.data.message));
  }
}

function* updateUser(payload) {
  try {
    const newUser = yield call(() => patchUser(payload.payload));
    yield put(updateSuccess(newUser.data));
  } catch (error) {
    yield put(updateFailure(error.response.data.message));
  }
}

function* changePasswordUser(payload) {
  try {
    const user = yield call(() => changePassword(payload.payload));
    yield put(changePasswordSuccess(user.data.user));
    yield saveLocal('Authorization', user.data.token);
  } catch (error) {
    yield put(changePasswordFailure(error.response.data.message));
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

function* getUserStart() {
  yield takeLatest(GET_USER_START, getUserInfo);
}

function* logoutStart() {
  yield takeLatest(LOG_OUT_START, logout);
}

function* updateStart() {
  yield takeLatest(UPDATE_USER_START, updateUser);
}

function* changePasswordStart() {
  yield takeLatest(CHANGE_PASSWORD_START, changePasswordUser);
}

export function* userSagas() {
  yield all([
    call(registerUserStart),
    call(loginStart),
    call(googleStart),
    call(getUserStart),
    call(logoutStart),
    call(updateStart),
    call(changePasswordStart)]);
}
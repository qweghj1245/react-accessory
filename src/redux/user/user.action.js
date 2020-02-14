import {
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './user.const';

export const createUserStart = (userConfig) => ({
  type: CREATE_USER_START,
  payload: userConfig,
});

export const createUserSuccess = (userResponse) => ({
  type: CREATE_USER_SUCCESS,
  payload: userResponse,
});

export const createUserFailure = (error) => ({
  type: CREATE_USER_FAILURE,
  payload: error,
});

export const loginStart = (userConfig) => ({
  type: LOGIN_START,
  payload: userConfig,
});

export const loginSuccess = (userResponse) => ({
  type: LOGIN_SUCCESS,
  payload: userResponse,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});
import {
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GOOGLE_START,
  GOOGLE_SUCCESS,
  GOOGLE_FAILURE,
  GET_USER_START,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  LOG_OUT_START,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
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

export const googleStart = (token) => ({
  type: GOOGLE_START,
  payload: token,
});

export const googleSuccess = (userResponse) => ({
  type: GOOGLE_SUCCESS,
  payload: userResponse,
});

export const googleFailure = (error) => ({
  type: GOOGLE_FAILURE,
  payload: error,
});

export const getUserStart = () => ({
  type: GET_USER_START,
});

export const getUserSuccess = (userResponse) => ({
  type: GET_USER_SUCCESS,
  payload: userResponse,
});

export const getUserFailure = (error) => ({
  type: GET_USER_FAILURE,
  payload: error,
});

export const logoutStart = () => ({
  type: LOG_OUT_START,
});

export const logoutSuccess = (response) => ({
  type: LOG_OUT_SUCCESS,
  payload: response,
});

export const logoutFailure = (error) => ({
  type: LOG_OUT_FAILURE,
  payload: error,
});
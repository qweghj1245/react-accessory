import {
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
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
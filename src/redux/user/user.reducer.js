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
} from './user.const';

const INITAIL_STATE = {
  createUser: null,
  loginUser: null,
  createError: null,
  loginError: null,
}

const userReducer = (state = INITAIL_STATE, action) => {
  switch (action.type) {
    case CREATE_USER_START:
      return {
        ...state,
        createError: null,
      }
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        createUser: action.payload.user,
      }
    case CREATE_USER_FAILURE:
      return {
        ...state,
        createError: action.payload,
      }
    case LOGIN_START:
      return {
        ...state,
        loginError: null,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginUser: action.payload.user,
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        loginError: action.payload,
      }
    case GOOGLE_START:
      return {
        ...state,
        loginError: null,
      }
    case GOOGLE_SUCCESS:
      return {
        ...state,
        loginUser: action.payload.user,
      }
    case GOOGLE_FAILURE:
      return {
        ...state,
        loginError: action.payload,
      }
    default:
      return state;
  }
};

export default userReducer;
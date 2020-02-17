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
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  CHANGE_PASSWORD_START,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILURE,
} from './user.const';

const INITAIL_STATE = {
  loginUser: null,
  createUser: null,
  logoutUser: null,
  updateStatus: '', // user, password
  createError: null,
  loginError: null,
  logoutError: null,
  userError: null,
  updateError: null,
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
        loginUser: action.payload.user,
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
    case GET_USER_START:
      return {
        ...state,
      }
    case GET_USER_SUCCESS:
      return {
        ...state,
        loginUser: action.payload,
      }
    case GET_USER_FAILURE:
      return {
        ...state,
        userError: action.payload,
      }
    case LOG_OUT_START:
      return {
        ...state,
      }
    case LOG_OUT_SUCCESS:
      return {
        ...state,
        loginUser: action.payload,
        createUser: action.payload,
        logoutUser: 'done',
      }
    case LOG_OUT_FAILURE:
      return {
        ...state,
        logoutError: action.payload,
        logoutUser: 'fail',
      }
    case UPDATE_USER_START:
      return {
        ...state,
        updateStatus: '',
      }
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        loginUser: action.payload,
        updateStatus: 'user',
      }
    case UPDATE_USER_FAILURE:
      return {
        ...state,
        updateError: action.payload,
        updateStatus: 'error',
      }
    case CHANGE_PASSWORD_START:
      return {
        ...state,
        updateStatus: '',
      }
    case CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        loginUser: action.payload,
        updateStatus: 'password',
      }
    case CHANGE_PASSWORD_FAILURE:
      return {
        ...state,
        updateError: action.payload,
        updateStatus: 'error',
      }
    default:
      return state;
  }
};

export default userReducer;
import {
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './user.const';

const INITAIL_STATE = {
  createUser: null,
  errorMessage: null,
  loginUser: null,
}

const userReducer = (state = INITAIL_STATE, action) => {
  switch (action.type) {
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        createUser: action.payload.data,
      }
    case CREATE_USER_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginUser: action.payload.data,
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      }
    default:
      return state;
  }
};

export default userReducer;
import {
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
} from './user.const';

const INITAIL_STATE = {
  createUser: null,
  errorMessage: null,
}

const userReducer = (state = INITAIL_STATE, action) => {
  console.log(action.payload);
  switch (action.type) {
    case CREATE_USER_START:
      return {
        ...state,
      }
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
    default:
      return state;
  }
};

export default userReducer;
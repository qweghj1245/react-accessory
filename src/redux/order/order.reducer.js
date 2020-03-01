import {
  CREATE_ORDER_START,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILURE,
  GET_ORDER_START,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILURE,
} from './order.const';

const INITAIL_STATE = {
  order: null,
  singleOrder: null,
  createError: null,
  getError: null,
  isLoading: false,
}

const orderReducer = (state = INITAIL_STATE, action) => {
  switch (action.type) {
    case CREATE_ORDER_START:
      return {
        ...state,
        isLoading: true,
      }
    case CREATE_ORDER_SUCCESS:
      return {
        ...state,
        order: action.payload,
        isLoading: false,
      }
    case CREATE_ORDER_FAILURE:
      return {
        ...state,
        createError: action.payload,
      }
    case GET_ORDER_START:
      return {
        ...state,
        isLoading: true,
      }
    case GET_ORDER_SUCCESS:
      return {
        ...state,
        singleOrder: action.payload,
        isLoading: false,
      }
    case GET_ORDER_FAILURE:
      return {
        ...state,
        getError: action.payload,
      }
    default:
      return state;
  }
}

export default orderReducer;
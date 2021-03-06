import {
  CREATE_ORDER_START,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILURE,
  GET_ORDER_START,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILURE,
  GET_ORDERS_START,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAILURE,
  PATCH_ORDER_SUCCESS,
  PATCH_ORDER_FAILURE,
} from './order.const';

const INITAIL_STATE = {
  order: null,
  singleOrder: null,
  orders: [],
  createError: null,
  getError: null,
  udpateError: null,
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
        singleOrder: null,
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
    case GET_ORDERS_START:
      return {
        ...state,
        isLoading: true,
      }
    case GET_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.payload,
        isLoading: false,
      }
    case GET_ORDERS_FAILURE:
      return {
        ...state,
        getError: action.payload,
      }
    case PATCH_ORDER_SUCCESS:
      return {
        ...state,
        singleOrder: action.payload,
      }
    case PATCH_ORDER_FAILURE:
      return {
        ...state,
        udpateError: action.payload,
      }
    default:
      return state;
  }
}

export default orderReducer;
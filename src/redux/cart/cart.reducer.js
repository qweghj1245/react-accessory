import {
  ADD_CART_FAILURE,
  GET_CART_SUCCESS,
  GET_CART_FAILURE,
  COLLECT_CART_SUCCESS,
  COLLECT_CART_FAILURE,
  DELETE_CART_SUCCESS,
  DELETE_CART_FAILURE,
  REDUCE_CART,
  UPDATE_CART,
  SET_ORDER_INFO,
} from './cart.const';
import { computeCart } from './cart.utils';

const INITAIL_STATE = {
  cartError: null,
  cart: null,
  reduceCart: null,
  getCartError: null,
  deleteCartError: null,
  orderInfoState: {
    contactPerson: '',
    contactPhoneNumber: '',
    recipientPerson: '',
    recipientPhoneNumber: '',
    recipientPostalCode: '',
    recipientCounty: '',
    recipientArea: '',
    recipientAddress: '',
  },
}

const cartReducer = (state = INITAIL_STATE, action) => {
  switch (action.type) {
    case ADD_CART_FAILURE:
      return {
        ...state,
        cartError: action.payload,
      }
    case GET_CART_SUCCESS:
      return {
        ...state,
        cart: action.payload,
      }
    case GET_CART_FAILURE:
      return {
        ...state,
        getCartError: action.payload,
      }
    case COLLECT_CART_SUCCESS:
      return {
        ...state,
        cart: action.payload,
      }
    case COLLECT_CART_FAILURE:
      return {
        ...state,
        getCartError: action.payload,
      }
    case DELETE_CART_SUCCESS:
      return {
        ...state,
        cart: action.payload,
      }
    case DELETE_CART_FAILURE:
      return {
        ...state,
        deleteCartError: action.payload,
      }
    case REDUCE_CART:
      return {
        ...state,
        reduceCart: computeCart(action.payload),
      }
    case UPDATE_CART:
      return {
        ...state,
        reduceCart: action.payload,
      }
    case SET_ORDER_INFO:
      return {
        ...state,
        orderInfoState: action.payload,
      }
    default:
      return state;
  }
}

export default cartReducer;
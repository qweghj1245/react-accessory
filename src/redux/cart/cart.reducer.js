import {
  ADD_CART_FAILURE,
  GET_CART_START,
  GET_CART_SUCCESS,
  GET_CART_FAILURE,
  COLLECT_CART_SUCCESS,
  COLLECT_CART_FAILURE,
  DELETE_CART_SUCCESS,
  DELETE_CART_FAILURE,
  REDUCE_CART,
  UPDATE_CART,
  SET_ORDER_INFO,
  COUPON_START,
  COUPON_SUCCESS,
  COUPON_FAILURE,
} from './cart.const';
import { computeCart } from './cart.utils';

const INITAIL_STATE = {
  cartError: null,
  cart: null,
  reduceCart: [],
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
  isLoading: false,
  coupon: null,
  couponError: null,
}

const cartReducer = (state = INITAIL_STATE, action) => {
  switch (action.type) {
    case ADD_CART_FAILURE:
      return {
        ...state,
        cartError: action.payload,
      }
    case GET_CART_START:
      return {
        ...state,
        isLoading: true,
      }
    case GET_CART_SUCCESS:
      return {
        ...state,
        cart: action.payload,
        isLoading: false,
      }
    case GET_CART_FAILURE:
      return {
        ...state,
        getCartError: action.payload,
        isLoading: false,
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
    case COUPON_START:
      return {
        ...state,
        coupon: null,
      }
    case COUPON_SUCCESS:
      return {
        ...state,
        coupon: action.payload,
      }
    case COUPON_FAILURE:
      return {
        ...state,
        couponError: action.payload,
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
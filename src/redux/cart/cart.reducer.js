import {
  ADD_CART_FAILURE,
  GET_CART_SUCCESS,
  GET_CART_FAILURE,
  COLLECT_CART_SUCCESS,
  COLLECT_CART_FAILURE,
  DELETE_CART_SUCCESS,
  DELETE_CART_FAILURE,
} from './cart.const';

const INITAIL_STATE = {
  cartError: null,
  cart: null,
  getCartError: null,
  deleteCartError: null,
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
    default:
      return state;
  }
}

export default cartReducer;
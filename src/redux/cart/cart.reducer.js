import {
  ADD_CART_FAILURE,
} from './cart.const';

const INITAIL_STATE = {
  cartError: null,
}

const cartReducer = (state = INITAIL_STATE, action) => {
  switch (action.type) {
    case ADD_CART_FAILURE:
      return {
        ...state,
        cartError: action.payload,
      }
    default:
      return state;
  }
}

export default cartReducer;
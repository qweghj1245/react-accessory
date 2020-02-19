import {
  GET_PRODUCTS_START,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
} from './product.const';

const INITAIL_STATE = {
  products: [],
  getProductsError: null,
  isLoading: false,
}

const productReducer = (state = INITAIL_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCTS_START:
      return {
        ...state,
        isLoading: true,
      }
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        isLoading: false,
      }
    case GET_PRODUCTS_FAILURE:
      return {
        ...state,
        getProductsError: action.payload,
      }
    default:
      return state;
  }
}

export default productReducer;
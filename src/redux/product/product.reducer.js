import {
  GET_PRODUCTS_START,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCT_START,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
  FILTER_PRODUCTS_START,
  COLLECT_SUCCESS,
  COLLECT_FAILURE,
  GET_COLLECTION_START,
  GET_COLLECTION_SUCCESS,
  GET_COLLECTION_FAILURE,
} from './product.const';

const INITAIL_STATE = {
  products: [],
  filterType: '',
  product: null,
  collection: [],
  breadcrumb: '',
  getProductsError: null,
  getProductError: null,
  collectError: null,
  collectionError: null,
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
    case GET_PRODUCT_START:
      return {
        ...state,
        isLoading: true,
      }
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.payload,
        breadcrumb: action.payload.name,
        isLoading: false,
      }
    case GET_PRODUCT_FAILURE:
      return {
        ...state,
        getProductError: action.payload,
      }
    case FILTER_PRODUCTS_START:
      return {
        ...state,
        filterType: action.payload,
      }
    case COLLECT_SUCCESS:
      return {
        ...state,
        product: action.payload,
      }
    case COLLECT_FAILURE:
      return {
        ...state,
        collectError: action.payload,
      }
    case GET_COLLECTION_START:
      return {
        ...state,
      }
    case GET_COLLECTION_SUCCESS:
      return {
        ...state,
        collection: action.payload,
      }
    case GET_COLLECTION_FAILURE:
      return {
        ...state,
        collectionError: action.payload,
      }
    default:
      return state;
  }
}

export default productReducer;
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/user.reducer';
import productReducer from './product/product.reducer';
import cartReducer from './cart/cart.reducer';
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user', 'cart'], // no persisted
  whiteList: [], // persisted
}

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);

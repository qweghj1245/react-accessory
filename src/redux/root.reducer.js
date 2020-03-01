import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/user.reducer';
import productReducer from './product/product.reducer';
import cartReducer from './cart/cart.reducer';
import orderReducer from './order/order.reducer';
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user', 'cart', 'order'], // no persisted
  whiteList: [], // persisted
}

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  cart: cartReducer,
  order: orderReducer,
});

export default persistReducer(persistConfig, rootReducer);

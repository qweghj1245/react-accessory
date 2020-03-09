import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './root.reducer';
import rootSaga from './root.saga';
const sagaMiddleware = createSagaMiddleware();

let middleware = process.env.REACT_APP_STAGE === 'PROD' ? [sagaMiddleware] : [sagaMiddleware, logger];
const store = createStore(rootReducer, applyMiddleware(...middleware));
const persist = persistStore(store)

sagaMiddleware.run(rootSaga);

export { store, persist };
// Redux.
import { compose, createStore } from 'redux';

// Redux Persist.
import { persistReducer, persistStore } from 'redux-persist';
import LocalStorage from 'redux-persist/lib/storage';

// Root reducer.
import { rootReducer } from './root-reducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

// Config Redux Persist.
const persistConfig = {
  key: 'root',
  storage: LocalStorage,
  whitelist: ['app', 'settings', 'invoice'],
};

// Persist reducer.
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Compose enhancers.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store.
export const store = createStore(persistedReducer, compose(composeEnhancers()));

// Persistor.
export const persistor = persistStore(store);

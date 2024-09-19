import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import { portfolioSlice } from './slice/portfolioSlice';
import { coinApi } from './apis/coinsApi';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
    portfolioReducer: portfolioSlice.reducer,
    [coinApi.reducerPath]: coinApi.reducer
});

const persistedRootReducer = persistReducer(persistConfig, rootReducer);

export type IRootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: persistedRootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(coinApi.middleware),
});

export const persistor = persistStore(store);
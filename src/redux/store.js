import { configureStore } from '@reduxjs/toolkit';
import { tweetsReducer } from './tweets/tweetsSlice';
import { filtersReducer } from './filter/filterSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'filter',
  storage,
  whitelist: 'followingsID',
};

export const store = configureStore({
  reducer: {
    tweets: tweetsReducer,
    filter: persistReducer(persistConfig, filtersReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

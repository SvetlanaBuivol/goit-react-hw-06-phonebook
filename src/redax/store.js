import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { contactsReducer } from './contactsSlice';
import { filterSlice } from './filterSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterSlice.reducer,
  },
});

export const persistor = persistStore(store);

export default store;

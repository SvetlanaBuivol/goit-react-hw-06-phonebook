import { createSlice, createSelector } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: { filter: '' },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;

// selectors

export const selectFilterValue = state => state.filter.filter.toLowerCase();

export const selectFilteredContacts = createSelector(
  [state => state.contacts.contacts, selectFilterValue],
  (contacts, filterValue) =>
    contacts.filter(contact => contact.name.toLowerCase().includes(filterValue))
);

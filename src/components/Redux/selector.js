import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contact.contacts;
export const selectLoading = state => state.contact.isLoading;
export const selectError = state => state.contact.error;
export const selectFilters = state => state.filter.filter;

export const selectFilterContact = createSelector(
  [selectContacts, selectFilters],
  (contact, filter) =>
    contact.filter(contact => {
      return contact.name.toLowerCase().includes(filter?.toLowerCase() || '');
    })
);

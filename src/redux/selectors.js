export const getFilter = state => state.filter;

// Contacts selectors
export const getContacts = state => state.contacts.contactList;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;

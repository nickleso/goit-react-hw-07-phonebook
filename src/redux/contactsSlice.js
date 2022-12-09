import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import { nanoid } from 'nanoid';

const contactsInitialSlice = {
  contactList: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialSlice,
  reducers: {
    addContact(state, action) {
      state.contactList.push(action.payload);
    },

    deleteContact(state, action) {
      const { contactList } = state;
      const index = contactList.findIndex(
        contact => contact.id === action.payload
      );
      contactList.splice(index, 1);
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

// Selectors
export const getContacts = state => state.contacts;

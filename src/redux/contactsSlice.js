import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

// const handlePending =

const contactsInitialState = {
  contactList: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
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

  extraReducers: builder => {},
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

// Selectors
export const getContacts = state => state.contacts;

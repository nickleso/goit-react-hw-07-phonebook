import { createSlice } from '@reduxjs/toolkit';
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { fetchContacts, addContact, deleteContact } from './operations';

// import { nanoid } from 'nanoid';

// const contactsInitialState = {
//   contactList: [],
//   isLoading: false,
//   error: null,
// };

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contactList: [],
    isLoading: false,
    error: null,
  },

  // extraReducers: builder => {
  //   builder.addCase(fetchContacts.fulfilled, (state, action) =>
  //     state.contactList.push(action.payload)
  //   );
  // },

  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contactList = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,

    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contactList.push(action.payload);
    },
    [addContact.rejected]: handleRejected,

    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const { contactList } = state;
      const index = contactList.findIndex(
        contact => contact.id === action.payload
      );
      contactList.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;

// Selectors
export const getContacts = state => state.contacts.contactList;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;

// export const contactsApi = createApi({
//   reducerPath: 'contacts',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://63938b9811ed187986b8f487.mockapi.io/api/v1',
//   }),
//   tagTypes: ['Contacts'],
//   endpoints: builder => ({
//     fetchContacts: builder.query({
//       query: () => '/contacts',
//       providesTags: ['Contacts'],
//     }),

//     addContacts: builder.mutation({
//       query: text => ({
//         url: '/contacts',
//         method: 'POST',
//         body: text,
//       }),
//       invalidatesTags: ['Contacts'],
//     }),

//     deleteContacts: builder.mutation({
//       query: id => ({
//         url: `/contacts/${id}`,
//         method: 'DELETE',
//       }),
//       invalidatesTags: ['Contacts'],
//     }),
//   }),
// });

// export const {
//   useFetchContactsQuery,
//   useAddContactsMutation,
//   useDeleteContactsMutation,
// } = contactsApi;

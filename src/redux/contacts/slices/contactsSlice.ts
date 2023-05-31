import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IContactsState, IContact, IFullState } from '../../../interfaces';
import { fetchContacts, removeContact, addContact } from '../operations';

const initialState: IContactsState = {
  items: [] as IContact[],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    //fetchContacts
    builder.addCase(fetchContacts.pending, (state: IContactsState) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchContacts.fulfilled,
      (state, action: PayloadAction<IContact[]>) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      }
    );
    builder.addCase(fetchContacts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || 'Something went wrong';
    });
    //addContact
    builder.addCase(addContact.pending, (state: IContactsState) => {
      state.isLoading = true;
    });
    builder.addCase(
      addContact.fulfilled,
      (state, action: PayloadAction<IContact>) => {
        state.items.push(action.payload);
        state.isLoading = false;
        state.error = null;
      }
    );
    builder.addCase(addContact.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || 'Something went wrong';
    });
    //removeContact
    builder.addCase(removeContact.pending, (state: IContactsState) => {
      state.isLoading = true;
    });
    builder.addCase(
      removeContact.fulfilled,
      (state, action: PayloadAction<IContact>) => {
        state.items = state.items.filter(item => item.id !== action.payload.id);
        state.isLoading = false;
        state.error = null;
      }
    );
    builder.addCase(removeContact.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export const contactsReducer = contactsSlice.reducer;

export const getContacts = (state: IFullState) => state.contacts.items;
export const getIsLoading = (state: IFullState) => state.contacts.isLoading;
export const getError = (state: IFullState) => state.contacts.error;

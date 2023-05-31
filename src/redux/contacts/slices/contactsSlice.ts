import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IContactsState, IContact, IFullState } from '../../../interfaces';
import { fetchContacts, removeContact, addContact } from '../operations';
import { isError, isPending } from '../../statusCheckers';

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
    builder.addCase(
      fetchContacts.fulfilled,
      (state, action: PayloadAction<IContact[]>) => {
        state.items = action.payload;
        fulfill(state);
      }
    );
    builder.addCase(
      addContact.fulfilled,
      (state, action: PayloadAction<IContact>) => {
        state.items.push(action.payload);
        fulfill(state);
      }
    );
    builder.addCase(
      removeContact.fulfilled,
      (state, action: PayloadAction<IContact>) => {
        state.items = state.items.filter(item => item.id !== action.payload.id);
        fulfill(state);
      }
    );
    builder.addMatcher(isPending, state => {
      state.isLoading = true;
    });
    builder.addMatcher(isError, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

function fulfill(state: IContactsState) {
  state.isLoading = false;
  state.error = null;
}

export const contactsReducer = contactsSlice.reducer;
export const getContacts = (state: IFullState) => state.contacts.items;
export const getIsLoading = (state: IFullState) => state.contacts.isLoading;
export const getError = (state: IFullState) => state.contacts.error;

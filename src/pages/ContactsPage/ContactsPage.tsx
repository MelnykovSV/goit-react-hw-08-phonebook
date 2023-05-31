import React, { useEffect } from 'react';
import { Form } from '../../components/Form/Form';
import { ContactsList } from '../../components/ContactsList/Contactslist';
import { ModernNormalize } from 'emotion-modern-normalize';
import { Filter } from '../../components/Filter/Filter';
import { Container } from './ContactsPage.styled';
import { IContact } from '../../interfaces';
import { ToastContainer, toast } from 'react-toastify';
import {
  updateFilter,
  getFilter,
} from '../../redux/contacts/slices/filterSlice';

import {
  getContacts,
  getIsLoading,
  getError,
} from '../../redux/contacts/slices/contactsSlice';

import {
  fetchContacts,
  addContact,
  removeContact,
} from '../../redux/contacts/operations';
import 'react-toastify/dist/ReactToastify.css';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const ContactsPage = () => {
  const dispatch = useAppDispatch();

  const filter = useAppSelector(getFilter);
  const contacts = useAppSelector(getContacts);
  const isLoading = useAppSelector(getIsLoading);
  const error = useAppSelector(getError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  ///Saves contact to contacts if there is no contact with such name
  const formSubmitHandler = (data: IContact): boolean => {
    const normalizedName = data.name.toLowerCase();
    if (
      !contacts.some(
        (item: IContact) => item.name.toLowerCase() === normalizedName
      )
    ) {
      dispatch(addContact({ name: data.name, number: data.number }));
      return true;
    } else {
      toast(`${data.name} is already in contacts.`);

      return false;
    }
  };

  ///Deletes contact
  const contactDeleteHandler = (id: string): void => {
    dispatch(removeContact(id));
  };

  /// Sets contacts filter
  const contactsFilter = (value: string): void => {
    dispatch(updateFilter(value.toLowerCase()));
  };

  const filteredContacts = contacts.filter((item: IContact): boolean =>
    item.name.toLowerCase().includes(filter)
  );

  return (
    <Container>
      <ModernNormalize />
      <h2>Phonebook</h2>

      <Form formSubmit={formSubmitHandler}></Form>
      {isLoading && !error && <b>Request in progress...</b>}
      <h2>Contacts</h2>
      <Filter contactsFilter={contactsFilter} />
      <ContactsList
        filteredContacts={filteredContacts}
        contactDeleteHandler={contactDeleteHandler}
      />

      <ToastContainer />
    </Container>
  );
};

export default ContactsPage as React.ComponentType;

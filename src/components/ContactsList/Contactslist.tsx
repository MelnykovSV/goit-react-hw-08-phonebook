import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container } from './Contactslist.styled';
import { IContactsListProps } from '../../interfaces';
import { Contact } from '../Contact/Contact';

import { useAppSelector } from '../../redux/hooks';
import { getIsLoading } from '../../redux/contacts/slices/contactsSlice';

export const ContactsList = ({
  filteredContacts,
  contactDeleteHandler,
}: IContactsListProps) => {
  const isLoading = useAppSelector(getIsLoading);

  return !isLoading ? (
    <Container>
      <ul>
        {filteredContacts.map(item => (
          <Contact
            name={item.name}
            number={item.number}
            id={item.id}
            key={item.id}
            deleteHandler={contactDeleteHandler}
          />
        ))}
      </ul>
    </Container>
  ) : (
    <div>Loading...</div>
  );
};

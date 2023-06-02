import { Container } from './Contactslist.styled';
import { IContactsListProps } from '../../interfaces';
import { Contact } from '../Contact/Contact';

import { useAppSelector } from '../../redux/hooks';
import { getIsLoading } from '../../redux/contacts/slices/contactsSlice';
import { LinearProgress } from '@mui/material';

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
    <LinearProgress />
  );
};

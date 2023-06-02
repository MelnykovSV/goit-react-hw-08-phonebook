import { Container } from './StatusIndicator.styled';
import { Puff } from 'react-loader-spinner';

import { useAppSelector } from '../../redux/hooks';
// import { getIsLoading, getError } from '../../redux/slices/contactsSlice';
import {
  getIsLoading,
  getError,
} from '../../redux/contacts/slices/contactsSlice';

export const StatusIndicator = () => {
  const isLoading = useAppSelector(getIsLoading);
  const error = useAppSelector(getError);

  if (error) {
    return (
      <Container>
        <div className="error-indicator"></div>
      </Container>
    );
  }
  if (isLoading) {
    return (
      <Container>
        {isLoading && !error && (
          <Puff
            height="20"
            width="20"
            radius={1}
            color="#4fa94d"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        )}
      </Container>
    );
  }
  return (
    <Container>
      <div className="ok-indicator"></div>
    </Container>
  );
};

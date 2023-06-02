import { Container } from './Page404.styled';
import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <Container>
      <h1>Error 404</h1>
      <Link to="/">Go back home</Link>
    </Container>
  );
};

export default Page404;

import styled from '@emotion/styled';

import { colors } from '../../constants';

export const Container = styled.div`
  /* position: fixed; */
  /* width: min(400px, 100%); */
  background-color: ${colors.bg.primary};
  min-height: 100%;
  /* height: 100vh; */

  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #dbe3ff;
  padding: 20px 10px;

  h2 {
    margin: 0;
  }

  .contacts-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 30px;
    margin: 0 auto;
    .contacts-form-container {
      width: 310px;
    }
    .contacts-list-container {
      width: 310px;
    }
  }
`;

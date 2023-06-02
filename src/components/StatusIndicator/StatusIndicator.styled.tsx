import styled from '@emotion/styled';

export const Container = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: 10px;

  .ok-indicator {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: green;
  }

  .error-indicator {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: red;
  }
`;

import styled from '@emotion/styled';

export const Container = styled.div`
  header {
    a {
      text-decoration: none;
      color: white;
      font-weight: 700;
      &.active {
        color: #2a2e70;
      }
    }

    .nav-link {
      display: block;
      padding: 6px 16px;
    }
  }
  .avatar {
    margin: 0;
  }
  .menu-button {
    margin: 0;
  }
`;

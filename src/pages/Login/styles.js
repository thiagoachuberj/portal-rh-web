import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  > img {
    width: 220px;
    height: 150px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin: 30px 0;
  }

  a {
    color: #2c3e50;
    margin-top: 15px;
    font-size: 16px;
    font-weight: bold;
    transition: color 2s;

    &:hover {
      opacity: 0.8;
      color: #2c3e50;
    }
  }
`;

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
    margin: 40px 0;

    span {
      margin: 0 0 10px;
      color: #ff0000;
      align-self: flex-start;
    }

    input {
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #ffffff;
      margin: 0 0 10px;

      %::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #2c3e50;
      font-weight: bold;
      color: #ffffff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background-color 0.2s;

      &:hover {
        opacity: 0.8;
      }
    }
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

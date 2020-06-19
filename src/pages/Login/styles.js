import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background: #c1cdcd;
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
    margin-top: 30px;

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
      color: #fff;
      margin: 0 0 10px;

      %::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #7a67ee;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    a {
      color: #ffffff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;

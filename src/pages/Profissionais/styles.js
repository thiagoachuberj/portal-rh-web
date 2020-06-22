import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  h1 {
    font-size: 1.8em;
    text-align: center;
    margin-bottom: 40px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  width: 100%;
  max-width: 960px;
  border: 1px solid #cccccc;

  form {
    input {
      border-radius: 4px;
      border: 2px solid #232129;
      padding: 10px;

      & + input {
        margin-left: 8px;
        margin-top: 10px;
      }
    }

    input[name="nomeCompleto"] {
      width: 400px;
    }
    input[name="email"] {
      width: 300px;
    }
  }
`;


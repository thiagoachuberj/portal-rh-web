import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  margin: 0 auto;

  h1 {
    font-size: 1.8em;
    text-align: center;
    margin-bottom: 40px;
  }
`;

export const Content = styled.div`
  margin: 0 auto;

  width: 100%;
  max-width: 960px;
  border: 1px solid #cccccc;

  form {
    input {
      border-radius: 4px;
      border: 2px solid #232129;
      padding: 10px;
      width: 100%;
    }

    input [type='date'] {
      padding: 7px;
      border-radius: 4px;
      border: 2px solid #232129;
      width: 100%;
    }

    select {
      border-radius: 4px;
      border: 2px solid #232129;
      padding: 10px;
      background: #ff0000;
      width: 100%;
    }

   input [type='file'] {
      padding: 7px;
      border-radius: 4px;
      border: 2px solid #232129;
      width: 100%;
    }
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  /* height: 100vh; */
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

  form {
    /* input {
      border-radius: 4px;
      border: 2px solid #232129;
      padding: 10px;
      width: 100%;
    } */

    /* select {
      border-radius: 4px;
      border: 2px solid #232129;
      padding: 10px;
      background: #cccccc;
      width: 100%;
    } */

    /* input [type='date'] {
      padding: 0px;
      border-radius: 20px;
      border: 2px solid #232129;
      width: 100%;
    } */

    /* input [type='file'] {
      padding: 7px;
      border-radius: 4px;
      border: 2px solid #232129;
      width: 100%;
    } */
  }
`;

export const InputDate = styled.input.attrs({
  type: 'date',
})`
  padding: 7px;
  border-radius: 4px;
  border: 2px solid #232129;
  width: 100%;
`;

export const InputText = styled.input.attrs({
  type: 'text',
})`
  border-radius: 4px;
  border: 2px solid #232129;
  padding: 10px;
  width: 100%;
`;

export const InputEmail = styled.input.attrs({
  type: 'email',
})`
  border-radius: 4px;
  border: 2px solid #232129;
  padding: 10px;
  width: 100%;
`;

export const Select = styled.select`
  border-radius: 4px;
  border: 2px solid #232129;
  padding: 10px;
  background: #ffffff;
  width: 100%;

  > option {
    color: #000000;
    height: 40px;
    min-height: 40px;
    padding: 20px;
  }
`;

export const InputTelefone = styled.input.attrs({
  type: 'tel',
})`
  border-radius: 4px;
  border: 2px solid #232129;
  padding: 10px;
  width: 100%;
`;

export const InputNumero = styled.input.attrs({
  type: 'number',
})`
  border-radius: 4px;
  border: 2px solid #232129;
  padding: 10px;
  width: 100%;
`;

export const InputFile = styled.input.attrs({
  type: 'file',
})`
  padding: 7px;
  border-radius: 4px;
  border: 2px solid #232129;
  width: 100%;
  margin-top: 15px;
  background: #ffffff;
`;

export const BotaoEnviar = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  margin-top: 15px;
  background: #2c3e50;
  color: #ffffff;
  font-weight: bold;
  font-size: 17px;

  &:hover {
    opacity: 0.8;
    transition: 1s;
  }
`;

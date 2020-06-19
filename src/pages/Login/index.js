import React from 'react';
import * as Yup from 'yup';

import { Form, Input } from 'unform';
import { Container, Content } from './styles';
import { useAuth } from '../../context/AuthContext';

import logo from '../../assets/logoacordoagora.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

/* function initialState() {
  return { email: '', password: '' };
} */

export default function Login() {
  // const [values, setValues] = useState(initialState);
  const { signIn } = useAuth();

  function handleSubmit(data) {
    signIn({ email: data.email, password: data.password });
  }

  /* function handleOnChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  } */

  return (
    <Container>
      <Content>
        <img src={logo} alt="Portal RH" />

        <Form schema={schema} onSubmit={handleSubmit}>
          <Input type="email" name="email" placeholder="Digite seu E-mail" />

          <Input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />

          <button type="submit">Entrar</button>
        </Form>
      </Content>
    </Container>
  );
}

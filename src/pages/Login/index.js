import React, { useCallback } from 'react';
import { Form } from '@unform/web';

import * as Yup from 'yup';
import Input from '../../componentes/Input';
import { Container, Content } from './styles';
import { useAuth } from '../../context/AuthProvider';
import { Link } from 'react-router-dom';

import logo from '../../assets/logoacordoagora.png';

export default function Login() {
  const { signIn } = useAuth();

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Insira um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: Yup.string().required('A senha é obrigatória'),
  });

  const handleSubmit = useCallback(
    async (data) => {
      // signIn(data.email, data.password);
      await schema.validate(data, {abortEarly: false,});

      // signIn({ email: data.email, password: data.password });
    },
    [signIn],
  );

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

        <Link to="/esqueci-senha">Esqueci senha!</Link>
      </Content>
    </Container>
  );
}

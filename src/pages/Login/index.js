import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';

import * as Yup from 'yup';
import Input from '../../componentes/Input';
import Button from '../../componentes/Button';
import getValidationErrors from '../../util/getValidationErrors';

import { Container, Content } from './styles';
import { useAuth } from '../../context/AuthProvider';

import logo from '../../assets/logoacordoagora.png';

export default function Login() {
  const { signIn } = useAuth();
  const formRef = useRef(null);

  const handleSubmit = useCallback(
    async (data) => {
      try {
        formRef.current.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Insira um e-mail válido')
            .required('O e-mail é obrigatório'),
          password: Yup.string().required('A senha é obrigatória'),
        });

        // signIn(data.email, data.password);
        await schema.validate(data, {
          abortEarly: false,
        });

        signIn({ email: data.email, password: data.password });
      } catch (err) {
        const errors = getValidationErrors(err);

        if (formRef && formRef.current) {
          formRef.current.setErrors(errors);
        }
      }
    },
    [signIn],
  );

  return (
    <Container>
      <Content>
        <img src={logo} alt="Portal RH" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input type="email" name="email" placeholder="Digite seu E-mail" />

          <Input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />

          <Button type="submit">Entrar</Button>
        </Form>

        <Link to="/esqueci-senha">Esqueci senha!</Link>
      </Content>
    </Container>
  );
}

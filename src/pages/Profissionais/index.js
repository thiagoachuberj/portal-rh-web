import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import getValidationErrors from '../../util/getValidationErrors';
import { GridContainer, Row, Column } from '../../componentes/Grid';
import Input from '../../componentes/Input';
import Select from '../../componentes/Select';
import { Container, Content, BotaoEnviar } from './styles';

function Profissionais() {
  const formRef = useRef(null);
  const handleSubmit = useCallback(async (data) => {
    console.log(data);
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        nomeCompleto: Yup.string().required('Nome é obrigatório'),
        email: Yup.string()
          .email('Insira um email válido')
          .required('Nome é obrigatório'),
        cep: Yup.string().required('CEP é obrigatório'),
        endereco: Yup.string().required('Endereço é obrigatório'),
        complemento: Yup.string().required('Complemento é obrigatório'),
        estado: Yup.string().required('Estado é obrigatório'),
        bairro: Yup.string().required('Bairro é obrigatório'),
        telefone: Yup.string().required('Telefone é obrigatório'),
        dataInicio: Yup.string().required('Data Início é obrigatório'),
        projeto: Yup.string().required('Projeto é obrigatória'),
        area: Yup.string().required('Área é obrigatório'),
        salario: Yup.string().required('Salário é obrigatório'),
        role: Yup.string().required('Tipo de profissinal é obrigatório'),
      });

      // signIn(data.email, data.password);
      await schema.validate(data, {
        abortEarly: false,
      });

      // signIn({ email: data.email, password: data.password });
    } catch (err) {
      const errors = getValidationErrors(err);

      if (formRef && formRef.current) {
        formRef.current.setErrors(errors);
      }
    }
  }, []);

  return (
    <Container>
      <h1>Cadastro de profissionais</h1>

      <GridContainer>
        <Content>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Row style={{ marginTop: '15px' }}>
              <Column mobile="12" tablet="6" desktop="6">
                <Input name="nomeCompleto" placeholder="Nome Completo" />
              </Column>
              <Column mobile="12" tablet="4" desktop="4">
                <Input name="email" placeholder="E-mail" />
              </Column>
              <Column mobile="12" tablet="2" desktop="2">
                <Input
                  className="acertoInput"
                  type="number"
                  name="cep"
                  placeholder="CEP"
                />
              </Column>
            </Row>

            <Row style={{ marginTop: '15px' }}>
              <Column mobile="12" tablet="6" desktop="6">
                <Input name="endereco" placeholder="Endereço" />
              </Column>
              <Column mobile="12" tablet="3" desktop="3">
                <Input name="complemento" placeholder="Complemento" />
              </Column>
              <Column mobile="12" tablet="3" desktop="3">
                <Select name="estado">
                  <option value="0">Selecione</option>
                  <option value="1">Estados2</option>
                </Select>
              </Column>
            </Row>

            <Row style={{ marginTop: '15px' }}>
              <Column mobile="12" tablet="4" desktop="4">
                <Select name="bairro">
                  <option value="0">Bairro</option>
                </Select>
              </Column>
              <Column mobile="12" tablet="4" desktop="4">
                <Input
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  name="telefone"
                  placeholder="Telefone"
                />
              </Column>
              <Column mobile="12" tablet="4" desktop="4">
                <Input
                  type="date"
                  name="dataInicio"
                  placeholder="Data Início"
                />
              </Column>
            </Row>

            <Row style={{ marginTop: '15px' }}>
              <Column mobile="12" tablet="4" desktop="4">
                <Input type="date" name="dataFim" placeholder="Data Início" />
              </Column>
              <Column mobile="12" tablet="4" desktop="4">
                <Select name="projeto">
                  <option value="0">Selecionar</option>
                </Select>
              </Column>
              <Column mobile="12" tablet="4" desktop="4">
                <Select name="area">
                  <option value="0">Selecionar</option>
                </Select>
              </Column>
            </Row>

            <Row style={{ marginTop: '15px' }}>
              <Column mobile="12" tablet="4" desktop="4">
                <Select name="cargo">
                  <option value="0">Selecionar</option>
                </Select>
              </Column>
              <Column mobile="12" tablet="4" desktop="4">
                <Input
                  name="salario"
                  type="number"
                  placeholder="Salário (R$)"
                />
              </Column>
              <Column mobile="12" tablet="4" desktop="4">
                <Select name="role">
                  <option value="0">Selecionar</option>
                </Select>
              </Column>
            </Row>

            <Row>
              <Column>
                <Input type="file" name="curriculo" />
              </Column>
            </Row>

            <Row>
              <Column>
                <BotaoEnviar>Salvar</BotaoEnviar>
              </Column>
            </Row>
          </Form>
        </Content>
      </GridContainer>
    </Container>
  );
}

export default Profissionais;

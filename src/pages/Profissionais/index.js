import React from 'react';
import { Form } from '@unform/web';

import { GridContainer, Row, Column } from '../../componentes/Grid';
import Input from '../../componentes/Input';
import { Container, Content, InputText, InputDate, Select, InputEmail, InputTelefone,
  InputFile, InputNumero, BotaoEnviar } from './styles';

function Profissionais() {

  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <Container>
      <h1>Cadastro de profissionais</h1>

      <GridContainer>
        <Content>
            <Form onSubmit={handleSubmit}>
              <Row style={{marginTop: '15px'}}>
                <Column mobile="12" tablet="6" desktop="6">
                  <Input name="nomeCompleto" placeholder="Nome Completo" />
                </Column>
                <Column mobile="12" tablet="4" desktop="4">
                  <Input name="email" placeholder="E-mail" />
                </Column>
                <Column mobile="12" tablet="2" desktop="2">
                  <Input name="cep" placeholder="CEP" />
                </Column>
              </Row>

              <Row style={{marginTop: '15px'}}>
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

              <Row style={{marginTop: '15px'}}>
                <Column mobile="12" tablet="4" desktop="4">
                  <Select name="bairro">
                    <option value="0">Bairro</option>
                  </Select>
                </Column>
                <Column mobile="12" tablet="4" desktop="4">
                  <Input pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" name="telefone" placeholder="Telefone" />
                </Column>
                <Column mobile="12" tablet="4" desktop="4">
                  <Input name="dataInicio" placeholder="Data Início" />
                </Column>
              </Row>

              <Row style={{marginTop: '15px'}}>
                <Column mobile="12" tablet="4" desktop="4">
                  <Input name="dataFim" />
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

              <Row style={{marginTop: '15px'}}>
                <Column mobile="12" tablet="4" desktop="4">
                  <Select name="cargo">
                    <option value="0">Selecionar</option>
                  </Select>
                </Column>
                <Column mobile="12" tablet="4" desktop="4">
                  <InputNumero name="salario" placeholder="Salário (R$)" />
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

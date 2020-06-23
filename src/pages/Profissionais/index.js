import React from 'react';

import { GridContainer, Row, Column } from '../../componentes/Grid';
import { Container, Content } from './styles';

function Profissionais() {
  return (
    <Container>
      <h1>Cadastro de profissionais</h1>

      <Content>
        <form>
          <GridContainer>
            <Row>
              <Column mobile="12" tablet="6" desktop="6">
                <input type="text" name="nomeCompleto" placeholder="Nome Completo" />
              </Column>
              <Column mobile="12" tablet="4" desktop="4">
                <input type="email" name="email" placeholder="E-mail" />
              </Column>
              <Column mobile="12" tablet="2" desktop="2">
                <input type="text" name="cep" placeholder="CEP" />
              </Column>
            </Row>

            <Row>
              <Column mobile="12" tablet="6" desktop="6">
                <input type="text" name="endereco" placeholder="Endereço" />
              </Column>
              <Column mobile="12" tablet="3" desktop="3">
                <input type="text" name="complemento" placeholder="Complemento" />
              </Column>
              <Column mobile="12" tablet="3" desktop="3">
                <select name="estado">
                  <option>Estados</option>
                </select>
              </Column>
            </Row>

            <Row>
              <Column mobile="12" tablet="4" desktop="4">
                <select name="bairro">
                  <option value="0">Bairro</option>
                </select>
              </Column>
              <Column mobile="12" tablet="4" desktop="4">
                <input type="telefone" name="telefone" placeholder="Telefone" />
              </Column>
              <Column mobile="12" tablet="4" desktop="4">
                <input type="date" name="dataInicio" placeholder="Data Início" />
              </Column>
            </Row>

            <Row>
              <Column mobile="12" tablet="4" desktop="4">
                <input type="date" name="dataFim" />
              </Column>
              <Column mobile="12" tablet="4" desktop="4">
                <select name="projeto">
                  <option value="0">Selecionar</option>
                </select>
              </Column>
              <Column mobile="12" tablet="4" desktop="4">
                <select name="area">
                  <option value="0">Selecionar</option>
                </select>
              </Column>
            </Row>

            <Row>
              <Column mobile="12" tablet="4" desktop="4">
                <select name="cargo">
                  <option value="0">Selecionar</option>
                </select>
              </Column>
              <Column mobile="12" tablet="4" desktop="4">
                <input type="number" name="salario" placeholder="Salário (R$)" />
              </Column>
              <Column mobile="12" tablet="4" desktop="4">
                <select name="role">
                  <option value="0">Selecionar</option>
                </select>
              </Column>
            </Row>

            <Row>
              <Column>
                <input type="file" name="curriculo" />
              </Column>
            </Row>

            <Row>
              <Column>
                <button type="button">Salvar</button>
              </Column>
            </Row>
          </GridContainer>
        </form>
      </Content>
    </Container>
  );
}

export default Profissionais;

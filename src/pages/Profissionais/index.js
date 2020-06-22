import React from 'react';

import { GridContainer, Row, Column } from '../../componentes/Grid';
import { Container } from './styles';

function Profissionais() {
  return (
    <GridContainer>
      <Row>
        <Column>
          <span>Cadastro:</span>
        </Column>
      </Row>
      <form>
        <input type="text" name="nomeCompleto" />
        <input type="email" name="email" />
        <input type="telefone" name="telefone" />

        <br />
        <br />

        <input type="text" name="endereco" />
        <input type="date" name="dataInicio" />
        <input type="date" name="dataFim" />

        <br />
        <br />

        <select name="projeto">
          <option value="0">Selecionar</option>
        </select>
        <select name="area">
          <option value="0">Selecionar</option>
        </select>
        <select name="cargo">
          <option value="0">Selecionar</option>
        </select>
        <input type="number" name="salario" />
        <select name="role">
          <option value="0">Selecionar</option>
        </select>

        <br />
        <br />

        <input type="file" name="curriculo" />

        <br />
        <br />

        <button type="button">Salvar</button>
      </form>
    </GridContainer>
  );
}

export default Profissionais;

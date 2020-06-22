import React from 'react';

import { Container, Content } from './styles';

function Profissionais() {
  return (
    <Container>
      <h1>Cadastro de profissionais</h1>

      <Content>
        <form>
          <input type="text" name="nomeCompleto" placeholder="Nome Completo" />
          <input type="email" name="email" placeholder="E-mail"/>
          <input type="text" name="cep" placeholder="CEP"/>
          <br/>
          <input type="text" name="endereco" placeholder="Endereço" />
          <input type="telefone" name="telefone" placeholder="Telefone" />
          <input type="date" name="dataInicio" placeholder="Data Início"/>
          <input type="date" name="dataFim" />
          <br/>
          <select name="projeto">
            <option value="0">Selecionar</option>
          </select>
          <select name="area">
            <option value="0">Selecionar</option>
          </select>
          <select name="cargo">
            <option value="0">Selecionar</option>
          </select>
          <input type="number" name="salario" placeholder="Salário (R$)" />
          <select name="role">
            <option value="0">Selecionar</option>
          </select>

          <input type="file" name="curriculo" />

          <button type="button">Salvar</button>
        </form>

      </Content>
    </Container>
  );
}

export default Profissionais;

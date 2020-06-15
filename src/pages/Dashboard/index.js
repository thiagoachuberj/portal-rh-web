import React from 'react';

import { Titulo } from './styles';
import { Row, Column, Container } from '../../componentes/Grid';
import Card from '../../componentes/Card';

function Dashboard() {
  return (
    <>
      <Row>
        <Column>
          <Titulo>Dashboard</Titulo>
        </Column>
      </Row>
      <Row>
        <Column>
          <Container>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Container>
        </Column>
      </Row>
    </>
  );
}

export default Dashboard;

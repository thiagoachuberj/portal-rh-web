import React from 'react';

import { Container, Titulo } from './styles';
import { Row, Column, GridContainer } from '../../componentes/Grid';
import Card from '../../componentes/Card';

function Dashboard() {
  return (
    <Container>
      <Row>
        <Column>
          <Titulo>Dashboard</Titulo>
        </Column>
      </Row>
      <Row>
        <Column>
          <GridContainer>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </GridContainer>
        </Column>
      </Row>
    </Container>
  );
}

export default Dashboard;

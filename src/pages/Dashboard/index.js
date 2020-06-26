import React from 'react';

import { Row, Column, GridContainer } from '../../componentes/Grid';
import { Container, Titulo, Content } from './styles';
import Card from '../../componentes/Card';

function Dashboard() {
  return (
    <Container>
      <Titulo>Dashboard</Titulo>
      <Content>
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
      </Content>
    </Container>
  );
}

export default Dashboard;

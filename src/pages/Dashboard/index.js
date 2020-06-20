import React from 'react';

import { Container, Titulo } from './styles';
import { Row, Column, GridContainer } from '../../componentes/Grid';
import Card from '../../componentes/Card';
import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer';

function Dashboard() {
  return (
    <Container>
      <Header />
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

      <Footer/>
    </Container>
  );
}

export default Dashboard;

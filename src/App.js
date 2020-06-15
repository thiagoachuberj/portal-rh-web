import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/global';
import { Container } from './componentes/Grid';
import Header from './componentes/Header';
import Routes from './routes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Container>
          <Header />
          <Routes />
        </Container>
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}

export default App;

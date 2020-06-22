import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/global';
import Routes from './routes';

import { AuthProvider } from './context/AuthProvider';
import Footer from './componentes/Footer';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <Footer />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;

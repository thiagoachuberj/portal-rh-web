import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/global';
import Routes from './routes';

import { AuthContext } from './context/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <AuthContext>
        <Routes />
      </AuthContext>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;

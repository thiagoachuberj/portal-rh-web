import React from 'react';
import { Switch } from 'react-router-dom';

import CustomRoute from './Routes';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Profissionais from '../pages/Profissionais';
import Perfil from '../pages/Perfil';
import EsqueciSenha from '../pages/EsqueciSenha';

function Routes() {
  return (
    <Switch>
      <CustomRoute path="/" exact component={Login} />
      <CustomRoute path="/esqueci-senha" component={EsqueciSenha} />
      <CustomRoute path="/dashboard" component={Dashboard} isPrivate />
      <CustomRoute path="/perfil" exact component={Perfil} isPrivate/>
      <CustomRoute path="/profissionais" component={Profissionais} isPrivate />
    </Switch>
  );
}

export default Routes;

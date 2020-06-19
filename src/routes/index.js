import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Profissionais from '../pages/Profissionais';
import Perfil from '../pages/Perfil';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/perfil" exact component={Perfil} />
      <Route path="/profissionais" component={Profissionais} />
    </Switch>
  );
}

export default Routes;

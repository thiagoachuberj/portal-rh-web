import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Profissionais from '../pages/Profissionais';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/profissionais" component={Profissionais} />
    </Switch>
  );
}

export default Routes;

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';
import { render } from '@testing-library/react';

function CustomRoute({ isPrivate, component: Component, ...rest }) {
  const { isAutenticated } = useAuth();

  return (
    <Route
      {...rest}
      render={() => {
        return isPrivate === isAutenticated
          ? (<Component />)
          : (<Redirect to={{ pathname: isPrivate ? '/' : '/dashboard' }} />);
      }}
    />
  }
}

export default CustomRoute;

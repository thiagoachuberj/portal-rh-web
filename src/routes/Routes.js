import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from '../context/AuthProvider';

function CustomRoute({ isPrivate, component: Component, ...rest }) {
  const { isAuthenticated } = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isPrivate === isAuthenticated ? (
          <Component />
        ) : (
            <Redirect
              to={{
                pathname: isPrivate ? '/' : '/dashboard',
                state: { from: location },
              }}
            />
          );
      }}
    />
  );
}

export default CustomRoute;

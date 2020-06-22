import React, {
  createContext,
  useState,
  useContext,
  useCallback,
} from 'react';

// import api from  '../services/api';
// import history from '../history';

const Context = createContext();

function AuthProvider({ children }) {
  const [authData, setAuthData] = useState(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');

    if(token && user) {
      return {token, user: JSON.parse(user), isAuthenticated: true};
    }

    return {};
  });

  const signIn = useCallback(async ({email, password}) => {
      console.log(`${email} - ${password}`);

      //const response = await api.post('/', {email, password});

      const token = '134afad9faajdfh984198341asf8afa';
      const user = {nome: 'Thiago Silva', email: 'thiago.achuberj@gmail.com'};
      const isAuthenticated = true;

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      // api.default.headers.Authorization = `Bearer ${authData.token}`;
      setAuthData({token, user, isAuthenticated});
  }, []);

  const signOut = useCallback(() => {
    //localStorage.removeItem('token');
    setAuthData({});
  }, []);

  return (
    <Context.Provider
      value={{
        user: authData.user,
        isAuthenticated: authData.isAuthenticated,
        signIn,
        signOut,
      }}
    >
      {children}
    </Context.Provider>
  );
}

function useAuth() {
  const context = useContext(Context);

  if (!context) {
    throw new Error('useAuth must be used within an AuthContext.');
  }

  return context;
}

export { AuthProvider, useAuth };

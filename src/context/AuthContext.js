import React, {
  createContext,
  useState,
  useContext,
  useCallback,
  useEffect
} from 'react';

// import history from '../history';

const Context = createContext();

const authData = {
  token: '',
  /*  user: {},
   isAutenticated: false, */
};

function AuthContext({ children }) {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    // const token = localStorage.getItem(JSON.parse('token'));
    const token = localStorage.getItem('token');

    console.log(auth);

    if (token) {
      // api.default.headers.Authorization = `Bearer ${authData.token}`;
      console.log(token);
    }

    console.log(null);
  }, []);

  const signIn = useCallback(
    async ({ email, password }) => {
      console.log(`${email} - ${password}`);

      await setAuth(true);

      console.log(auth);
      localStorage.setItem('token', auth.token);
      // localStorage.setItem('token', JSON.stringify(authData.token));
      // api.default.headers.Authorization = `Bearer ${authData.token}`;
    }, [],
  );

  const signOut = useCallback(() => {
    localStorage.removeItem('token');

    setAuth({});
  }, []);

  return (
    <Context.Provider
      value={{
        user: 'auth.user',
        isAutenticated: 'auth.isAutenticated',
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

export { AuthContext, useAuth };

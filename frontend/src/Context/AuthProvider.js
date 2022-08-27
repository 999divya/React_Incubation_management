import { createContext, useState } from "react";

const AuthContext = createContext({});
//the children represents those componennts that are inside the
//AuthProvider
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

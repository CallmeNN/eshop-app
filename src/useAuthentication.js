import React, { useState, createContext } from "react";
import { authenticationService } from "./services/auth";


const AuthCtx = createContext();

const useAuthentication = (history, location) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const login = async({email, password}) =>{
    try {
      const data = await authenticationService.signin({username:email, password})
      setUser(data);
      setError(null)
    } catch (error) {
      setError(error);
    }
  }
  
  const logout = () => {
    setUser(null);
    setError(null);
  };

  return {
    AuthCtx,
    AuthProvider: ({ children }) => (
      <AuthCtx.Provider value={{ error, user, login, logout }}>
        {children}
      </AuthCtx.Provider>
    ),
  };
};

export default useAuthentication;

import React, { useState, createContext } from "react";
import { authenticationService } from "./services/auth";


const AuthCtx = createContext();

const useAuthentication = (history, location) => {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")));
  const [error, setError] = useState(null);

  const login = async({email, password}) =>{
    try {
      const data = await authenticationService.signin({username:email, password})
      localStorage.setItem("user", JSON.stringify(data));
      setUser(data);
      setError(null)
    } catch (error) {
      setError(error);
    }
  }
  
  const logout = () => {
    localStorage.setItem("user", null);
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

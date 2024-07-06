import React from "react";
import { Navigate } from "react-router-dom";

const Protected = ({ user, children }) => {
  return user ? <>{children}</> : <Navigate to="/login" />;
};

export default Protected;

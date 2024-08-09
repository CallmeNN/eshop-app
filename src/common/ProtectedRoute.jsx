import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ validate, fallbackRoute, children }) => {
  const isValid = validate();
  if (!isValid) {
    // Redirect to the fallback route if the validation fails
    return <Navigate to={fallbackRoute} />;
  }
  // If the validation passes, render the children components
  return <>{children}</>;
};

export default ProtectedRoute;

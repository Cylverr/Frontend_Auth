import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuth = localStorage.getItem("authToken");

  if (!isAuth) {
    return <Navigate to="/signin" replace />;
  }

  return children;
};

export default ProtectedRoute;

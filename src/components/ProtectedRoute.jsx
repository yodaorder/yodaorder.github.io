import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

  const loggedIn = localStorage.getItem("staffLoggedIn");

  if (loggedIn !== "true") {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;

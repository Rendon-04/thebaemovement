import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAuthenticated =
    localStorage.getItem("bae_admin_session") === "true";
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }
  return children;
}

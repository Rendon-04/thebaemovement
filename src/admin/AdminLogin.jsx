import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

const ADMIN_EMAIL =
  import.meta.env.VITE_ADMIN_EMAIL || "admin@baemovement.com";
const ADMIN_PASSWORD =
  import.meta.env.VITE_ADMIN_PASSWORD || "baemovement2024";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      localStorage.setItem("bae_admin_session", "true");
      navigate("/admin/dashboard");
    } else {
      setError("Invalid email or password. Please try again.");
    }
  }

  return (
    <div className="admin-login-page">
      <div className="admin-login-card">
        <div className="admin-login-logo">
          <p className="admin-login-brand">BAE Movement</p>
          <span className="admin-login-badge">ADMIN</span>
        </div>
        <h2 className="admin-login-heading">Sign In</h2>
        <form onSubmit={handleSubmit} className="admin-login-form">
          {error && <p className="admin-login-error">{error}</p>}
          <div className="admin-form-group">
            <label htmlFor="admin-email">Email</label>
            <input
              id="admin-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@baemovement.com"
              required
              autoComplete="email"
            />
          </div>
          <div className="admin-form-group">
            <label htmlFor="admin-password">Password</label>
            <input
              id="admin-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              autoComplete="current-password"
            />
          </div>
          <button type="submit" className="admin-login-btn">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

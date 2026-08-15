import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { login } from "../services/auth";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    try {
      await login(email, password);

      navigate("/admin");

    } catch (err) {
      setError("Invalid email or password");
    }
  }


  return (
    <div className="login-container">

      <h1>Riftline Admin Login</h1>

      <p>
        Staff access only.
      </p>


      <div className="card">

        <form onSubmit={handleLogin}>

          <label>
            Email
          </label>

          <input
            type="email"
            placeholder="Staff email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />


          <label>
            Password
          </label>

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />


          {error && (
            <p>
              {error}
            </p>
          )}


          <button className="btn" type="submit">
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;
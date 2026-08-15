import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const staffEmails = [
    "contact.me.for.question@gmail.com"
  ];

  const staffPassword = "vR7!qL9#X2@pM6$zK8^dF4&wN1";


  function handleLogin(e) {
    e.preventDefault();

    const cleanEmail = email.toLowerCase().trim();

    const validEmail = staffEmails.includes(cleanEmail);
    const validPassword = password === staffPassword;


    if (validEmail && validPassword) {

      localStorage.setItem(
        "staffLoggedIn",
        "true"
      );

      localStorage.setItem(
        "staffEmail",
        cleanEmail
      );

      setError("");

      navigate("/admin", { replace: true });

    } else {

      setError("Invalid staff email or password.");

    }
  }


  return (
    <div className="login-page">

      <div className="login-box">

        <h1>
          Staff Login
        </h1>


        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Staff Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
          />


          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
          />


          <button type="submit">
            Login
          </button>

        </form>


        {error && (
          <p>
            {error}
          </p>
        )}

      </div>

    </div>
  );
}


export default Login;

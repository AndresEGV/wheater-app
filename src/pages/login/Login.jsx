import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [errPass, setErrPass] = useState(null);

  const handleClick = (e) => {
    e.preventDefault();
    const emailRegex = /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i;
    const passwordRegex =
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!emailRegex.test(email) || !passwordRegex.test(password)) {
      setError("Email inválido, porfavor intente nuevamente");
      setErrPass(
        "Password debe contener 1 letra mayuscula, una minuscula, numeros y caracter especial"
      );
      return;
    }
    if (!password.trim()) {
      setErrPass(
        "Password debe contener minimo 6 carácteres, 1 letra mayuscula, una minuscula, numeros y caracter especial"
      );
      return;
    }
    history.push("/pronostico-por-region");
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Wheater App</h1>

      <input
        style={{ padding: 10, marginBottom: 5 }}
        type="text"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      {error ? (
        <span style={{ marginBottom: 20, color: "red" }}>{error}</span>
      ) : null}
      <input
        style={{ padding: 10, marginBottom: 20 }}
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      {errPass ? (
        <span style={{ marginBottom: 20, color: "red" }}>{errPass}</span>
      ) : null}
      <button onClick={handleClick} style={{ padding: 10, width: 100 }}>
        Login
      </button>
    </div>
  );
};

export default Login;

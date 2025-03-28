import React, { useContext, useState } from "react";
import { AuthContext } from "../components/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const success = await login(username, password);
    if (success) navigate("/profile");
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <input
        type="text"
        className="form-control my-2"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        className="form-control my-2"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;

// import React, { useContext, useState } from "react";
// import { AuthContext } from "../components/AuthContext";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const { login } = useContext(AuthContext);
//   const [username, setUsername] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     login(username);
//   };

//   return (
//     <div>
//       <h1>Login Page</h1>
//       <input
//         type="text"
//         placeholder="Enter Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// }

// export default Login;

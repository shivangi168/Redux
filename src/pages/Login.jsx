import React, { useContext, useState } from "react";
import { AuthContext } from "../components/AuthContext";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";

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
    <div >
      <div className="card shadow-lg p-4 d-flex flex-row" style={{ borderRadius: "20px", maxWidth: "800px" }}>
        <div className="p-4" style={{ flex: 1 }}>
          <h2 className="mb-4">Welcome</h2>
          <p>Blandit libero volutpat sed cras ornare arcu dui. Accumsan in nisl nisi scelerisque eu.</p>
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
          <button className="btn btn-primary w-100 mb-3" onClick={handleLogin}>
            Login
          </button>
          <p className="text-center">Or sign up with</p>
      
          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-outline-secondary">
              <FaGoogle size={24} />
            </button>
            <button className="btn btn-outline-secondary">
              <FaFacebook size={24} />
            </button>
            <button className="btn btn-outline-secondary">
              <FaApple size={24} />
            </button>
          </div>
        </div>
        <div
          className="d-none d-md-flex align-items-center justify-content-center bg-primary text-white"
          style={{ flex: 1, borderRadius: "20px", padding: "20px" }}
        >
          <div className="text-center">
            <h1>Make a Dream.</h1>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna."
            </p>
            <p>- Waleed Lozano, Product Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

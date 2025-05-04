import React, { useContext, useState } from "react";
import { AuthContext } from "../components/AuthContext";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import CityStateManager from '../components/cityStateManager';


function Login() {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleAuth = async () => {
    const payload = {
      password,
      ...(username && { username }),
      ...(email && { email })
    };
  
    const url = isLogin ? "http://localhost:5000/api/login" : "http://localhost:5000/api/signup";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
      const data = await response.json();
  
      if (response.ok) {
        // Call the login function from AuthContext for state update
        await login(username, password);
        console.log(isLogin ? "Login successful!" : "Signup successful!");
        setTimeout(() => {
          navigate("/dashboard");
        }, 100);
      } else {
        alert(data.message || "Something went wrong!");
      }
    } catch (error) {
      alert("Network error! Please try again later.");
    }
  };
  

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      <CityStateManager/>
      <div className="card shadow-lg p-4 d-flex flex-row" style={{ borderRadius: "20px", maxWidth: "800px" }}>
        <div className="p-4" style={{ flex: 1 }}>
          <h2 className="mb-4">{isLogin ? "Welcome Back" : "Create an Account"}</h2>
          <p>{isLogin ? "Login to continue" : "Sign up to get started"}</p>
          {!isLogin && (
            <input
              type="email"
              className="form-control my-2"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          )}
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
          <button className="btn btn-primary w-100 mb-3" onClick={handleAuth}>
            {isLogin ? "Login" : "Sign Up"}
          </button>
          <p className="text-center">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button className="btn btn-link p-0" onClick={toggleForm}>
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
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
  className="d-none d-md-flex align-items-center justify-content-center text-white"
  style={{
    flex: 1,
    borderRadius: "20px",
    padding: "20px",
    backgroundImage: "url(/home.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white"
  }}
>
  <div className="text-center">
    <h1>Make a Dream.</h1>
    {/* <p>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
    </p> */}
    {/* <p>- Waleed Lozano, Product Designer</p> */}
  </div>
</div>

      </div>
    </div>
  );
}

export default Login;

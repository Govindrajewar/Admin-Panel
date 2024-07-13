import "../style/Login.css";
import loginImg from "../assets/login.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/register");
  };

  return (
    <div className="login">
      <div className="login-img">
        <img src={loginImg} alt="" className="image" />
      </div>
      <div className="login-form">
        <div className="main-header">Login</div>

        <label htmlFor="email">Email address</label>
        <input type="email" id="email" name="email" placeholder="Enter Email" />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter Password"
        />

        <button className="submit-btn primary">Submit</button>

        <p className="paragraph">
          Don't have an account? don't worry{" "}
          <a onClick={handleSignup}>Signup</a>
        </p>
      </div>
    </div>
  );
}

export default Login;

import "../style/Welcome.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/register");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="welcome">
      <div className="header">Welcome</div>
      <div className="copyright">
        Admin Panel by <span className="creator">Govind Rajewar</span>
      </div>
      <div className="buttons">
        <Button
          as="input"
          className="primary"
          type="submit"
          value="Login"
          onClick={handleLogin}
        />{" "}
        <Button
          as="input"
          className="primary"
          type="submit"
          value="Signup"
          onClick={handleSignup}
        />{" "}
      </div>
    </div>
  );
}

export default Welcome;

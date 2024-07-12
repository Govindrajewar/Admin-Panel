import "../style/Welcome.css";
import Button from "react-bootstrap/Button";

function Welcome() {
  return (
    <div className="welcome">
      <div className="header">Welcome</div>
      <div className="copyright">
        Admin Panel by <span className="creator">Govind Rajewar</span>
      </div>
      <div className="buttons">
        <Button as="input" className="primary" type="submit" value="Login" />{" "}
        <Button as="input" className="primary" type="submit" value="Signup" />{" "}
      </div>
    </div>
  );
}

export default Welcome;

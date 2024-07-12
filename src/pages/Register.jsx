import "../style/Register.css";
import registerImg from "../assets/register.png";

function Register() {
  return (
    <div className="register">
      <div className="register-img">
        <img src={registerImg} alt="" className="image" />
      </div>
      <div className="register-form">
        <div className="main-header">Sign Up</div>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Enter First Name"
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Enter Last Name"
        />

        <label htmlFor="email">Email address</label>
        <input type="email" id="email" name="email" placeholder="Enter Email" />
        <p>We'll never share your email with anyone else.</p>

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter Password"
        />
        <label htmlFor="adminCode">Admin Code</label>
        <input
          type="text"
          name="adminCode"
          id="adminCode"
          placeholder="Only for admin"
          disabled
        />

        <button className="submit-btn">Submit</button>

        <p className="paragraph">
          Already have an account? <a href="#">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Register;

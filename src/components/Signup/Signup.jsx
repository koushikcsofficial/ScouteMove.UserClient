import "./Signup.css";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <Grid container className="container">
      <Grid item xs={12} sm={6}>
        <h5 className="greeting-heading">Create Account</h5>
        <p className="greeting-text">
          Lorem ipsum dolor sit amet consectetur. Nec vestibulum <br /> eget
          duis quam leo nec. Lorem ipsum dolor sit amet <br /> consectetur.
        </p>
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="name">First Name</label>
          <input type="text" placeholder="Example@email.com" />

          <label htmlFor="name">Last Name</label>
          <input type="text" placeholder="At least 8 characters" />

          <label htmlFor="date">Date of Birth</label>
          <input type="date" placeholder="At least 8 characters" />

          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Example@email.com" />

          <label htmlFor="password">Password</label>
          <input type="password" placeholder="At least 8 characters" />

          <label htmlFor="password">Confirm Password</label>
          <input type="password" placeholder="At least 8 characters" />
          <button className="btn">Register Now</button>
          <div className="or">
            <p className="line"></p>
            or
            <p className="line"></p>
          </div>
          <button className="btn-social">
            <img src="/img/Google.svg" alt="" className="google" />
            Sign in with Google
          </button>
          <button className="btn-social">
            <img src="/img/Facebook.svg" alt="" />
            Sign in with Facebook
          </button>
          <p className="end-text">
            Already have an account?
            <Link to="/" className="links">
              Login
            </Link>
          </p>
        </form>
      </Grid>
      <Grid item xs={12} sm={6}>
        <img
          src="/img/signup.png"
          alt=""
          style={{
            width: "590px",
            height: "970px",
            flexShrink: "0",
            borderRadius: "20px",
            marginRight: "200px",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Signup;

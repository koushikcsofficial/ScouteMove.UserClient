import "./Login.css";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Signup from "../Signup/Signup";

const Login = () => {
  return (
    <Grid container className="container">
      <Grid item xs={12} sm={6}>
        <h5 className="greeting-heading">Welcome Back 👋</h5>
        <p className="greeting-text">
          Today is a new day. It's your day. You shape it. <br />
          Sign in to start managing your projects.
        </p>
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="email">Email</label>
          <input type="text" placeholder="Example@email.com" />
          <label htmlFor="password">Password</label>
          <input type="text" placeholder="At least 8 characters" />
          <p className="forget">
            <Link to="/" className="forgetLink links">
              Forgot Password?
            </Link>
          </p>
          <Link to="/home" className="links">
            <button className="btn">Sign in</button>
          </Link>
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
            Don't you have an account?{" "}
            <Link to="/signup" className="links">
              Sign up
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
            height: "auto",
            flexShrink: "0",
            borderRadius: "20px",
            marginRight: "200px",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Login;

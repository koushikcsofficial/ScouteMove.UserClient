import React, { useState } from "react";
import "./Header.css";
import { Cancel, Menu } from "@mui/icons-material";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="p-5">
        <div className="left">
          <div className="logo">
            <img src="/img/logo.png" alt="logo" />
          </div>
          <nav className={`${open ? "block" : ""}`}>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Store</a>
              </li>
              <Cancel className="cancelbtn" onClick={() => setOpen(false)} />
            </ul>
          </nav>
        </div>
        <div className={`right ${open ? "block" : ""}`}>
          <a href="/" className="login">
            Login
          </a>
          <div className="signup"> <a href="/signup" className="login">
            Signup
          </a></div>
        </div>
        <Menu className="menubtn" onClick={() => setOpen(true)} />
      </header>
    </>
  );
};

export default Header;

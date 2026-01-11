import React from "react";
import "./Login.scss";
import Email from "../images/Vector (4).png"
import Lock from "../images/Vector (5).png"
import Eye from "../images/Group 1000003230.png"
import Logo from "../images/WhatsApp Image 2024-08-02 at 18.39.36_5327e5b2 2.png"
import { useNavigate } from 'react-router-dom';


const Login: React.FC = () => {

      const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to another route
    navigate('/dashboar-layout');
  };

  return (
    <div className="login-page">
      <div className="left-panel">
        <div className="logo-section">
          <img src={Logo} alt="E-Quran Logo" />
        </div>
      </div>

      <div className="right-panel">
        <div className="language-selector">
          <span>Language</span>
          <span className="divider">|</span>
          <span className="active-lang">English ⌄</span>
        </div>

        <div className="login-form">
          <h2>Welcome Back</h2>
          <p>Login to continue</p>

          <form>
            <label>Email</label>
            <div className="input-group">
                 <img src={Email} className="icon" alt="" />
              <input type="email" placeholder="Email" />
            </div>

            <label>Password</label>
            <div className="input-group">
              <img src={Lock} className="icon" alt="" />
              <input type="password" placeholder="Password" />
             <img src={Eye} className="icon" alt="" />
            </div>

            <div className="options">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#">Forgot Password?</a>
            </div>

            <button onClick={handleClick} type="submit">Login</button>
   
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

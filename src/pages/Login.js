import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "../styles/login.css";

const LoginPage = () => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');

  const handlesubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

      if (!storedUser) {
        alert("No user found! Please sign up first.");
        return;
      }

      if (storedUser.username === username && storedUser.password === password) {
      alert("Login Successful 🎉");

      // ✅ Save login session
      localStorage.setItem("loggedInUser", username);

      // ✅ Redirect to dashboard
      // navigate("/hero");
    } else {
      alert("Invalid credentials ❌");
    }
  };

  return (
    <section className="login-section">
      <form className="login-form" onSubmit={handlesubmit}>

        <h2 className="title">Login</h2>

        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}          // <--- IMPORTANT
            onChange={(e) => setusername(e.target.value)}
            placeholder="Email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}          // <--- IMPORTANT
            onChange={(e) => setpassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>

        <button type="submit" className="login-btn">
          Login
        </button>

        <p>Don't have an account? <a href="/signup">Sign Up</a></p>

      </form>
    </section>
  );
};

export default LoginPage;

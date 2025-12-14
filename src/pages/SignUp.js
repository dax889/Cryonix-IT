import React, { useState } from "react";
import "../styles/signup.css";


const SignUpPage = () => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');

  const handlesubmit = (e) => {
    e.preventDefault();

    const userData = { username, password };
    localStorage.setItem("user", JSON.stringify(userData));

    alert("Signup successful!");

    // Reset fields correctly
    setusername('');
    setpassword('');
  };

  return (
    <section className="signup-section">
      <form className="signup-form" onSubmit={handlesubmit}>

        <h2 className="title">SignUp</h2>

        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setusername(e.target.value)}
          placeholder="Email"
          required
          />
        </div>

        <div className="form-group">
          <label htmlFor="username">Password:</label>
          <input
          type="text"
          id="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          placeholder="Password"
          required
          />
        </div>
        
        <button type="submit" className="signup-btn">
          SignUp
        </button>
        <p>You have already an account ?  <a href="/login">Login</a></p>
      </form>
    </section>
  );
}
export default SignUpPage;
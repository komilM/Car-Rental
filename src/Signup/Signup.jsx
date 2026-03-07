import React from 'react'
import "./Signup.css"
import { useNavigate } from 'react-router-dom';


const Signup = () => {

    const navigate = useNavigate();

  return (
    <div>
      <div className="signup-container">
      <div className="signup-card">
        <h2>Sign Up</h2>

        <form>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />

          <button onClick={() => navigate(`/details`)}>Create Account</button>
        </form>

        <p className="login-text">
          Already have an account? <span>Login</span>
        </p>
      </div>
    </div>
    </div>
  )
}

export default Signup

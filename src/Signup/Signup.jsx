import React, { useState } from 'react'
import "./Signup.css"
import { useNavigate } from 'react-router-dom';


const Signup = () => {

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate("/details", {
            state: {
                name: name,
                email: email
            }
        });
    };

    return (
        <div>
            <div className="signup-container">
                <div className="signup-card">
                    <h2>Sign Up</h2>

                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Full Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)} />
                        <input type="email" placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input type="password" placeholder="Password" />
                        <input type="password" placeholder="Confirm Password" />

                        <button type="submit">Create Account</button>
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

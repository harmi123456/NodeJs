import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

export default function SignIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const signIn = async (e) => {

    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    const response = await axios.post("http://localhost:4000/Login", { email, password })

    if (response.data.token) {
      navigate("/dashboard");
    }
    else {
      setError(response.data.msg)
    }

  }


  return (
    <div>


      <div className="signInForm-container">
        <div className="signInForm-box">
          <h1 className="signInForm-title">Sign In</h1>

          <form onSubmit={signIn}>

            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" className="signInForm-input" />

            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" required className="signInForm-input" />

            {error && <p className="signInForm-error">{error}</p>}

            <button type="submit" className="signInForm-btn">Sign In</button>

          </form>

          <Link to="/signUp" className="signInForm-link">Don't have an account? Sign Up</Link>
          
        </div>
      </div>



      <Link to='/signUp' >SignUp</Link>

    </div>
  )
}

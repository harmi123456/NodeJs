import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function SignIn() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    const response = await axios.post("http://localhost:4001/login", { email, password })

    if (response.data.msg === "Admin Not Found") {
      setError("No account found with this email.");
    } else if (response.data.msg === "Password is Wrong !") {
      setError("Incorrect password.");
    } else {
      navigate("/dashboard");
      alert("Login Successful!");
      setEmail("");
      setPassword("");
      setError("");
    }
  }

  return (
    
    <div className="signin-container">
      <div className="signin-box">
        <h1>Teacher Sign In</h1>

        <form onSubmit={signIn}>
          <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter email' required />
          <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' required />

          {error && <p className="error-message">{error}</p>}

          <button type='submit' className="signin-btn">Sign In</button>
        </form>
      </div>
    </div>
  )
}

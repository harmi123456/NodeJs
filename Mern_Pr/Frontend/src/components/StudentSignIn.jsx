import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function StudentSignIn() {

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

    const response = await axios.post("http://localhost:4001/student/studentLogin", { email, password })

    if (response.data.token) {
      navigate("/studentDashboard");
    }
    else {
      setError(response.data.msg)
    }

  }



return (
  <div>

    <div className="signin-container">

      <div className="signin-box">
        
        <h1>Student Sign In</h1>

        <form onSubmit={signIn}>

          <input type="text" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter email' />
          <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' required />

          {error && <p className="error-message">{error}</p>}

          <button type='submit' className="signin-btn">Sign In</button>
        </form>

      </div>
    </div>


  </div>
)
}

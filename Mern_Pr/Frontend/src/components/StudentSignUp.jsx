import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export default function StudentSignUp() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");

  const signUp = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:4001/student/studentRegister", { name, email, password, city });
    alert("student Added Successfully!");

    setName("");
    setEmail("");
    setPassword("");
    setCity("");

  };

  return (
    <div>

      <div className="signup-container">
        <div className="signup-box">
          <h1>Student Sign Up</h1>

          <form onSubmit={signUp}>
            <input type="text" name='name' placeholder='Enter Your Name' value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="email" name='email' placeholder='Enter Your Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" name='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
            <input type="text" name='city' placeholder='Enter City' value={city} onChange={(e) => setCity(e.target.value)} required />

            <button type='submit' className="signup-btn">Sign Up</button>

            <p className="signin-link">
              Already have an account? <Link to='/studentSignIn'>Sign In</Link>
            </p>

          </form>

        </div>
      </div>

    </div>
  )
}

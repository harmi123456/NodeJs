import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function SignUp() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [city, setCity] = useState("");
    const [gender, setGender] = useState("");

    const navigate = useNavigate();

    const signUp = async (e) => {
        e.preventDefault();

        await axios.post("http://localhost:4000/register", { name, email, password, city, gender });
        alert("Register Successfully!");

        navigate("/dashboard")
        setName("");
        setEmail("");
        setPassword("");
        setCity("");
        setGender("");

    };


    return (
        <div>

            <div className="signup-container">
                <div className="signup-box">
                    <h1>Sign Up</h1>

                    <form onSubmit={signUp}>

                        <input type="text" name="name" placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)} required />

                        <input type="email" name="email" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                        <input type="password" name="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                        <input type="text" name="city" placeholder="Enter City" value={city} onChange={(e) => setCity(e.target.value)} required />

                        <input type="text" name="gender" placeholder="Enter Gender" value={gender} onChange={(e) => setGender(e.target.value)} required />

                        <button type="submit" className="signup-btn">
                            Sign Up
                        </button>
                        
                    </form>
                </div>
            </div>




            <Link to='/dashboard' >Dashboard</Link>

        </div>
    )
}

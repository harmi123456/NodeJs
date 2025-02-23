import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard() {

  const [data, setData] = useState([]);

  useEffect(() => {
    studentApi()
  }, [])

  const studentApi = async () => {
    const response = await axios.get("http://localhost:4001/student/viewStudent")
    console.log(response.data.data)
    setData(response.data.data)
  }


  return (

    <div className="teacher-dashboard">
      <h1>Welcome to Teacher Dashboard Page</h1>

      <Link to='/studentSignUp'>
        <button>Add Students</button>
      </Link>

      <div className="student-section">
        <h2>Students</h2>

        {data.length > 0 ? (
          <div className="student-list">
            {data.map((e, i) => (
              <ul className="student-card" key={i}>
                <li><strong>Name:</strong> {e.name}</li>
                <li><strong>Email:</strong> {e.email}</li>
                <li><strong>City:</strong> {e.city}</li>
              </ul>
            ))}
          </div>
        ) : (
          <p className="no-data">No data available</p>
        )}
      </div>
    </div>

  )
}

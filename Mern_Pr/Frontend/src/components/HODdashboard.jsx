import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function HODdashboard() {

  //Studetn Data
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    studentApi();
  }, []);

  const studentApi = async () => {
    const response = await axios.get("http://localhost:4001/student/viewStudent")
    console.log(response.data.data)
    setStudentData(response.data.data)
  }


  //Teacher Data
  const [teacherData, setTeacherData] = useState([]);

  useEffect(() => {
    teacherApi();
  }, [])

  const teacherApi = async () => {
    const response = await axios.get("http://localhost:4001/viewAdmin")
    console.log(response.data.data)
    setTeacherData(response.data.data)
  }




  return (

    <div className="hod-dashboard">
      <h1>H.O.D Dashboard</h1>

      <div className="data-section">
        <h3>Student Data</h3>
        {studentData.length > 0 ? (
          <div className="data-list">
            {studentData.map((e, i) => (
              <ul className="data-card" key={i}>
                <li><strong>Name:</strong> {e.name}</li>
                <li><strong>Email:</strong> {e.email}</li>
                <li><strong>City:</strong> {e.city}</li>
              </ul>
            ))}
          </div>
        ) : (
          <p className="no-data">No student data available.</p>
        )}
      </div>

      <div className="data-section">
        <h3>Teacher Data</h3>
        {teacherData.length > 0 ? (
          <div className="data-list">
            {teacherData.map((e, i) => (
              <ul className="data-card" key={i}>
                <li><strong>Name:</strong> {e.name}</li>
                <li><strong>Email:</strong> {e.email}</li>
                <li><strong>City:</strong> {e.city}</li>
              </ul>
            ))}
          </div>
        ) : (
          <p className="no-data">No teacher data available.</p>
        )}
      </div>
    </div>

  )
}

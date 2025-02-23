import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function StudentDashboard() {



  return (
    <div className="student-dashboard">
      <h1>Student Dashboard</h1>
      <div className="dashboard-card">
        <p>Welcome to your personalized dashboard. Here, you can track your progress and view your updates.</p>
        <button className="dashboard-button">Explore More</button>
      </div>
    </div>
  )
}

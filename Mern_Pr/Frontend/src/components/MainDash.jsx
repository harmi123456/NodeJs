import React from 'react'
import { Link } from 'react-router-dom'

export default function MainDash() {
  return (
    <div className='main-dash'>
      
      <Link to='/HODSignUp' >
        <button>H.O.D</button>
      </Link>

      <Link to='/signUp' >
        <button>Teacher</button>
      </Link>

      <Link to='/studentSignUp' >
        <button>Student</button>
      </Link>

    </div>
  )
}
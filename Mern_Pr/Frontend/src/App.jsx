import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import StudentSignUp from './components/StudentSignUp';
import MainDash from './components/MainDash';
import HODSignUp from './components/HODSignUp';
import HODSignIn from './components/HODSignIn';
import HODdashboard from './components/HODdashboard';
import StudentSignIn from './components/StudentSignIn';
import StudentDashboard from './components/StudentDashboard';

export default function App() {
  return (
    
    <BrowserRouter>  
      <Routes>
        <Route path='/' element={<MainDash/>} ></Route>
        <Route path='/HODSignUp' element={<HODSignUp/>} ></Route>
        <Route path='/HODSignIn' element={<HODSignIn/>} ></Route>
        <Route path='/HODdashboard' element={<HODdashboard/>} ></Route>
        <Route path="/signUp" element={<SignUp />} />
        <Route path='/SignIn' element={<SignIn/>} ></Route>
        <Route path='/dashboard' element={<Dashboard/>} ></Route>
        <Route path='/studentSignUp' element={<StudentSignUp/>} ></Route>
        <Route path='/studentSignIn' element={<StudentSignIn/>} ></Route>
        <Route path='/studentDashboard' element={<StudentDashboard/>} ></Route>
      </Routes>
    </BrowserRouter>
  
  );
}

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn/>} ></Route>
          <Route path='/SignUp' element={<SignUp/>} ></Route>
          <Route path='/dashboard' element={<Dashboard/>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

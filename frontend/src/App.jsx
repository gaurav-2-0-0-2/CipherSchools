import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './routes/Register';
import Signin from './routes/Signin';
import  Profile  from './routes/Profile';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Register />}/>
        <Route path='/signin' element={<Signin />}/>
        <Route path='/profile' element={<Profile/>} />
      </Routes>
    </div>
  )
}

export default App

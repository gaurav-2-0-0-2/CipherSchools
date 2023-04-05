import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Signin from './components/Signin';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Register />}></Route>
        <Route path='/Signin' element={<Signin />}></Route>
      </Routes>
    </div>
  )
}

export default App

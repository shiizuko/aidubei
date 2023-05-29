import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Signup from './components/Signup';
import Home from './components/Home';
function App() {
    return (
      <Router>
        <Routes>
        <Route path='/' element={<Welcome/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/home' element={<Home/>} />
        </Routes>
      </Router>
    );
  }
export default App;
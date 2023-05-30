import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Signup from './components/Signup';
import Home from './components/Home';
import Parceiros from './components/Parceiros';
import Compostagem from './components/Compostagem';
function App() {
    return (
      <Router>
        <Routes>
        <Route path='/' element={<Welcome/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/parceiros' element={<Parceiros/>} />
        <Route path='/compostagem' element={<Compostagem/>} />

        </Routes>
      </Router>
    );
  }
export default App;
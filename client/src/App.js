import './App.scss'
import React, {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';

export default function App() {

  
  return (
    <>

    <Routes>
    
      <Route path="/" element={<Home />}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Projects" element={<Projects/>}/>
    </Routes>

    </>
  )
}

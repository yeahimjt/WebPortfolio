import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'


export default function App() {
  return (
    <>

    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/About" element={<About/>}/>
    </Routes>

    </>
  )
}

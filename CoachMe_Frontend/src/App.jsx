import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import {BrowserRouter, Router, Routes, Route} from "react-router-dom";
import Navbar from "./Navbar.jsx"

import CoachListing from "../pages/Coach.jsx"

function Main() {
  return (
    <Routes>
      <Route path='/' element={<CoachListing/>}></Route>
    </Routes>
  );
}


function App() {
  return (
    <>
      <Navbar />
      <Main />
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import {BrowserRouter, Router, Routes, Route} from "react-router-dom";
import Navbar from "./Navbar.jsx"

//pages
import CoachListing from "../pages/Coach.jsx"
import Dashboard from '../pages/Dashboard.jsx';
import Profile from '../pages/Profile.jsx';
import CoachDash from '../pages/CoachDash.jsx';


function Main() {
  return (
    <Routes>
      <Route path='/' element={<CoachListing/>}></Route>
      <Route path='/coachfinder' element={<CoachListing/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/coachdash' element={<CoachDash/>}></Route>

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

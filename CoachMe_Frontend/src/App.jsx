import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import {BrowserRouter, Router, Routes, Route} from "react-router-dom";
import Navbar from "./Navbar.jsx"
import {QueryClient, QueryClientProvider, useQuery} from '@tanstack/react-query'


//pages
import CoachListing from "../pages/SearchPage.jsx"
import Dashboard from '../pages/Dashboard.jsx';
import Profile from '../pages/Profile.jsx';
import CoachDash from '../pages/CoachDash.jsx';
import ClientCoachView from '../pages/ClientCoachView'
import CoachSignup from '../pages/CoachSignup.jsx'

function Main() {
  return (
    <Routes>
      <Route path='/' element={<CoachListing/>}></Route>
      <Route path='/coachfinder' element={<CoachListing/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/coachdash' element={<CoachDash/>}></Route>
      <Route path='/coachview' element={<ClientCoachView/>}></Route>
      <Route path='/CoachSignup' element={<CoachSignup/>}></Route>
    </Routes>
  );
}

function App() {
  const queryClient = new QueryClient()
  return (
    <>
      <QueryClientProvider client={queryClient}>
      <Navbar />
      <Main />
      </QueryClientProvider>
    </>
  )
}

export default App

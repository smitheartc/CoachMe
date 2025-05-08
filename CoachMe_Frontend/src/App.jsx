import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Navbar from './Navbar'

// pages
import Home from '../pages/Home.jsx'
import CoachListing from '../pages/SearchPage.jsx'
import Dashboard from '../pages/Dashboard.jsx'
import Profile from '../pages/Profile.jsx'
import CoachDash from '../pages/CoachDash.jsx'
import ClientCoachView from '../pages/ClientCoachView.jsx'
import CoachSignup from '../pages/CoachSignup.jsx'
import SignUp from '../pages/SignUp.jsx'
import SignUp2 from '../pages/SignUp2.jsx'
import SignUp3 from '../pages/SignUp3.jsx'
import AtheleteSignUp from '../pages/AtheleteSignUp.jsx'

import { Routes, Route } from 'react-router-dom'

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coachfinder' element={<CoachListing />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/coachdash' element={<CoachDash />} />
        <Route path='/coachview' element={<ClientCoachView />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signup2' element={<SignUp2 />} />
        <Route path='/signup3' element={<SignUp3 />} />
        <Route path='/atheletesignup' element={<AtheleteSignUp />} />
      </Routes>
    </QueryClientProvider>
  )
}

export default App

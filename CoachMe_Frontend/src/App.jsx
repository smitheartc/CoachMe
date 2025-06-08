import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom'

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
import AtheleteSignUp from '../pages/AtheleteSignUp.jsx'
import About from '../pages/About.jsx'
import CoachSignup2 from '../pages/CoachSignUp2.jsx'

import { Routes, Route } from 'react-router-dom'

function App() {
  const queryClient = new QueryClient()
  const location = useLocation()
  const isDashboard = location.pathname.startsWith('/dashboard')

  return (
    <QueryClientProvider client={queryClient}>
      {!isDashboard && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/coachfinder' element={<CoachListing />} />
        <Route path='/dashboard/*' element={<Dashboard />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/coachdash' element={<CoachDash />} />
        <Route path='/coachview' element={<ClientCoachView />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signup2' element={<SignUp2 />} />
        <Route path='/atheletesignup' element={<AtheleteSignUp />} />
        <Route path='/coachsignup' element={<CoachSignup />} />
        <Route path='/coachsignup2' element={<CoachSignup2 />} />
      </Routes>
    </QueryClientProvider>
  )
}

export default App

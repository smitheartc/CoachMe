import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Navbar from './Navbar'

// Pages
import Home from '../pages/Home.jsx'
import CoachListing from '../pages/SearchPage.jsx'
import Dashboard from '../pages/Dashboard.jsx'
import Profile from '../pages/Profile.jsx'
import CoachDash from '../pages/CoachDash.jsx'
import ClientCoachView from '../pages/ClientCoachView.jsx'
import CoachSignup from '../pages/CoachSignup.jsx'
import TeamSignUp from '../pages/TeamSignUp.jsx'
import AtheleteSignUp from '../pages/AtheleteSignUp.jsx'
import About from '../pages/About.jsx'

// Sign up flow
import SignUp from '../pages/SignUp.jsx'
import SignUp2 from '../pages/SignUp2.jsx'

// ⬇️ Wrapper to manage conditional navbar rendering
function AppWrapper() {
  const location = useLocation()
  const hideNavbarRoutes = ['/signup', '/signup2', '/signup3', '/atheletesignup', '/coachsignup']
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname)

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <Routes>
        {/* Redirect root to /signup */}
        <Route path="/" element={<Navigate to="/signup" replace />} />

        {/* Signup flow */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup2" element={<SignUp2 />} />
        <Route path="/signup3" element={<TeamSignUp />} />
        <Route path="/atheletesignup" element={<AtheleteSignUp />} />
        <Route path="/coachsignup" element={<CoachSignup />} />

        {/* Main site */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/coachfinder" element={<CoachListing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/coachdash" element={<CoachDash />} />
        <Route path="/coachview" element={<ClientCoachView />} />
      </Routes>
    </>
  )
}

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <AppWrapper />
    </QueryClientProvider>
  )
}

export default App

import { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')
    try {
      const resp = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
      const data = await resp.json()
      if (data.access_token) {
        setMessage('Login successful!')
        // TODO: Save token, update UI, redirect, etc.
      } else {
        setMessage(data.error || 'Login failed.')
      }
    } catch (err) {
      setMessage('Login failed: ' + err.message)
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <h1 className="text-[36px] font-semibold text-black mb-4" style={{ lineHeight: '100%' }}>
        Welcome Back
      </h1>
      <h2 className="text-[23px] font-semibold text-black mb-4" style={{ lineHeight: '100%' }}>
        Log in to your account
      </h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Example@email.com"
            className="w-[388px] h-[48px] py-2 border border-gray-300 rounded-[12px] px-3 bg-blue-50 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-[388px] h-[48px] py-2 border border-gray-300 rounded-[12px] px-3 bg-blue-50 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#FFDB8C] hover:bg-blue-700 text-black font-medium py-2 px-4 rounded-md transition duration-200"
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Log In'}
        </button>
        {message && <div className="text-center text-red-600 mt-2">{message}</div>}
      </form>
      <div className="relative flex items-center my-6">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="text-[16px] flex-shrink mx-4 text-black">Or</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <div className="space-y-3">
        <button className="w-[388px] h-[48px] py-2 border border-gray-300 rounded-[12px] px-3 bg-blue-50 flex justify-center items-center gap-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
          <img
            src="/src/assets/Google.png"
            alt="Google"
            className="w-5 h-5"
          />
          <span>Sign in with Google</span>
        </button>
        <Link
          to="/signup"
          className="block w-[388px] h-[48px] py-2 border border-gray-300 rounded-[12px] px-3 bg-yellow-100 text-black text-center font-medium mt-2 hover:bg-yellow-200 transition duration-200"
        >
          Don&apos;t have an account? Sign up
        </Link>
      </div>
    </div>
  )
}

export default LoginPage
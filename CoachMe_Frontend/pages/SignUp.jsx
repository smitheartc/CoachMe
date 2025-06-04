import { useState } from 'react'

const SignUp = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Email submitted:', email)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <h1 className="text-[36px] font-semibold text-black mb-4" style={{ lineHeight: '100%' }}>
        Welcome to Coach Me
      </h1>
  
      <h2 className="text-[23px] font-semibold text-black mb-4" style={{ lineHeight: '100%' }}>
        1st Step: Enter an email
      </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
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
            
            <button
              type="submit"
              className="w-full bg-[#FFDB8C] hover:bg-blue-700 text-black font-medium py-2 px-4 rounded-md transition duration-200"
            >
              Continue
            </button>
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
          </div>
        </div>
  )
}

export default SignUp
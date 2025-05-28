import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp2 = () => {
  const [selectedRole, setSelectedRole] = useState(null)
  const navigate = useNavigate()

  const roles = [
    { id: 'athlete', label: 'Athlete' },
    { id: 'coach', label: 'Coach' },
    { id: 'club', label: 'Club' }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()

    if (selectedRole === 'athlete') {
      navigate('/atheletesignup')
    } else if (selectedRole === 'coach') {
      navigate('/coachsignup')
    } else if (selectedRole === 'club') {
      navigate('/signup3') // TeamSignUp file
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-8">

        <div>
          <h2 className="text-lg font-medium text-gray-700 mb-6">2nd Step: Are you a...</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-3 gap-4">
              {roles.map((role) => (
                <button
                  key={role.id}
                  type="button"
                  onClick={() => setSelectedRole(role.id)}
                  className={`py-3 px-4 border rounded-md transition duration-200 text-black ${
                    selectedRole === role.id
                      ? 'bg-gray-100 border-gray-300'
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  {role.label}
                </button>
              ))}
            </div>

            <button
              type="submit"
              disabled={!selectedRole}
              className={`w-full py-2 px-4 rounded-md font-medium transition duration-200 ${
                selectedRole
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
            >
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp2

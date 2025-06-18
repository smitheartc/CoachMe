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
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
        <div>
          <h2 className="text-[23px] font-semibold text-black mb-4 text-center" style={{ lineHeight: '100%' }}>
            2nd Step: Are you a...
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-3 gap-4">
              {roles.map((role) => (
                <button
                  key={role.id}
                  type="button"
                  onClick={() => setSelectedRole(role.id)}
                  className={`w-[108px] h-[36px] px-4 border font-semibold rounded-[28px] bg-[#D9D9D9] transition duration-200 justify-center text-center text-black ${
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
              className={`w-[111px] h-[37px] py-2 px-4 rounded-[28px] font-semibold bg-[#D9D9D9] transition duration-200 mx-auto flex justify-center items-center text-black${
                selectedRole
                  ? 'bg-blue-600 hover:bg-[#D9D9D9] text-white'
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
            >
              Next
            </button>
          </form>
        </div>
      </div>
  )
}

export default SignUp2

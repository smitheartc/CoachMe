// src/pages/TeamSignup.jsx
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const TeamSignup = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step1Data, setStep1Data] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);

  // Load step 1 data when component mounts
  useEffect(() => {
    const savedData = localStorage.getItem('teamSignupStep1');
    console.log('Loading saved data:', savedData);
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setStep1Data(parsedData);
      setDataLoaded(true);
      console.log('Step 1 data loaded successfully:', parsedData);
    } else {
      console.log('No saved data found in localStorage');
      setDataLoaded(false);
    }
  }, []);

  // Form validation schema
  const validationSchema = Yup.object({
    sport: Yup.string().required('Sport is required'),
    age: Yup.string().required('Age group is required'),
    skill: Yup.string().required('Skill level is required'),
  });

  const formik = useFormik({
    initialValues: {
      sport: '',
      age: '',
      skill: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true);
      try {
        // Combine step 1 and step 2 data
        const combinedData = {
          ...step1Data,
          ...values,
        };

        console.log('Submitting team data:', combinedData);

        // Send to Flask backend
        const response = await fetch('http://127.0.0.1:5000/team/create/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(combinedData),
        });

        const result = await response.json();

        if (response.ok) {
          console.log('Team created successfully:', result);
          // Clear all stored signup data
          localStorage.removeItem('teamSignupStep1');
          localStorage.removeItem('signupEmail');
          localStorage.removeItem('signupRole');
          
          // Navigate to home page
          navigate('/');
          alert('Team registration completed successfully! Welcome to CoachMe!');
        } else {
          console.error('Failed to create team:', result);
          alert('Failed to create team account. Please try again.');
        }
        
      } catch (error) {
        console.error('Error creating team:', error);
        alert('Error creating team account. Please check your connection and try again.');
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
      <h2 className="text-[23px] font-semibold text-black mb-4 text-center" style={{ lineHeight: '100%' }}>4th Step: Questions</h2>
      
      {/* Debug Information */}
      {!dataLoaded && (
        <div className="mb-4 p-4 bg-yellow-100 border border-yellow-400 rounded">
          <p className="text-yellow-800">⚠️ No data from step 1 found. Please go back to step 1.</p>
          <button 
            onClick={() => navigate('/teamsignup')}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Go Back to Step 1
          </button>
        </div>
      )}
      
      {dataLoaded && (
        <div className="mb-4 p-4 bg-green-100 border border-green-400 rounded">
          <p className="text-green-800">✅ Step 1 data loaded successfully!</p>
          <p className="text-sm text-green-700">
            Name: {step1Data?.firstName} {step1Data?.lastName} | 
            Club: {step1Data?.clubName} | 
            Email: {step1Data?.email} | 
            Location: {step1Data?.city}, {step1Data?.state}
          </p>
        </div>
      )}
      
      <form onSubmit={formik.handleSubmit} className="space-y-4 w-[436px] rounded-[12px]">
        <div>
          <label htmlFor="sport" className="block text-sm font-medium text-[#0C1421]">
            What sport does your club play?
          </label>
          <input
            id="sport"
            name="sport"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.sport}
            className="mt-1 bg-blue-50 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          />
          {formik.touched.sport && formik.errors.sport ? (
            <div className="text-red-500 text-sm">{formik.errors.sport}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="age" className="block text-sm font-medium text-[#0C1421]">
            What is your age group?
          </label>
          <input
            id="age"
            name="age"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.age}
            className="mt-1 bg-blue-50 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          />
          {formik.touched.age && formik.errors.age ? (
            <div className="text-red-500 text-sm">{formik.errors.age}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="skill" className="block text-sm font-medium text-[#0C1421]">
            What skill level is your club?
          </label>
          <input
            id="skill"
            name="skill"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.skill}
            className="mt-1 bg-blue-50 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          />
          {formik.touched.skill && formik.errors.skill ? (
            <div className="text-red-500 text-sm">{formik.errors.skill}</div>
          ) : null}
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting || !dataLoaded}
            className="w-[111px] h-[37px] bg-[#D9D9D9] text-black rounded-[28px] font-semibold flex justify-center items-center hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
          >
            {isSubmitting ? 'Creating...' : 'Complete'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TeamSignup;
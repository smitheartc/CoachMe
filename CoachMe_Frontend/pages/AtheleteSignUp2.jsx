// src/pages/AthleteSignup.jsx
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const AthleteSignup = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step1Data, setStep1Data] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);

  // Load step 1 data when component mounts
  useEffect(() => {
    const savedData = localStorage.getItem('athleteSignupStep1');
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
    about: Yup.string().required('Please describe yourself').max(500, 'Description too long'),
    sport: Yup.string().required('Sport is required'),
    position: Yup.string().required('Position is required'),
    specialty: Yup.string().required('Specialty is required'),
    clubAffiliation: Yup.string(),
    skill: Yup.number().min(1, 'Skill level must be at least 1').max(10, 'Skill level must be at most 10').required('Skill level is required'),
  });

  const formik = useFormik({
    initialValues: {
      about: '',
      sport: '',
      position: '',
      specialty: '',
      clubAffiliation: '',
      skill: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true);
      try {
        // Calculate age from date of birth
        const dob = new Date(step1Data.dob);
        const today = new Date();
        const age = today.getFullYear() - dob.getFullYear();
        const monthDiff = today.getMonth() - dob.getMonth();
        const actualAge = monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate()) ? age - 1 : age;

        // Combine step 1 and step 2 data
        const combinedData = {
          ...step1Data,
          ...values,
          age: actualAge,
          location: `${step1Data.city}, ${step1Data.state}`,
        };

        console.log('Submitting athlete data:', combinedData);

        // Send to Flask backend
        const response = await fetch('http://127.0.0.1:5000/client/create/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(combinedData),
        });

        const result = await response.json();

        if (response.ok) {
          console.log('Athlete created successfully:', result);
          // Clear all stored signup data
          localStorage.removeItem('athleteSignupStep1');
          localStorage.removeItem('signupEmail');
          localStorage.removeItem('signupRole');
          // Navigate to home page
          navigate('/');
          alert('Athlete account created successfully! Welcome to CoachMe!');
        } else {
          console.error('Failed to create athlete:', result);
          alert('Failed to create athlete account. Please try again.');
        }
      } catch (error) {
        console.error('Error creating athlete:', error);
        alert('Error creating athlete account. Please check your connection and try again.');
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
            onClick={() => navigate('/atheletesignup')}
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
            Email: {step1Data?.email} | 
            Location: {step1Data?.city}, {step1Data?.state}
          </p>
        </div>
      )}
      
      <form onSubmit={formik.handleSubmit} className="space-y-4 w-[436px] rounded-[12px]">
        <div>
          <label htmlFor="about" className="block text-sm font-medium text-[#0C1421]">
            Describe a little bit about yourself
          </label>
          <textarea
            id="about"
            name="about"
            rows="3"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.about}
            className="h-[72px] bg-blue-50 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          />
          {formik.touched.about && formik.errors.about ? (
            <div className="text-red-500 text-sm">{formik.errors.about}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="sport" className="block text-sm font-medium text-[#0C1421]">
            What sport do you play?
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
          <label htmlFor="position" className="block text-sm font-medium text-[#0C1421]">
            What's position do you play?
          </label>
          <input
            id="position"
            name="position"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.position}
            className="mt-1 bg-blue-50 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          />
          {formik.touched.position && formik.errors.position ? (
            <div className="text-red-500 text-sm">{formik.errors.position}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="specialty" className="block text-sm font-medium text-[#0C1421]">
            What are your specalities?
          </label>
          <input
            id="specialty"
            name="specialty"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.specialty}
            className="mt-1 bg-blue-50 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          />
          {formik.touched.specialty && formik.errors.specialty ? (
            <div className="text-red-500 text-sm">{formik.errors.specialty}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="skill" className="block text-sm font-medium text-[#0C1421]">
            Skill Level (1-10)
          </label>
          <input
            id="skill"
            name="skill"
            type="number"
            min="1"
            max="10"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.skill}
            className="mt-1 bg-blue-50 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          />
          {formik.touched.skill && formik.errors.skill ? (
            <div className="text-red-500 text-sm">{formik.errors.skill}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="clubAffiliation" className="block text-sm font-medium text-[#0C1421]">
            Affiliated with any clubs?
          </label>
          <input
            id="clubAffiliation"
            name="clubAffiliation"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.clubAffiliation}
            className="mt-1 bg-blue-50 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          />
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

export default AthleteSignup;
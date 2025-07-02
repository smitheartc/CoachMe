// src/pages/CoachSignup.jsx
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const CoachSignup = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step1Data, setStep1Data] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);

  // Load step 1 data when component mounts
  useEffect(() => {
    const savedData = localStorage.getItem('coachSignupStep1');
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
    experience: Yup.string().required('Experience is required'),
    specialty: Yup.string().required('Specialty is required'),
    clubAffiliation: Yup.string(),
    rate: Yup.number().positive('Rate must be positive').required('Rate is required'),
  });

  const formik = useFormik({
    initialValues: {
      about: '',
      sport: '',
      experience: '',
      specialty: '',
      clubAffiliation: '',
      rate: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true);
      try {
        // Combine step 1 and step 2 data
        const combinedData = {
          ...step1Data,
          ...values,
          // Convert address to location coordinates (you might want to use a geocoding service)
          location1: 40.7128, // Default latitude - you can make this dynamic
          location2: -74.0060, // Default longitude - you can make this dynamic
          blurb: values.about,
          speciality: values.specialty,
        };

        console.log('Submitting coach data:', combinedData);

        // Send to Flask backend
        const response = await fetch('http://127.0.0.1:5000/coach/create/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(combinedData),
        });

        const result = await response.json();

        if (response.ok) {
          console.log('Coach created successfully:', result);
          // Clear all stored signup data
          localStorage.removeItem('coachSignupStep1');
          localStorage.removeItem('signupEmail');
          localStorage.removeItem('signupRole');
          // Navigate to home page
          navigate('/');
          alert('Coach account created successfully! Welcome to CoachMe!');
        } else {
          console.error('Failed to create coach:', result);
          alert('Failed to create coach account. Please try again.');
        }
      } catch (error) {
        console.error('Error creating coach:', error);
        alert('Error creating coach account. Please check your connection and try again.');
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
      <h2 className="text-[23px] font-semibold text-black mb-4 text-center" style={{ lineHeight: '100%' }}>4th Step: Coach Questions</h2>
      
      {/* Debug Information */}
      {!dataLoaded && (
        <div className="mb-4 p-4 bg-yellow-100 border border-yellow-400 rounded">
          <p className="text-yellow-800">⚠️ No data from step 1 found. Please go back to step 1.</p>
          <button 
            onClick={() => navigate('/coachsignup')}
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
            What sport are you coaching?
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
          <label htmlFor="experience" className="block text-sm font-medium text-[#0C1421]">
            What's your experience in your sport?
          </label>
          <textarea
            id="experience"
            name="experience"
            rows="3"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.experience}
            className="mt-1 bg-blue-50 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          />
          {formik.touched.experience && formik.errors.experience ? (
            <div className="text-red-500 text-sm">{formik.errors.experience}</div>
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
          <label htmlFor="rate" className="block text-sm font-medium text-[#0C1421]">
            Hourly Rate ($)
          </label>
          <input
            id="rate"
            name="rate"
            type="number"
            step="0.01"
            min="0"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.rate}
            className="mt-1 bg-blue-50 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          />
          {formik.touched.rate && formik.errors.rate ? (
            <div className="text-red-500 text-sm">{formik.errors.rate}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="clubAffiliation" className="block text-sm font-medium text-[#0C1421]">
            Are you affiliated with a club? If so, who?
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

export default CoachSignup;
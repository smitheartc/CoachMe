// src/pages/CoachSignup.jsx
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const CoachSignup = () => {
  const navigate = useNavigate();

  // Form validation schema
  const validationSchema = Yup.object({
    about: Yup.string().required('Please describe yourself').max(500, 'Description too long'),
    sport: Yup.string().required('Sport is required'),
    experience: Yup.string().required('Experience is required'),
    specialty: Yup.string().required('Specialty is required'),
    clubAffiliation: Yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      about: '',
      sport: '',
      experience: '',
      specialty: '',
      clubAffiliation: '',
    },
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission
      console.log(values);
      // Typically you would send this to your backend
      navigate('/dashboard'); // Redirect after submission
    },
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h2 className="text-[23px] font-semibold text-black mb-4 text-center" style={{ lineHeight: '100%' }}>4th Step: Coach Questions</h2>
      
      <form onSubmit={formik.handleSubmit} className="space-y-4 w-[436px]">
        <div>
          <label htmlFor="about" className="block text-sm font-medium text-gray-700">
            Describe a little bit about yourself
          </label>
          <textarea
            id="about"
            name="about"
            rows="3"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.about}
            className="h-[72px] mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          />
          {formik.touched.about && formik.errors.about ? (
            <div className="text-red-500 text-sm">{formik.errors.about}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="sport" className="block text-sm font-medium text-gray-700">
            What sport are you coaching?
          </label>
          <input
            id="sport"
            name="sport"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.sport}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          />
          {formik.touched.sport && formik.errors.sport ? (
            <div className="text-red-500 text-sm">{formik.errors.sport}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
            What's your experience in your sport?
          </label>
          <textarea
            id="experience"
            name="experience"
            rows="3"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.experience}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          />
          {formik.touched.experience && formik.errors.experience ? (
            <div className="text-red-500 text-sm">{formik.errors.experience}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="specialty" className="block text-sm font-medium text-gray-700">
            What are your specalities?
          </label>
          <input
            id="specialty"
            name="specialty"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.specialty}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          />
          {formik.touched.specialty && formik.errors.specialty ? (
            <div className="text-red-500 text-sm">{formik.errors.specialty}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="clubAffiliation" className="block text-sm font-medium text-gray-700">
            Are you affiliated with a club? If so, who?
          </label>
          <input
            id="clubAffiliation"
            name="clubAffiliation"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.clubAffiliation}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default CoachSignup;
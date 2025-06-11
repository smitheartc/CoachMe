// src/pages/CoachSignup.jsx
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const CoachSignup = () => {
  const navigate = useNavigate();

  // Form validation schema
  const validationSchema = Yup.object({
    sport: Yup.string().required('Sport is required'),
    age: Yup.string().required('Age is required'),
    skill: Yup.string().required('Skill Level is required'),
    clubAffiliation: Yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      sport: '',
      age: '',
      skill: '',
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
      <h2 className="text-[23px] font-semibold text-black mb-4 text-center" style={{ lineHeight: '100%' }}>4th Step: Questions</h2>
      
      <form onSubmit={formik.handleSubmit} className="space-y-4 w-[436px] rounded-[12px]">
        <div>
          <label htmlFor="sport" className="block text-sm font-medium text-[#0C1421]">
            What sport does your club play?
          </label>
          <input
            id="sport"
            name="sport"
            rows="3"
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
            className="w-[111px] h-[37px] bg-[#D9D9D9] text-black rounded-[28px] font-semibold flex justify-center items-center hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default CoachSignup;
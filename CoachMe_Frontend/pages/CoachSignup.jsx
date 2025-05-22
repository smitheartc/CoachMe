import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const CoachSignup = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    location: Yup.string().required('Location is required'),
    about: Yup.string().required('Please describe yourself').max(500, 'Description too long'),
    sport: Yup.string().required('Sport is required'),
    experience: Yup.string().required('Experience is required'),
    specialty: Yup.string().required('Specialty is required'),
    clubAffiliation: Yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      location: '',
      about: '',
      sport: '',
      experience: '',
      specialty: '',
      clubAffiliation: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      navigate('/coachdash');
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Coach Signup</h1>
        <p className="text-gray-600 mb-6 text-center">Step 3 of 3: Coach Questions</p>

        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border text-black"
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <div className="text-red-500 text-sm">{formik.errors.firstName}</div>
              )}
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border text-black"
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <div className="text-red-500 text-sm">{formik.errors.lastName}</div>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              id="location"
              name="location"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.location}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border text-black"
            />
            {formik.touched.location && formik.errors.location && (
              <div className="text-red-500 text-sm">{formik.errors.location}</div>
            )}
          </div>

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
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border text-black"
            />
            {formik.touched.about && formik.errors.about && (
              <div className="text-red-500 text-sm">{formik.errors.about}</div>
            )}
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
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border text-black"
            />
            {formik.touched.sport && formik.errors.sport && (
              <div className="text-red-500 text-sm">{formik.errors.sport}</div>
            )}
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
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border text-black"
            />
            {formik.touched.experience && formik.errors.experience && (
              <div className="text-red-500 text-sm">{formik.errors.experience}</div>
            )}
          </div>

          <div>
            <label htmlFor="specialty" className="block text-sm font-medium text-gray-700">
              What specialty is your sport?
            </label>
            <input
              id="specialty"
              name="specialty"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.specialty}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border text-black"
            />
            {formik.touched.specialty && formik.errors.specialty && (
              <div className="text-red-500 text-sm">{formik.errors.specialty}</div>
            )}
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
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border text-black"
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
    </div>
  );
};

export default CoachSignup;

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const CoachSignup = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    dob: Yup.date().required('Date of birth is required'),
    address: Yup.string().required('Present address is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
    zip: Yup.string().required('Zip code is required'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      dob: '',
      address: '',
      city: '',
      state: '',
      zip: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      navigate('/dashboard');
    },
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
      <h2 className="text-[23px] font-semibold text-black mb-4 text-center" style={{ lineHeight: '100%' }}>
        3rd Step: Information
      </h2>

      <form onSubmit={formik.handleSubmit} className="space-y-4 w-[439px] max-w-xl">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              className="mt-1 block w-full rounded-md border border-gray-300 bg-blue-50 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <div className="text-red-500 text-sm">{formik.errors.firstName}</div>
            )}
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              className="mt-1 block w-full rounded-md border border-gray-300 bg-blue-50 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <div className="text-red-500 text-sm">{formik.errors.lastName}</div>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
          <input
            id="dob"
            name="dob"
            type="date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dob}
            className="mt-1 block w-full rounded-md border border-gray-300 bg-blue-50 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {formik.touched.dob && formik.errors.dob && (
            <div className="text-red-500 text-sm">{formik.errors.dob}</div>
          )}
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Present Address</label>
          <input
            id="address"
            name="address"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
            className="mt-1 block w-full rounded-md border border-gray-300 bg-blue-50 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {formik.touched.address && formik.errors.address && (
            <div className="text-red-500 text-sm">{formik.errors.address}</div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
            <input
              id="city"
              name="city"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.city}
              className="mt-1 block w-full rounded-md border border-gray-300 bg-blue-50 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {formik.touched.city && formik.errors.city && (
              <div className="text-red-500 text-sm">{formik.errors.city}</div>
            )}
          </div>

          <div>
            <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
            <input
              id="state"
              name="state"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.state}
              className="mt-1 block w-full rounded-md border border-gray-300 bg-blue-50 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {formik.touched.state && formik.errors.state && (
              <div className="text-red-500 text-sm">{formik.errors.state}</div>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="zip" className="block text-sm font-medium text-gray-700">Current Zip-code For Booking</label>
          <input
            id="zip"
            name="zip"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.zip}
            className="mt-1 block w-full rounded-md border border-gray-300 bg-blue-50 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {formik.touched.zip && formik.errors.zip && (
            <div className="text-red-500 text-sm">{formik.errors.zip}</div>
          )}
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

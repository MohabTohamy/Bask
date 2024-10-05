import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Toaster, toast } from 'react-hot-toast';
import img1 from "../../assets/images/7351cc1ce0d3e170fda64b674ecf26a5.png";
import img2 from "../../assets/images/909f33    d881a8dd36670b8255aaeeb2ea.png";

// Define the types for form inputs
interface RegisterFormInputs {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    phoneNumber: string;
    specialization: string;
    licenseNumber: string;
}

// Define the validation schema using Yup
const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Please confirm your password'),
    phoneNumber: Yup.string()
        .matches(/^(\+20|01)[0-9]{9}$/, 'Invalid Egyptian phone number format')
        .required('Phone number is required'),
    specialization: Yup.string().required('Specialization is required'),
    licenseNumber: Yup.string().when('specialization', {
        is: 'Doctor',
        then: Yup.string().required('License number is required for doctors'),
        otherwise: Yup.string(),
    }),
});

function RegisterForm() {
    // Handle form submission
    const handleSubmit = (values: RegisterFormInputs) => {
        toast.success('Registration successful!');
        console.log(values); // Perform registration logic here
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-3 space-y-6 bg-white shadow-lg rounded-lg">
                <div className='border-4 border-orange-300 p-8 rounded-lg'>
                    <div className="flex justify-center">
                        <img src={img1} alt="Logo" className="h-32 mb-4" />
                    </div>

                    <h2 className="text-2xl font-bold text-center text-gray-900 my-5">Register</h2>
                    <p className='bg-cyan-950 h-0.5 w-full my-10'></p>
                    <Formik
                        initialValues={{ name: '', email: '', password: '', confirmPassword: '', phoneNumber: '', specialization: '', licenseNumber: '' }}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting, values }) => (
                            <Form className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
                                    <Field
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="block w-full p-2 mt-1 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
                                        placeholder="Your Name"
                                    />
                                    <ErrorMessage name="name" component="p" className="text-sm text-red-500" />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                                    <Field
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="block w-full p-2 mt-1 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
                                        placeholder="you@example.com"
                                    />
                                    <ErrorMessage name="email" component="p" className="text-sm text-red-500" />
                                </div>

                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                                    <Field
                                        type="password"
                                        id="password"
                                        name="password"
                                        className="block w-full p-2 mt-1 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
                                        placeholder="********"
                                    />
                                    <ErrorMessage name="password" component="p" className="text-sm text-red-500" />
                                </div>

                                <div>
                                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password:</label>
                                    <Field
                                        type="password"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        className="block w-full p-2 mt-1 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
                                        placeholder="********"
                                    />
                                    <ErrorMessage name="confirmPassword" component="p" className="text-sm text-red-500" />
                                </div>

                                {/* Phone Number */}
                                <div>
                                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number:</label>
                                    <Field
                                        type="text"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        className="block w-full p-2 mt-1 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
                                        placeholder="+20xxxxxxxxx"
                                    />
                                    <ErrorMessage name="phoneNumber" component="p" className="text-sm text-red-500" />
                                </div>

                                {/* Specialization Dropdown */}
                                <div>
                                    <label htmlFor="specialization" className="block text-sm font-medium text-gray-700">Specialization:</label>
                                    <Field
                                        as="select"
                                        id="specialization"
                                        name="specialization"
                                        className="block w-full p-2 mt-1 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
                                    >
                                        <option value="">Select Specialization</option>
                                        <option value="Doctor">Doctor</option>
                                        <option value="Admin">Admin</option>
                                        <option value="Receptionist">Receptionist</option>
                                    </Field>
                                    <ErrorMessage name="specialization" component="p" className="text-sm text-red-500" />
                                </div>

                                {/* License Number (for Doctor specialization only) */}
                                {values.specialization === 'Doctor' && (
                                    <div>
                                        <label htmlFor="licenseNumber" className="block text-sm font-medium text-gray-700">License Number:</label>
                                        <Field
                                            type="text"
                                            id="licenseNumber"
                                            name="licenseNumber"
                                            className="block w-full p-2 mt-1 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
                                            placeholder="License Number"
                                        />
                                        <ErrorMessage name="licenseNumber" component="p" className="text-sm text-red-500" />
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    className="w-full px-4 py-2 text-white bg-cyan-800 rounded-md hover:bg-cyan-950 focus:ring-4 focus:ring-cyan-500"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Registering...' : 'Register'}
                                </button>
                            </Form>
                        )}
                    </Formik>

                    {/* React Hot Toast notifications */}
                    <Toaster position="top-center" />
                </div>
            </div>
        </div>
    );
}

export default RegisterForm;


import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Toaster, toast } from 'react-hot-toast';

// Define the types for form inputs
interface LoginFormInputs {
    email: string;
    password: string;
}

// Define the validation schema using Yup
const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
});

// Define the functional component
function LoginForm() {
    // Handle form submission
    const handleSubmit = (values: LoginFormInputs) => {
        toast.success('Login successful!');
        console.log(values); // Perform login logic here
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-center text-gray-900">Login</h2>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form className="space-y-4">
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

                            <button
                                type="submit"
                                className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-500"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Logging in...' : 'Login'}
                            </button>
                        </Form>
                    )}
                </Formik>

                {/* React Hot Toast notifications */}
                <Toaster position="top-center" />
            </div>
        </div>
    );
}

export default LoginForm;
